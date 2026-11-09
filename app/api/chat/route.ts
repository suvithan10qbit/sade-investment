import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic();

// In-memory rate limiter: max 20 requests per IP per minute
const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

const ALLOWED_ROLES = new Set(["user", "assistant"]);
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

const SYSTEM_PROMPT = `You are an AI assistant for SADE INVESTMENT, a private investment firm based in Dubai, UAE.

SADE INVESTMENT focuses on long-term strategic investments and partnerships across six key sectors:
1. Technology and digital — software, platforms, and digital services
2. Gaming and esports — culture and technology convergence
3. Resources and commodities — gold trading, mining, and natural resources
4. Financial services — platforms and partners with enduring market relevance
5. Consumer products — brands with loyal customers and responsible growth
6. Maritime — shipping, vessels, and marine services

Our philosophy: We build long-term value through strategic investments, partnerships, and active participation in business growth. We work with businesses across borders and stages, believing in careful evaluation, aligned partnership, and active participation.

We are based in Dubai, UAE, with a global perspective and long-term capital approach.

Your role:
- Answer questions about SADE INVESTMENT, our sectors, and our investment philosophy
- Help visitors understand what we do and who we work with
- Guide potential partners or enquiries toward contacting us at /contact
- Be professional, concise, and aligned with our brand voice: sophisticated yet accessible
- Do NOT make up specific investment figures, portfolio companies, or financial data
- For all serious enquiries, encourage users to reach out through our contact page

Keep responses concise and professional. If you don't know something specific, say so and suggest they contact us directly.`;

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return new Response(JSON.stringify({ error: "Too many requests. Please try again shortly." }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Parse and validate body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!body || typeof body !== "object" || !Array.isArray((body as Record<string, unknown>).messages)) {
    return new Response(JSON.stringify({ error: "Invalid messages format." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const rawMessages = (body as { messages: unknown[] }).messages;

  // Validate message count
  if (rawMessages.length === 0 || rawMessages.length > MAX_MESSAGES) {
    return new Response(JSON.stringify({ error: "Invalid message count." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Validate each message: only allow user/assistant roles, string content, max length
  const messages: { role: "user" | "assistant"; content: string }[] = [];
  for (const msg of rawMessages) {
    if (!msg || typeof msg !== "object") {
      return new Response(JSON.stringify({ error: "Malformed message." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }
    const { role, content } = msg as Record<string, unknown>;
    if (typeof role !== "string" || !ALLOWED_ROLES.has(role)) {
      return new Response(JSON.stringify({ error: "Invalid message role." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }
    if (typeof content !== "string" || content.length === 0 || content.length > MAX_MESSAGE_LENGTH) {
      return new Response(JSON.stringify({ error: "Invalid message content." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }
    messages.push({ role: role as "user" | "assistant", content });
  }

  // Last message must be from user
  if (messages[messages.length - 1].role !== "user") {
    return new Response(JSON.stringify({ error: "Last message must be from user." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const stream = await client.messages.create({
    model: "claude-opus-5-5",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages,
    stream: true,
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`));
          }
          if (event.type === "message_stop") {
            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            controller.close();
          }
        }
      } catch {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: "Stream error." })}\n\n`));
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}

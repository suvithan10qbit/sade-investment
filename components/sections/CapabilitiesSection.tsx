import React from "react";

interface Capability {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const capabilities: Capability[] = [
  {
    badge: "Control Investments",
    title: "Majority Buyouts & Recapitalizations",
    description:
      "Partnering with founders and family-owned enterprises facing leadership succession or multi-jurisdictional expansion. We supply stability, institutional governance, and liquidity while honoring corporate culture.",
    tags: ["Enterprise Software", "Healthcare Tech", "Specialty Manufacturing"],
    icon: (
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
    ),
  },
  {
    badge: "Expansion Capital",
    title: "Strategic Growth Equity",
    description:
      "Providing patient, non-dilutive capital injections for proven market leaders scaling into international markets. Structured minority or significant co-lead positions that supercharge commercial momentum.",
    tags: ["Recurring SaaS Revenue", "High EBITDA Conversion", "Market Share Acceleration"],
    icon: (
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
    ),
  },
  {
    badge: "Vort Engine",
    title: "Operational Value Creation",
    description:
      "Deploying our dedicated internal Operating Partners in digital infrastructure, supply chain resilience, and add-on M&A execution. We transform legacy workflows into defensible market machines.",
    tags: ["Cross-Border Integration", "Executive Talent Pods", "AI Workflow Architecture"],
    icon: (
      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    ),
  },
  {
    badge: "Complex Mandates",
    title: "Structured Capital & Carve-Outs",
    description:
      "Complex corporate carve-outs and bespoke structured instruments engineered for rapid standalone operational independence. Tailored execution where conventional equity sponsors hesitate.",
    tags: ["Corporate Divestitures", "Secondary Liquidity", "Standalone Transitions"],
    icon: (
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" />
    ),
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      className="py-24 sm:py-32 relative bg-[#f1f4f6] border-t border-neutral-200/80 overflow-hidden"
      id="capabilities"
    >
      <div className="absolute inset-0 glow-teal-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold tracking-widest text-[#0d3034] uppercase mb-4 shadow-sm">
              <span>[ WHAT WE DELIVER / INVESTMENT CAPABILITIES ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0f1719] tracking-tight leading-[1.15]">
              End-to-End Capital Solutions Tailored for Industry Transformation
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4a5558] max-w-md font-body leading-relaxed">
            From control buyouts to structured growth equity, our flexible mandates empower management teams to scale sustainably through turbulent market regimes.
          </p>
        </div>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between group border border-neutral-200/80 shadow-sm card-glass-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold text-[#0d3034] bg-teal-50 border border-teal-200/60">
                    {cap.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#f4f6f7] border border-neutral-200/80 flex items-center justify-center text-[#0d3034] group-hover:bg-[#0d3034] group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      {cap.icon}
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-[#0f1719] tracking-tight mb-3 group-hover:text-[#0d3034] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-[#475569] font-body leading-relaxed mb-6">{cap.description}</p>
              </div>
              <div className="pt-6 border-t border-neutral-100">
                <span className="text-[11px] uppercase tracking-wider text-[#64748b] block font-mono mb-2">
                  Core Mandate Focus:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use server";

export type ContactFormData = {
  name: string;
  email: string;
  organisation: string;
  jobTitle: string;
  phone: string;
  enquiryType: string;
  message: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function submitContactForm(data: ContactFormData): Promise<ContactResult> {
  // Basic server-side validation
  if (!data.name?.trim()) return { ok: false, error: "Name is required." };
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: "A valid email address is required." };
  }
  if (!data.message?.trim()) return { ok: false, error: "Message is required." };

  // -----------------------------------------------------------------------
  // Email delivery — add your preferred provider here.
  //
  // Option A: Resend  (https://resend.com)
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "website@sadeinvestment.com",
  //     to:   "enquiries@sadeinvestment.com",
  //     subject: `New enquiry from ${data.name}`,
  //     text: formatEmail(data),
  //   });
  //
  // Option B: SendGrid, Nodemailer, etc.
  // -----------------------------------------------------------------------

  // Log submission server-side until an email provider is configured.
  console.log("[contact-form]", {
    name: data.name,
    email: data.email,
    organisation: data.organisation,
    enquiryType: data.enquiryType,
    receivedAt: new Date().toISOString(),
  });

  return { ok: true };
}

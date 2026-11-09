"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { submitContactForm } from "@/app/actions/contact";

const enquiryTypes = [
  "General enquiry",
  "Partnership or investment proposal",
  "Media",
  "Other",
];

const contactDetails = [
  { label: "General enquiries", value: "[General enquiries email — to be confirmed]" },
  { label: "Legal notices", value: "[Legal notices email — to be confirmed]" },
  { label: "Privacy requests", value: "[Privacy requests email — to be confirmed]" },
  { label: "Reporting suspected fraud or impersonation", value: "[Fraud reporting email — to be confirmed]" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", email: "", organisation: "", jobTitle: "", phone: "",
    enquiryType: "", message: "", consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Please tell us how we can help.";
    if (!form.consent) e.consent = "Please confirm your consent to continue.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSending(true);
    setServerError(null);
    try {
      const result = await submitContactForm({
        name: form.name,
        email: form.email,
        organisation: form.organisation,
        jobTitle: form.jobTitle,
        phone: form.phone,
        enquiryType: form.enquiryType,
        message: form.message,
      });
      if (result.ok) {
        setSubmitted(true);
      } else {
        setServerError(result.error);
      }
    } catch {
      setServerError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="bg-[#faf8f3] text-[#191c1d] font-sans antialiased">
      {/* Page Hero */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <Image src="/Golden Hour Curves by the Water.png" alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f3] from-30% via-[#faf8f3]/85 via-50% to-transparent to-70%" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f3]/60 via-transparent to-[#faf8f3]/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-36 pb-16">
          <nav className="flex items-center gap-2 text-xs text-[#6b7280] mb-10">
            <Link href="/" className="hover:text-[#0d1740] transition-colors">Home</Link>
            <svg className="w-3 h-3 fill-current opacity-40" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
            <span className="text-[#0d1740] font-medium">Contact</span>
          </nav>
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] font-bold tracking-widest text-[#c9a84c] uppercase">Start a Conversation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold text-[#0f1719] tracking-tight leading-[1.08] mb-6">
              Ideas Worth<br /><span className="text-[#c9a84c]">Exploring</span>
            </h1>
            <p className="text-base text-[#4a5558] leading-relaxed">
              Tell us about your business or your enquiry. We will respond within a few working days.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white rounded-3xl p-12 border border-[#c9a84c]/30 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-[#f2ede0] border border-[#c9a84c]/20 flex items-center justify-center text-[#0d1740] mx-auto mb-5">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#0f1719] mb-3">Thank you.</h2>
                <p className="text-sm text-[#475569] leading-relaxed">Your enquiry has been received. We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1719] mb-1.5">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white border ${errors.name ? "border-red-300" : "border-neutral-300"} text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0d1740] focus:border-transparent transition-all`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1719] mb-1.5">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email" value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white border ${errors.email ? "border-red-300" : "border-neutral-300"} text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0d1740] focus:border-transparent transition-all`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1719] mb-1.5">Organisation</label>
                    <input
                      type="text" value={form.organisation}
                      onChange={e => setForm(f => ({ ...f, organisation: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0d1740] focus:border-transparent transition-all"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1719] mb-1.5">Job title</label>
                    <input
                      type="text" value={form.jobTitle}
                      onChange={e => setForm(f => ({ ...f, jobTitle: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0d1740] focus:border-transparent transition-all"
                      placeholder="Your role"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1719] mb-1.5">Phone</label>
                    <input
                      type="tel" value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0d1740] focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1719] mb-1.5">Enquiry type <span className="text-red-500">*</span></label>
                    <select
                      value={form.enquiryType}
                      onChange={e => setForm(f => ({ ...f, enquiryType: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0d1740] focus:border-transparent transition-all"
                    >
                      <option value="">Select enquiry type</option>
                      {enquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0f1719] mb-1.5">How can we help? <span className="text-red-500">*</span></label>
                  <textarea
                    rows={5} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-white border ${errors.message ? "border-red-300" : "border-neutral-300"} text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0d1740] focus:border-transparent transition-all resize-none`}
                    placeholder="Tell us about your business or what you are looking for..."
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox" checked={form.consent}
                      onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
                      className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-[#0d1740] focus:ring-[#0d1740]"
                    />
                    <span className="text-xs text-[#475569] leading-relaxed">
                      I agree that SADE INVESTMENT may process my details to respond to my enquiry, as set out in the{" "}
                      <a href="/legal/privacy" className="text-[#0d1740] underline underline-offset-2">Privacy Policy</a>.
                    </span>
                  </label>
                  {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
                </div>
                {serverError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{serverError}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,#8b6a14,#c9a84c,#e8d4a0)] text-[#0d1740] hover:opacity-90 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-5">
                Contact details
              </div>
              <div className="space-y-4">
                {contactDetails.map((c, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm">
                    <p className="text-xs font-semibold text-[#0f1719] mb-1">{c.label}</p>
                    <p className="text-xs text-[#64748b]">{c.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fraud notice */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200/60">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" /></svg>
                <div>
                  <h4 className="text-sm font-semibold text-amber-800 mb-2">Fraud and impersonation notice</h4>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    SADE INVESTMENT will never ask you to transfer money or share banking details through this website or through unsolicited messages. If you receive a message that appears to come from us and you are unsure, please contact us at the fraud reporting email above.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm">
              <p className="text-xs text-[#64748b] leading-relaxed">
                Dubai office: [Office address, Dubai, United Arab Emirates — to be confirmed]
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | SADE INVESTMENT",
  description: "Privacy policy for SADE INVESTMENT — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#faf8f3] text-[#191c1d] font-sans antialiased min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6b7280] mb-10">
          <Link href="/" className="hover:text-[#0d1740] transition-colors">Home</Link>
          <svg className="w-3 h-3 fill-current opacity-40" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
          <span className="text-[#0d1740] font-medium">Privacy Policy</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-[10px] font-bold tracking-widest text-[#8b6a14] uppercase">Legal</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1719] tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#6b7280] mb-12">Last updated: November 2026</p>

        <div className="space-y-8 text-[#475569] leading-relaxed text-sm">

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">1. Who we are</h2>
            <p>SADE INVESTMENT is a private investment firm based in Dubai, United Arab Emirates. We are the data controller for the personal information collected through this website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">2. What data we collect</h2>
            <p>When you use the contact form on this website, we collect the following information:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your organisation and job title (optional)</li>
              <li>Your phone number (optional)</li>
              <li>The nature of your enquiry and your message</li>
            </ul>
            <p className="mt-3">We also collect standard technical data through website analytics, such as your IP address, browser type, and pages visited, to understand how our site is used.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">3. How we use your data</h2>
            <p>We use your personal data to:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Respond to your enquiry</li>
              <li>Manage our business relationship with you or your organisation</li>
              <li>Comply with our legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">4. Legal basis for processing</h2>
            <p>We process your data on the basis of your consent (when you submit the contact form) and our legitimate interests in responding to business enquiries and managing our operations.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">5. Data retention</h2>
            <p>We retain your personal data for as long as necessary to fulfil the purposes described in this policy, or as required by law. Enquiry data is typically retained for up to three years unless a business relationship is established.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">6. Your rights</h2>
            <p>Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data. You may also have the right to data portability and the right to object to processing. To exercise any of these rights, please <Link href="/contact" className="text-[#0d1740] font-medium underline underline-offset-2 hover:text-[#c9a84c] transition-colors">contact us</Link>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">7. Cookies</h2>
            <p>This website uses cookies. For details, please see our <Link href="/legal/cookies" className="text-[#0d1740] font-medium underline underline-offset-2 hover:text-[#c9a84c] transition-colors">Cookie Policy</Link>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">8. Security</h2>
            <p>We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">9. Changes to this policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any significant changes by updating the date at the top of this page.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">10. Contact</h2>
            <p>For any privacy-related questions or to exercise your rights, please <Link href="/contact" className="text-[#0d1740] font-medium underline underline-offset-2 hover:text-[#c9a84c] transition-colors">contact us</Link>.</p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200/80 flex gap-6 text-xs text-[#6b7280]">
          <Link href="/legal/terms" className="hover:text-[#0d1740] transition-colors">Terms and Conditions</Link>
          <Link href="/legal/cookies" className="hover:text-[#0d1740] transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
}

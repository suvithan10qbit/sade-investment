import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | SADE INVESTMENT",
  description: "Cookie policy for SADE INVESTMENT — how we use cookies on this website.",
};

export default function CookiesPage() {
  return (
    <div className="bg-[#faf8f3] text-[#191c1d] font-sans antialiased min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6b7280] mb-10">
          <Link href="/" className="hover:text-[#0d1740] transition-colors">Home</Link>
          <svg className="w-3 h-3 fill-current opacity-40" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
          <span className="text-[#0d1740] font-medium">Cookie Policy</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-[10px] font-bold tracking-widest text-[#8b6a14] uppercase">Legal</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1719] tracking-tight mb-4">Cookie Policy</h1>
        <p className="text-sm text-[#6b7280] mb-12">Last updated: November 2026</p>

        <div className="space-y-8 text-[#475569] leading-relaxed text-sm">

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">1. What are cookies</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">2. How we use cookies</h2>
            <p>This website uses a minimal set of cookies to:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Ensure the website functions correctly (strictly necessary cookies)</li>
              <li>Understand how visitors use the site, so we can improve it (analytics cookies)</li>
            </ul>
            <p className="mt-3">We do not use advertising or tracking cookies.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">3. Types of cookies we use</h2>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 pr-4 font-semibold text-[#0f1719]">Type</th>
                    <th className="text-left py-2 pr-4 font-semibold text-[#0f1719]">Purpose</th>
                    <th className="text-left py-2 font-semibold text-[#0f1719]">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium text-[#0f1719]">Strictly necessary</td>
                    <td className="py-2 pr-4">Required for the website to function. Cannot be disabled.</td>
                    <td className="py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-[#0f1719]">Analytics</td>
                    <td className="py-2 pr-4">Help us understand how visitors interact with the website.</td>
                    <td className="py-2">Up to 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">4. Managing cookies</h2>
            <p>Most browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of this website.</p>
            <p className="mt-3">For more information on managing cookies, visit <span className="text-[#0d1740] font-medium">aboutcookies.org</span> or your browser&apos;s help documentation.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">5. Changes to this policy</h2>
            <p>We may update this cookie policy from time to time. We will notify you of any significant changes by updating the date at the top of this page.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">6. Contact</h2>
            <p>If you have any questions about our use of cookies, please <Link href="/contact" className="text-[#0d1740] font-medium underline underline-offset-2 hover:text-[#c9a84c] transition-colors">contact us</Link>.</p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200/80 flex gap-6 text-xs text-[#6b7280]">
          <Link href="/legal/terms" className="hover:text-[#0d1740] transition-colors">Terms and Conditions</Link>
          <Link href="/legal/privacy" className="hover:text-[#0d1740] transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

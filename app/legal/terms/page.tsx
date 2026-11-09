import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | SADE INVESTMENT",
  description: "Terms and conditions for use of the SADE INVESTMENT website.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#faf8f3] text-[#191c1d] font-sans antialiased min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6b7280] mb-10">
          <Link href="/" className="hover:text-[#0d1740] transition-colors">Home</Link>
          <svg className="w-3 h-3 fill-current opacity-40" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
          <span className="text-[#0d1740] font-medium">Terms and Conditions</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-[10px] font-bold tracking-widest text-[#8b6a14] uppercase">Legal</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1719] tracking-tight mb-4">Terms and Conditions</h1>
        <p className="text-sm text-[#6b7280] mb-12">Last updated: November 2026</p>

        <div className="prose prose-sm max-w-none space-y-8 text-[#475569] leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">1. About this website</h2>
            <p>This website is operated by SADE INVESTMENT, a private investment firm based in Dubai, United Arab Emirates. By accessing or using this website, you agree to be bound by these terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">2. Information only</h2>
            <p>The content on this website is provided for general information purposes only. It does not constitute investment advice, an offer to invest, a solicitation of investment, or any form of financial, legal, or tax advice. You should not rely on any content on this website when making investment or financial decisions.</p>
            <p className="mt-3">SADE INVESTMENT does not guarantee the accuracy, completeness, or timeliness of any information on this website. We may update or change the content at any time without notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">3. No offer or solicitation</h2>
            <p>Nothing on this website constitutes or should be construed as an offer or invitation to buy or sell any investment, security, or financial instrument, or to engage in any investment activity. Any such offer or invitation will only be made through formal documentation and in compliance with applicable law.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">4. Intellectual property</h2>
            <p>All content on this website, including text, images, logos, and design, is the property of SADE INVESTMENT or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">5. Third-party links</h2>
            <p>This website may contain links to third-party websites. These links are provided for your convenience only. SADE INVESTMENT has no control over the content of those websites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">6. Limitation of liability</h2>
            <p>To the fullest extent permitted by law, SADE INVESTMENT excludes all liability for any loss or damage arising from use of this website or reliance on its content, whether direct, indirect, or consequential.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">7. Governing law</h2>
            <p>These terms are governed by the laws of the United Arab Emirates. Any disputes arising from use of this website shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">8. Changes to these terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use of this website after any changes constitutes your acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0f1719] mb-3">9. Contact</h2>
            <p>If you have any questions about these terms, please <Link href="/contact" className="text-[#0d1740] font-medium underline underline-offset-2 hover:text-[#c9a84c] transition-colors">contact us</Link>.</p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200/80 flex gap-6 text-xs text-[#6b7280]">
          <Link href="/legal/privacy" className="hover:text-[#0d1740] transition-colors">Privacy Policy</Link>
          <Link href="/legal/cookies" className="hover:text-[#0d1740] transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import InsightsContent from "@/components/sections/insights/InsightsContent";

export const metadata = {
  title: "Insights on Strategic Investment",
  description: "Insights from SADE INVESTMENT on strategic investment, long-term value creation, markets and growth capital.",
};

export default function InsightsPage() {
  return (
    <div className="bg-[#faf8f3] text-[#191c1d] font-sans antialiased">
      {/* Page Hero */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <Image src="/Golden Hour Curves by the Water.png" alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f3] from-30% via-[#faf8f3]/85 via-50% to-transparent to-70%" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f3]/60 via-transparent to-[#faf8f3]/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-36 pb-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6b7280] mb-10">
            <Link href="/" className="hover:text-[#0d1740] transition-colors">Home</Link>
            <svg className="w-3 h-3 fill-current opacity-40" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
            <span className="text-[#0d1740] font-medium">Insights</span>
          </nav>
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] font-bold tracking-widest text-[#8b6a14] uppercase">Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold text-[#0f1719] tracking-tight leading-[1.08] mb-6">
              Perspectives &amp;<br /><span className="text-[#c9a84c]">Insights</span>
            </h1>
            <p className="text-base text-[#4a5558] leading-relaxed">
              Perspectives from the SADE INVESTMENT team on long-term investing, markets, sectors and the businesses we look at.
            </p>
          </div>
        </div>
      </section>

      <InsightsContent />
    </div>
  );
}


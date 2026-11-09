import Link from "next/link";
import { FadeUp } from "@/components/ui/animations";

export default function PerspectiveSection() {
  return (
    <section id="perspective" className="py-24 sm:py-32 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-6">
            The SADE perspective
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0f1719] tracking-tight leading-[1.15] mb-6">
            Conviction is built over time.
          </h2>
          <p className="text-base sm:text-lg text-[#1e292b] leading-relaxed mb-4">
            SADE INVESTMENT is an international private investment firm based in Dubai. We seek out thoughtful opportunities, bring a global perspective, and stay close to the businesses we back.
          </p>
          <p className="text-sm text-[#475569] leading-relaxed mb-8">
            Our aim is straightforward: long-term value creation, built on careful evaluation and meaningful partnership.
          </p>
          <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d1740] hover:underline">
            Discover our approach
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

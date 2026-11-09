import Link from "next/link";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/animations";

const sectors = [
  { num: "01", title: "Technology and digital", desc: "Backing businesses that shape how the world connects, works and grows." },
  { num: "02", title: "Gaming and esports", desc: "Partnering with ambitious teams at the intersection of culture and technology." },
  { num: "03", title: "Resources and commodities", desc: "Taking a considered view across gold trading, mining and natural resources." },
  { num: "04", title: "Financial services", desc: "Supporting platforms and partners with enduring relevance to their markets." },
  { num: "05", title: "Consumer products", desc: "Looking at brands and products with loyal customers and responsible growth models." },
  { num: "06", title: "Maritime", desc: "Businesses connected to shipping, vessels and marine services where relationships matter." },
];

export default function SectorsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#faf8f3] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-4 shadow-sm">
              Where we look
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0f1719] tracking-tight leading-[1.15]">
              Opportunity has no single address.
            </h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d1740] hover:underline shrink-0">
            Discuss an opportunity
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
        </FadeUp>

        {/* Bento Magazine Grid — 6 sectors */}
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-6 gap-4">

          {/* 01 Technology — large featured dark, col-span-4 */}
          <StaggerItem className="sm:col-span-4">
            <Link href="/investment-focus"
              className="block rounded-3xl bg-[#0d1740] p-10 flex flex-col justify-between min-h-[280px] group transition-all duration-300 hover:bg-[#1e2d6e]">
              <div className="flex items-start justify-between">
                <span className="text-[80px] font-bold leading-none text-white/[0.06] select-none -mt-4 -ml-2">01</span>
                <span className="text-[10px] font-mono tracking-widest text-[#c9a84c]/60 uppercase mt-1">Sector</span>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3 group-hover:text-[#e8d4a0] transition-colors">
                  Technology and digital
                </h3>
                <p className="text-sm text-[#e8d4a0]/70 leading-relaxed max-w-sm">
                  Backing businesses that shape how the world connects, works and grows — from software and platforms to digital services.
                </p>
              </div>
            </Link>
          </StaggerItem>

          {/* 02 Gaming — col-span-2, tall */}
          <StaggerItem className="sm:col-span-2">
            <Link href="/investment-focus"
              className="block rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[280px] shadow-sm group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">02</span>
              <div>
                <h3 className="text-xl font-semibold text-[#0f1719] mb-3 group-hover:text-[#0d1740] transition-colors">
                  Gaming and esports
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Partnering with ambitious teams at the intersection of culture and technology.
                </p>
              </div>
            </Link>
          </StaggerItem>

          {/* 03 Resources — col-span-2 */}
          <StaggerItem className="sm:col-span-2">
            <Link href="/investment-focus"
              className="block rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[220px] shadow-sm group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">03</span>
              <div>
                <h3 className="text-lg font-semibold text-[#0f1719] mb-2 group-hover:text-[#0d1740] transition-colors">
                  Resources and commodities
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  A considered view across gold trading, mining and natural resources.
                </p>
              </div>
            </Link>
          </StaggerItem>

          {/* 04 Financial services — col-span-2 */}
          <StaggerItem className="sm:col-span-2">
            <Link href="/investment-focus"
              className="block rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[220px] shadow-sm group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">04</span>
              <div>
                <h3 className="text-lg font-semibold text-[#0f1719] mb-2 group-hover:text-[#0d1740] transition-colors">
                  Financial services
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Supporting platforms and partners with enduring relevance to their markets.
                </p>
              </div>
            </Link>
          </StaggerItem>

          {/* 05 Consumer products — col-span-2 */}
          <StaggerItem className="sm:col-span-2">
            <Link href="/investment-focus"
              className="block rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[220px] shadow-sm group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">05</span>
              <div>
                <h3 className="text-lg font-semibold text-[#0f1719] mb-2 group-hover:text-[#0d1740] transition-colors">
                  Consumer products
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Brands and products with loyal customers, clear positioning and responsible growth.
                </p>
              </div>
            </Link>
          </StaggerItem>

          {/* 06 Maritime — col-span-6 wide banner */}
          <StaggerItem className="sm:col-span-6">
            <Link href="/investment-focus"
              className="block rounded-3xl bg-white p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase shrink-0">06</span>
                <h3 className="text-xl font-semibold text-[#0f1719] group-hover:text-[#0d1740] transition-colors">Maritime</h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed max-w-lg">
                Businesses connected to shipping, vessels and marine services — where relationships, expertise and long-term thinking make the difference.
              </p>
              <svg className="w-5 h-5 fill-current text-[#0d1740]/30 group-hover:text-[#0d1740] transition-colors shrink-0" viewBox="0 0 20 20">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </StaggerItem>

        </StaggerGrid>
      </div>
    </section>
  );
}

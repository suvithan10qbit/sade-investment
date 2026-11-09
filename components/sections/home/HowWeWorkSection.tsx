import Link from "next/link";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/animations";

export default function HowWeWorkSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#faf8f3] border-t border-neutral-200/80 relative overflow-hidden">
      <div className="absolute inset-0 glow-teal-radial pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeUp className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-4 shadow-sm">
            How we work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0f1719] tracking-tight leading-[1.15]">
            Capital is only the beginning.
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-4">
            We believe the most valuable partnerships are formed well before a transaction and endure well beyond it.
          </p>
        </FadeUp>

        {/* Bento Magazine Grid — 3 steps */}
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-10">

          {/* 01 Careful evaluation — dark hero, col-span-3, tall */}
          <StaggerItem className="sm:col-span-3">
            <div className="rounded-3xl bg-[#0d1740] p-10 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:bg-[#1e2d6e]">
              <div>
                <span className="text-[90px] font-bold leading-none text-white/[0.06] select-none -ml-2 -mt-4 block">01</span>
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#c9a84c]/60 uppercase">Step one</span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-2 mb-4">
                  Careful<br />evaluation.
                </h3>
                <p className="text-sm text-[#e8d4a0]/70 leading-relaxed max-w-sm">
                  We take the time to understand the people, the potential and the context behind every opportunity — before we commit.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* 02 & 03 stacked right, col-span-2 */}
          <StaggerItem className="sm:col-span-2 flex flex-col gap-4">
            {/* 02 Aligned partnership */}
            <div className="flex-1 rounded-3xl bg-white p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">Step two</span>
                <span className="text-5xl font-bold text-[#0d1740]/[0.06] leading-none select-none">02</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f1719] mb-2">Aligned partnership.</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We work collaboratively with leaders who share a long-term view of progress.
                </p>
              </div>
            </div>

            {/* 03 Active participation */}
            <div className="flex-1 rounded-3xl bg-white p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">Step three</span>
                <span className="text-5xl font-bold text-[#0d1740]/[0.06] leading-none select-none">03</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f1719] mb-2">Active participation.</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We bring perspective, relationships and engagement where it counts.
                </p>
              </div>
            </div>
          </StaggerItem>

        </StaggerGrid>

        <FadeUp delay={0.1}>
          <Link href="/about#approach" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d1740] hover:underline">
            Our investment approach
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

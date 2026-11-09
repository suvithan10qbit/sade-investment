import GlobeViz from "@/components/ui/GlobeViz";
import { FadeIn } from "@/components/ui/animations";

const regions = ["Europe", "North America", "Middle East", "Asia-Pacific", "Selected African markets"];

export default function CrossBorderSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#faf8f3] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase">
              A cross-border view
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0f1719] tracking-tight leading-[1.15]">
              Locally informed.<br />Globally connected.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              From our base in Dubai, our investment reach covers established and emerging markets, with a perspective shaped by relationships across geographies.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {regions.map(r => (
                <span key={r} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-neutral-200/80 text-[#0f1719] shadow-sm">
                  {r}
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <GlobeViz />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

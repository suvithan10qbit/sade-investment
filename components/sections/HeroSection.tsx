import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden bg-[#f4f6f7]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAynCcH6eRUg68NAstBwiorer_fubIlfxE8bpvL9OEOh2JiNmfFy3B6Vttw9auSwxy08tL-TH7V8Cr35Kf_1mnptUvWE-yPjWyqupAgc4XYUrkSiQ8uHWV1hpaeMlICsJfeDXmUGizi7rOk2y6GRIGYn9iwp8YEhJ0swM3TqB5YmVtm4eEcDuzrps2aVBVs2FlgvfHMFOMT2L7eerwbgYMKkSodanAlzzqRBuUUkAs"
          alt="Architectural ribbed curves"
          fill
          className="object-cover object-center opacity-30 contrast-[1.05] saturate-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-white/40 to-white/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10 flex flex-col justify-between min-h-[calc(100vh-140px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto pt-10">
          {/* Left Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium text-[#0f1719] tracking-tight leading-[1.08]">
              Building Long-Term Value<br />
              In Uncertain Markets
            </h1>
            <p className="text-sm sm:text-base text-[#4a5558] max-w-xl font-normal leading-relaxed pt-2">
              We invest with conviction, insight, and discipline — partnering with exceptional leaders to create lasting impact across evolving industries.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#0d3034] text-white hover:bg-[#124045] transition-all shadow-sm"
              >
                <span>Get In Touch</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  />
                </svg>
              </Link>
              <Link
                href="#portfolio"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-200/90 shadow-sm transition-all"
              >
                Our Portfolio
              </Link>
            </div>
          </div>

          {/* Right Stat Card */}
          <div className="lg:col-span-4 flex justify-end lg:pr-4">
            <div className="w-full max-w-sm rounded-2xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 p-7 shadow-lg transition-all">
              <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#0f1719] mb-2">$2.4B+</div>
              <p className="text-xs text-neutral-500 font-medium tracking-wide">Invested across private markets</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="w-full flex justify-end items-center pt-8 pb-2">
          <Link href="#partners" className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
            <span>Scroll to Explore</span>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

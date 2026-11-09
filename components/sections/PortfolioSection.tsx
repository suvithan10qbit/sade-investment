import Link from "next/link";
import Image from "next/image";

const metrics = [
  { value: "3.2x", label: "ARR Expansion" },
  { value: "14", label: "New Jurisdictions" },
  { value: "99.8%", label: "Customer Retention" },
];

export default function PortfolioSection() {
  return (
    <section
      className="py-24 sm:py-32 bg-[#f8f9fa] text-[#191c1d] relative overflow-hidden border-t border-neutral-200/80"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-semibold tracking-widest text-[#0d3034] uppercase mb-3">
              <span>[ SELECT HOLDINGS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0f1719] tracking-tight">
              Partnered With Visionary Operators
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d3034] hover:underline"
          >
            <span>Explore All Portfolio Assets</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              />
            </svg>
          </Link>
        </div>

        {/* Featured Portfolio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-white border border-neutral-200/80 overflow-hidden shadow-lg mb-12">
          {/* Left: Details */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-teal-50 text-[#0d3034] rounded-full text-xs font-semibold border border-teal-200/60">
                  Enterprise Infrastructure
                </span>
                <span className="text-xs text-neutral-500 font-medium">Acquired 2022</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f1719] mb-4">Union Software Group</h3>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-6 font-body">
                Union Software provides mission-critical enterprise workflow automation for global maritime supply chains. Partnering with Vort enabled two strategic European acquisitions and expanded gross margins by 420 bps.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-neutral-100 pt-6">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl sm:text-3xl font-bold text-[#0f1719] tracking-tight">{m.value}</p>
                    <p className="text-xs text-[#64748b] mt-0.5 font-mono">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 flex items-center justify-between border-t border-neutral-100">
              <span className="text-xs uppercase font-semibold tracking-wider text-neutral-500">Status: Active Platform</span>
              <span className="text-xs font-semibold text-[#0d3034]">Primary Sponsor: Vort Fund III</span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 relative min-h-[320px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjIVr8LmvBGfrXSq7jyuY0pF3H732yHlnU0WcY0WSGYK1A-OHzAkLOzY_cfeXd54SA9UFNDu4_a7tgstDYZ8WwBScTCBZ3DYfGR2WcP6H6317X72rlh2PjV4bPLDyVOgkB7mV9Y9in_8ePnW5LsWcUcU_hydSwznb5ttx6DK0cvfvv7leDwa5PmQ3NoUR15VNSsPwgEUgPWvU4Ph5uBNIUmkk6O-aDDxhp3F0chQc"
              alt="Union Software Group Operations & Infrastructure"
              fill
              className="object-cover brightness-95 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}

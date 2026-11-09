const pillars = [
  {
    num: "01",
    title: "Thematic Sourcing Engine",
    badge: "Proprietary",
    description:
      "Proprietary market intelligence pinpointing resilient sectors. Over 70% of platform transactions are secured through relationship-driven, off-market dialogues outside hyper-competitive auctions.",
  },
  {
    num: "02",
    title: "Active Partnership & Playbooks",
    badge: "Execution",
    description:
      "Direct operational playbooks, C-suite executive augmentation, modern data architectures, and AI workflow integration delivering quantifiable EBITDA margin acceleration from Day 100.",
  },
  {
    num: "03",
    title: "Long-Term Skin-in-the-Game Alignment",
    badge: "Fiduciary",
    description:
      "Significant General Partner capital commitment across every single fund vintage. Our partners invest heavily alongside limited partners, ensuring pure ethical alignment and shared risk.",
  },
];

const metrics = [
  {
    value: "18+ Years",
    label: "Consistent Track Record",
    description: "Navigating full market cycles through disciplined asset underwriting.",
  },
  {
    value: "32",
    label: "Platform Investments",
    description: "Core holdings scaled across enterprise infrastructure & advanced industries.",
  },
  {
    value: "24.8%",
    label: "Realized Net IRR",
    description: "Historic net internal rate of return across fully realized platform exits.",
    highlight: true,
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 sm:py-32 relative bg-[#f8f9fa] overflow-hidden" id="about">
      {/* Decorative glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0d3034]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#1a4d52]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50/80 border border-teal-200/50 text-xs font-semibold tracking-widest text-[#0d3034] uppercase mb-4">
            <span>[ ABOUT VORT CAPITAL ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0f1719] tracking-tight leading-[1.15]">
            Decades of Rigorous Discipline, Uncompromising Conviction.
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left: Narrative + Quote */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-[#1e292b] font-body leading-relaxed">
              At Vort, we don&apos;t gamble on speculative hype cycles. We operate as institutional custodians of generational business durability — identifying mission-critical companies with non-discretionary demand curves, defensive moats, and hidden operating tailwinds.
            </p>
            <p className="text-sm sm:text-base text-[#475569] font-body leading-relaxed">
              Our playbook blends deep thematic domain conviction with battle-tested operational engineering. Rather than passive board governance, we deploy tactical operating partners into supply-chain logistics, AI workflow modernizations, and cross-border M&amp;A integration to compound resilient equity value across macroeconomic headwinds.
            </p>
            {/* Quote Block */}
            <div className="p-6 rounded-2xl bg-white border-l-4 border-[#0d3034] border-y border-r border-neutral-200/80 shadow-sm backdrop-blur-md">
              <p className="text-xs sm:text-sm text-[#1e292b] italic font-body">
                &quot;Capital is abundant; clarity and execution rigor are exceedingly rare. We align with founders whose products the modern economy cannot afford to pause.&quot;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-xs font-bold text-[#0d3034]">
                  MV
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f1719]">Marcus Vance</p>
                  <p className="text-[11px] text-[#64748b]">Co-Founder &amp; Senior Managing Partner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="lg:col-span-7 space-y-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="bg-white rounded-2xl p-7 flex flex-col sm:flex-row items-start gap-5 border border-neutral-200/80 shadow-sm hover:border-neutral-300 card-glass-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0d3034] font-bold text-sm flex-shrink-0 shadow-sm">
                  {pillar.num}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <h4 className="text-lg font-semibold text-[#0f1719] tracking-tight">{pillar.title}</h4>
                    <span className="text-[11px] uppercase tracking-wider text-[#0d3034] font-mono px-2 py-0.5 rounded bg-teal-50 border border-teal-200/60">
                      {pillar.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[#475569] font-body leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-16 pt-10 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm">
              <div className={`text-3xl sm:text-4xl font-semibold tracking-tight mb-1 ${m.highlight ? "text-[#0d3034]" : "text-[#0f1719]"}`}>
                {m.value}
              </div>
              <p className="text-xs uppercase font-medium tracking-wider text-[#64748b]">{m.label}</p>
              <p className="text-xs text-[#475569] mt-2 font-body">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

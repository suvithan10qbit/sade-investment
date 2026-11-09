import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About SADE INVESTMENT | Dubai Investment Firm",
  description: "Learn about SADE INVESTMENT, a private investment firm based in Dubai, and our approach to long-term value creation and partnership.",
};

const principles = [
  { title: "A long-term view", desc: "We measure progress in years, not quarters, and we decide with that horizon in mind." },
  { title: "Careful evaluation", desc: "We take time to understand the people, the potential and the context behind every opportunity." },
  { title: "Aligned partnership", desc: "We work with leaders who share our view of progress and who value open, honest communication." },
  { title: "Active participation", desc: "Where it helps, we contribute perspective, relationships and engagement â€” not only capital." },
  { title: "Integrity", desc: "We act with transparency and respect for the businesses, partners and communities we work with." },
];

export default function AboutPage() {
  return (
    <main className="bg-[#faf8f3] text-[#191c1d] font-sans antialiased">
      {/* Page Hero — full-bleed image with left white blend */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Full-width background image */}
        <Image
          src="/Golden Hour Curves by the Water.png"
          alt="Dubai skyline"
          fill
          className="object-cover object-center"
          priority
        />

        {/* White gradient overlay — solid on left, fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f3] from-30% via-[#faf8f3]/85 via-50% to-transparent to-70%" />
        {/* Top & bottom fades for polish */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f3]/60 via-transparent to-[#faf8f3]/30" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-36 pb-16 flex flex-col">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#6b7280] mb-10">
            <Link href="/" className="hover:text-[#0d1740] transition-colors">Home</Link>
            <svg className="w-3 h-3 fill-current opacity-40" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
            <span className="text-[#0d1740] font-medium">About Us</span>
          </nav>

          <div className="max-w-xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] font-bold tracking-widest text-[#c9a84c] uppercase">About Us</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold text-[#0f1719] tracking-tight leading-[1.08] mb-6">
              A Trusted Partner<br />
              in{" "}
              <span className="text-[#c9a84c]">Strategic Investment</span>
            </h1>

            {/* Description */}
            <p className="text-base text-[#4a5558] leading-relaxed mb-10">
              We are a UAE-based investment and consulting firm, committed to creating long-term value through strategic capital, industry expertise, and global opportunities.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link href="#approach" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0d1740] text-white hover:bg-[#1e2d6e] transition-all">
                Our Story
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
              </Link>
              <Link href="#leadership" className="px-7 py-3.5 rounded-full text-sm font-medium text-[#0d1740] border border-[#0d1740]/30 hover:border-[#0d1740] bg-white/70 hover:bg-white transition-all">
                Our Leadership
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-stretch gap-0 divide-x divide-neutral-300/60 border-t border-neutral-200/80 pt-8">
              <div className="flex flex-col gap-1.5 pr-8">
                <svg className="w-5 h-5 text-[#c9a84c] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l5-5 4 4 5-6 4 4" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3V3" /></svg>
                <span className="text-2xl font-bold text-[#0f1719]">10+</span>
                <span className="text-xs text-[#6b7280]">Years of Experience</span>
              </div>
              <div className="flex flex-col gap-1.5 px-8">
                <svg className="w-5 h-5 text-[#c9a84c] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                <span className="text-2xl font-bold text-[#0f1719]">$500M+</span>
                <span className="text-xs text-[#6b7280]">Assets Under Advisory</span>
              </div>
              <div className="flex flex-col gap-1.5 pl-8">
                <svg className="w-5 h-5 text-[#c9a84c] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5.197-3.787M9 20H4v-2a4 4 0 015.197-3.787M15 11a4 4 0 11-8 0 4 4 0 018 0zm6 0a3 3 0 11-6 0 3 3 0 016 0zM3 11a3 3 0 116 0 3 3 0 01-6 0z" /></svg>
                <span className="text-2xl font-bold text-[#0f1719]">50+</span>
                <span className="text-xs text-[#6b7280]">Strategic Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview & Philosophy */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase">
              Company overview
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight">Who we are</h2>
            <p className="text-base text-[#1e292b] leading-relaxed">
              SADE INVESTMENT is an international private investment firm based in Dubai, United Arab Emirates. We work with businesses through strategic investments, partnerships and active participation in growth.
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">
              We look at companies at different stages and in different markets. What stays constant is our approach: careful evaluation, patient capital and close partnership with the people who run the businesses we back.
            </p>
          </div>
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase">
              Our philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight">How we think</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              We believe lasting value is built over time, not in a single transaction. We would rather understand a business thoroughly and stay with it than move quickly and move on.
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">
              That means asking practical questions early: who leads the business, what problem it solves, how it earns, and what it needs to grow well. It also means being honest about what we can contribute, and what we cannot.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-4 shadow-sm">
              Vision &amp; Mission
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight">What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-10 border border-neutral-200/80 shadow-sm card-glass-hover">
              <div className="w-10 h-10 rounded-xl bg-[#f2ede0] border border-[#c9a84c]/20 flex items-center justify-center text-[#0d1740] text-xs font-bold mb-6">V</div>
              <h3 className="text-xl font-semibold text-[#0f1719] mb-3">Vision</h3>
              <p className="text-sm text-[#475569] leading-relaxed italic">
                To be a trusted long-term partner to ambitious businesses, building value that lasts across markets and across cycles.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-neutral-200/80 shadow-sm card-glass-hover">
              <div className="w-10 h-10 rounded-xl bg-[#f2ede0] border border-[#c9a84c]/20 flex items-center justify-center text-[#0d1740] text-xs font-bold mb-6">M</div>
              <h3 className="text-xl font-semibold text-[#0f1719] mb-3">Mission</h3>
              <p className="text-sm text-[#475569] leading-relaxed italic">
                To invest with care, partner with integrity and take an active role in the growth of the businesses we support, guided by a global perspective and a long-term view.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles — Bento Magazine Grid */}
      <section className="py-20 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-4">
              Our principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight">What guides us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">

            {/* 01 — A long-term view: featured dark hero, col-span-4 */}
            <div className="sm:col-span-4 rounded-3xl bg-[#0d1740] p-10 flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:bg-[#1e2d6e]">
              <div className="flex items-start justify-between">
                <span className="text-[80px] font-bold leading-none text-white/[0.06] select-none -mt-4 -ml-2">01</span>
                <span className="text-[10px] font-mono tracking-widest text-[#c9a84c]/60 uppercase mt-1">Principle</span>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
                  A long-term view.
                </h3>
                <p className="text-sm text-[#e8d4a0]/75 leading-relaxed max-w-sm">
                  We measure progress in years, not quarters, and we decide with that horizon in mind. Patient capital is not a strategy — it is how we think.
                </p>
              </div>
            </div>

            {/* 02 — Careful evaluation: col-span-2 */}
            <div className="sm:col-span-2 rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[280px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">02</span>
                <span className="text-5xl font-bold text-[#0d1740]/[0.06] leading-none select-none">02</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f1719] mb-2">Careful evaluation.</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We take time to understand the people, the potential and the context behind every opportunity.
                </p>
              </div>
            </div>

            {/* 03 — Aligned partnership: col-span-2 white */}
            <div className="sm:col-span-2 rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[220px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">03</span>
                <span className="text-5xl font-bold text-[#0d1740]/[0.07] leading-none select-none">03</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0f1719] mb-2">Aligned partnership.</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We work with leaders who share our view of progress and value open, honest communication.
                </p>
              </div>
            </div>

            {/* 04 — Active participation: col-span-2 white */}
            <div className="sm:col-span-2 rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[220px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">04</span>
                <span className="text-5xl font-bold text-[#0d1740]/[0.06] leading-none select-none">04</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0f1719] mb-2">Active participation.</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Where it helps, we contribute perspective, relationships and engagement — not only capital.
                </p>
              </div>
            </div>

            {/* 05 — Integrity: col-span-2 white */}
            <div className="sm:col-span-2 rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[220px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/50 uppercase">05</span>
                <span className="text-5xl font-bold text-[#0d1740]/[0.12] leading-none select-none">05</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0f1719] mb-2">Integrity.</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We act with transparency and respect for the businesses, partners and communities we work with.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Approach — Bento Magazine Grid */}
      <section id="approach" className="py-20 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-4 shadow-sm">
              Our approach
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight mb-4">Flexible by design</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Depending on the business and the moment, we may invest early, support a growth phase, take part in a strategic acquisition, or look at a selected special situation. In each case we follow the same three steps.
            </p>
          </div>

          {/* Bento Grid: tall left hero + stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4" style={{ gridAutoRows: "1fr" }}>

            {/* 01 — Careful evaluation: tall dark hero, spans 3 cols & 2 rows */}
            <div className="md:col-span-3 md:row-span-2 rounded-3xl bg-[#0d1740] p-10 flex flex-col justify-between min-h-[380px] group transition-all duration-300 hover:bg-[#1e2d6e]">
              <div>
                <span className="text-[100px] font-bold leading-none text-white/[0.06] select-none -ml-2 -mt-4 block">01</span>
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#c9a84c]/60 uppercase">Step one</span>
                <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2 mb-4">
                  Careful<br />evaluation.
                </h3>
                <p className="text-sm text-[#e8d4a0]/75 leading-relaxed max-w-sm">
                  We study the people, the market and the business model before we commit. No shortcuts — we take the time to understand the context behind every opportunity.
                </p>
              </div>
            </div>

            {/* 02 — Aligned partnership: top right, spans 2 cols */}
            <div className="md:col-span-2 rounded-3xl bg-white p-9 flex flex-col justify-between min-h-[180px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">Step two</span>
                <span className="text-5xl font-bold text-[#0d1740]/[0.06] leading-none select-none -mt-1">02</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f1719] mb-2">Aligned partnership.</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We agree early on expectations, governance and how we will work together — before the first decision is made.
                </p>
              </div>
            </div>

            {/* 03 — Active participation: bottom right, spans 2 cols */}
            <div className="md:col-span-2 rounded-3xl bg-white p-9 flex flex-col justify-between min-h-[180px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase">Step three</span>
                <span className="text-5xl font-bold text-[#0d1740]/[0.07] leading-none select-none -mt-1">03</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f1719] mb-2">Active participation.</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We stay engaged after the investment and contribute perspective, relationships and engagement where it counts.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Dubai */}
      <section className="py-20 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-6">
              Why Dubai
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight mb-5">Our base</h2>
            <p className="text-sm text-[#475569] leading-relaxed mb-8">
              Dubai is a well-connected international business centre, with a diverse business community and strong links to Europe, Asia and Africa. For SADE INVESTMENT it is a practical base from which to build relationships across regions.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,#8b6a14,#c9a84c,#e8d4a0)] text-[#0d1740] hover:opacity-90 transition-all shadow-sm">
              Start a conversation
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


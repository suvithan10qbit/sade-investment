import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Investment Focus: Sectors and Stage",
  description: "Our investment focus: technology, gaming and esports, commodities, mining, financial services, consumer products and maritime.",
};

const sectors = [
  {
    num: "01",
    title: "Technology and digital",
    desc: "We look for businesses that use technology to improve how people and organisations connect, work and transact â€” from software and platforms to digital services. We value sound fundamentals, capable leadership and a credible route to durable growth.",
    tags: ["Software & platforms", "Digital services", "B2B technology"],
  },
  {
    num: "02",
    title: "Gaming and esports",
    desc: "Gaming and esports sit where entertainment, community and technology meet. We partner with teams and platforms building sustainable businesses around engaged audiences.",
    tags: ["Game studios", "Esports platforms", "Gaming technology"],
  },
  {
    num: "03",
    title: "Gold trading and commodities",
    desc: "We take a considered, long-term view of commodities, including gold trading. Our approach is disciplined, guided by fundamentals and a patient capital horizon.",
    tags: ["Commodities", "Natural resources", "Long-term view"],
  },
  {
    num: "04",
    title: "Mining and natural resources",
    desc: "We consider opportunities in mining and natural resources where operating discipline, responsible practice and a long horizon matter.",
    tags: ["Mining operations", "Resource development", "Responsible practice"],
  },
  {
    num: "05",
    title: "Financial services and asset management",
    desc: "We support platforms and partners whose services remain relevant to their markets through changing conditions.",
    tags: ["Asset management", "Financial platforms", "Enduring relevance"],
  },
  {
    num: "06",
    title: "Consumer products",
    desc: "We look at brands and products with loyal customers, clear positioning and models that can grow responsibly.",
    tags: ["Consumer brands", "Loyal audiences", "Responsible growth"],
  },
  {
    num: "07",
    title: "Maritime",
    desc: "We consider businesses connected to shipping, vessels and marine services, where relationships, expertise and long-term thinking make the difference.",
    tags: ["Shipping", "Marine services", "Long-term relationships"],
  },
];

const stages = [
  { title: "Early-stage and seed", desc: "Backing founders with clear ideas at the start of their journey." },
  { title: "Growth-stage", desc: "Supporting companies with proven models ready to scale." },
  { title: "Established businesses", desc: "Partnering with businesses with track records and enduring models." },
  { title: "Strategic acquisitions", desc: "Taking part in acquisitions where we can add meaningful value." },
  { title: "Selected special situations", desc: "Engaging with complex opportunities where our approach fits." },
];

const lookFor = [
  { title: "Capable, principled leadership", desc: "Leaders with a long-term view, integrity and openness to partnership." },
  { title: "A clear, defensible business", desc: "A credible path to durable growth and a business model that makes sense." },
  { title: "Openness to partnership", desc: "Transparency, good governance and genuine alignment on working together." },
  { title: "Decision-making alignment", desc: "Agreement on how decisions are made and how progress is measured." },
];

const faqs = [
  {
    q: "What kinds of businesses does SADE INVESTMENT consider?",
    a: "We consider businesses across technology and digital, gaming and esports, commodities, mining and natural resources, financial services, consumer products and maritime, at different stages and in different markets.",
  },
  {
    q: "Is this website an offer to invest?",
    a: "No. This website is for information only. It is not an offer, invitation or solicitation, and it does not provide investment advice. Please read our Terms and Conditions.",
  },
  {
    q: "Can I send a proposal?",
    a: "You are welcome to start a conversation through our contact page. Please tell us briefly about your business and what you are looking for.",
  },
  {
    q: "Where is SADE INVESTMENT based?",
    a: "Our base is in Dubai, United Arab Emirates. See our offices page for details.",
  },
];

export default function InvestmentFocusPage() {
  return (
    <main className="bg-[#faf8f3] text-[#191c1d] font-sans antialiased">
      {/* Page Hero */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <Image src="/Dubai Skyline and Coastal Panorama.png" alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f3] from-30% via-[#faf8f3]/85 via-50% to-transparent to-70%" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f3]/60 via-transparent to-[#faf8f3]/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-36 pb-16">
          <nav className="flex items-center gap-2 text-xs text-[#6b7280] mb-10">
            <Link href="/" className="hover:text-[#0d1740] transition-colors">Home</Link>
            <svg className="w-3 h-3 fill-current opacity-40" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
            <span className="text-[#0d1740] font-medium">Investment Focus</span>
          </nav>
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] font-bold tracking-widest text-[#c9a84c] uppercase">Investment Focus</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold text-[#0f1719] tracking-tight leading-[1.08] mb-6">
              Our Investment<br /><span className="text-[#c9a84c]">Focus</span>
            </h1>
            <p className="text-base text-[#4a5558] leading-relaxed">
              We invest where we can combine careful judgement with patient capital. Our focus areas reflect the sectors we understand, the relationships we have, and the businesses we believe can create lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors — Bento Magazine Grid */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-4">
              Sectors
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight">Where we look</h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-auto gap-4">

            {/* 01 — Technology: featured dark hero card, col-span-2 */}
            <div className="sm:col-span-2 rounded-3xl bg-[#0d1740] p-10 flex flex-col justify-between min-h-[280px] group transition-all duration-300 hover:bg-[#1e2d6e]">
              <div className="flex items-start justify-between">
                <span className="text-[80px] font-bold leading-none text-white/8 select-none -mt-4 -ml-2">01</span>
                <span className="text-[10px] font-mono tracking-widest text-[#c9a84c]/70 uppercase mt-1">Technology</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">Technology and digital</h3>
                <p className="text-sm text-[#e8d4a0]/80 leading-relaxed max-w-md">
                  We look for businesses that use technology to improve how people and organisations connect, work and transact — from software and platforms to digital services.
                </p>
                <div className="flex gap-2 mt-5 flex-wrap">
                  {["Software & platforms", "Digital services", "B2B technology"].map(t => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-[#e8d4a0] font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 02 — Gaming: tall card */}
            <div className="rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[280px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/50 uppercase">02</span>
              <div>
                <h3 className="text-xl font-semibold text-[#0f1719] mb-3 mt-6">Gaming and esports</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Partnering with teams and platforms building sustainable businesses around engaged audiences at the intersection of culture and technology.
                </p>
              </div>
              <div className="flex gap-2 mt-5 flex-wrap">
                {["Game studios", "Esports platforms"].map(t => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-[#faf8f3] text-neutral-600 font-medium">{t}</span>
                ))}
              </div>
            </div>

            {/* 03 — Gold trading: small card */}
            <div className="rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[220px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/50 uppercase">03</span>
              <div>
                <h3 className="text-lg font-semibold text-[#0f1719] mb-2 mt-4">Gold trading and commodities</h3>
                <p className="text-sm text-[#475569] leading-relaxed">A considered, long-term view guided by fundamentals and a patient capital horizon.</p>
              </div>
            </div>

            {/* 04 — Mining: small card */}
            <div className="rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[220px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/50 uppercase">04</span>
              <div>
                <h3 className="text-lg font-semibold text-[#0f1719] mb-2 mt-4">Mining and natural resources</h3>
                <p className="text-sm text-[#475569] leading-relaxed">Operating discipline, responsible practice and a long horizon in resources.</p>
              </div>
            </div>

            {/* 05 — Financial services: small card */}
            <div className="rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[220px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/50 uppercase">05</span>
              <div>
                <h3 className="text-lg font-semibold text-[#0f1719] mb-2 mt-4">Financial services</h3>
                <p className="text-sm text-[#475569] leading-relaxed">Platforms and partners whose services remain relevant through changing conditions.</p>
              </div>
            </div>

            {/* 06 — Consumer products: wide card col-span-2 */}
            <div className="sm:col-span-2 rounded-3xl bg-white p-9 flex flex-col sm:flex-row gap-8 items-start min-h-[200px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex-1">
                <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/50 uppercase">06</span>
                <h3 className="text-xl font-semibold text-[#0f1719] mb-3 mt-4">Consumer products</h3>
                <p className="text-sm text-[#475569] leading-relaxed">Brands and products with loyal customers, clear positioning and models that can grow responsibly across markets.</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:self-end">
                {["Consumer brands", "Loyal audiences", "Responsible growth"].map(t => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-[#faf8f3] text-neutral-600 font-medium">{t}</span>
                ))}
              </div>
            </div>

            {/* 07 — Maritime: single card */}
            <div className="rounded-3xl bg-white p-8 flex flex-col justify-between min-h-[200px] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/50 uppercase">07</span>
              <div>
                <h3 className="text-lg font-semibold text-[#0f1719] mb-2 mt-4">Maritime</h3>
                <p className="text-sm text-[#475569] leading-relaxed">Shipping, vessels and marine services — where relationships and long-term thinking make the difference.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Investment Stage — Full-Bleed Dark Grid */}
      <section className="bg-[#0d1740] border-t border-white/10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-widest text-[#c9a84c] uppercase mb-4">
                Investment stage
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight">Flexible on stage</h2>
            </div>
            <p className="text-sm text-[#e8d4a0]/60 leading-relaxed max-w-sm">
              What matters most is the quality of the people, the clarity of the opportunity and the fit with our long-term approach.
            </p>
          </div>
        </div>

        {/* Full-bleed grid — flush, divided by hairlines */}
        <div className="border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 divide-white/10 sm:divide-x">
          {stages.map((s, i) => (
            <div key={i} className="group px-8 py-10 flex flex-col gap-6 transition-all duration-300 hover:bg-white/[0.04]">
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#c9a84c]/60 uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-6xl font-bold text-white/[0.05] leading-none select-none -mt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-2 leading-snug group-hover:text-[#e8d4a0] transition-colors">{s.title}</h3>
                <p className="text-xs text-[#e8d4a0]/50 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom padding */}
        <div className="pb-6" />
      </section>

      {/* Geography */}
      <section className="py-20 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-6">
                Geography
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight mb-5">Our investment reach</h2>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Our investment reach covers Europe, North America, the Middle East, Asia-Pacific and selected African markets.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Europe", "North America", "Middle East", "Asia-Pacific", "Selected African markets"].map(r => (
                  <span key={r} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-neutral-200/80 text-[#0f1719] shadow-sm">{r}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-2">
                What we look for in a partner
              </div>
              {lookFor.map((l, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 flex items-start gap-4 border border-neutral-200/80 shadow-sm card-glass-hover">
                  <div className="w-8 h-8 rounded-lg bg-[#f2ede0] border border-[#c9a84c]/20 flex items-center justify-center text-[#0d1740] font-bold text-xs flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0f1719] mb-1">{l.title}</h4>
                    <p className="text-xs text-[#475569] leading-relaxed">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-4 shadow-sm">
                Frequently asked questions
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight">Common questions</h2>
            </div>
            <p className="text-sm text-[#475569] max-w-xs md:text-right">More questions? Reach us through the contact page.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#0d1740]/40 uppercase mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-5xl font-bold text-[#0d1740]/[0.05] leading-none select-none -mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#0f1719] mb-2 leading-snug">{f.q}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight mb-4">Have a proposal or partnership idea?</h2>
          <p className="text-sm text-[#475569] mb-8 max-w-lg mx-auto">We welcome a conversation. Tell us about your business and what you are looking for.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,#8b6a14,#c9a84c,#e8d4a0)] text-[#0d1740] hover:opacity-90 transition-all shadow-md">
            Discuss an opportunity
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}


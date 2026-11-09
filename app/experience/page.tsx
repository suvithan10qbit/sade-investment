import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Experience",
  description: "Explore the investments and partnerships behind SADE INVESTMENT, including milestones and exited ventures, shown in order.",
};

const timeline = [
  {
    name: "Camper & Nicholsons",
    role: "[Role to be confirmed]",
    status: "Active",
    desc: "Details of investment type and involvement to be confirmed with supporting documentation.",
  },
  {
    name: "CMC (West African Minerals)",
    role: "[Role to be confirmed]",
    status: "Active",
    desc: "Full legal name, role, investment type and exit status to be confirmed.",
  },
  {
    name: "Unikrn",
    role: "[Role to be confirmed]",
    status: "Exited",
    desc: "Exit year and transaction details to be confirmed with a public source.",
  },
];

export default function ExperiencePage() {
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
            <span className="text-[#0d1740] font-medium">Our Experience</span>
          </nav>
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] font-bold tracking-widest text-[#c9a84c] uppercase">Our Experience</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold text-[#0f1719] tracking-tight leading-[1.08] mb-6">
              A Record of<br /><span className="text-[#c9a84c]">Partnership</span>
            </h1>
            <p className="text-base text-[#4a5558] leading-relaxed mb-5">
              Our experience is shown through the investments and partnerships we have been part of. Each entry is published only where it can be properly supported.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/60 text-xs text-amber-700 font-medium">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" /></svg>
              Entries are published only where they can be properly supported.
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-4">
              Timeline of investments
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight">Selected investments and partnerships</h2>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-neutral-200 hidden sm:block" />
            <div className="space-y-6">
              {timeline.map((entry, i) => (
                <div key={i} className="relative sm:pl-14">
                  <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center hidden sm:flex">
                    <div className="w-3 h-3 rounded-full bg-[#0d1740] opacity-60" />
                  </div>
                  <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-sm card-glass-hover">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-[#0f1719]">{entry.name}</h3>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${entry.status === "Exited" ? "bg-neutral-100 text-neutral-600 border-neutral-200" : "bg-[#f2ede0] text-[#0d1740] border-[#c9a84c]/30"}`}>
                        {entry.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748b] font-medium mb-2">{entry.role}</p>
                    <p className="text-sm text-[#475569] leading-relaxed">{entry.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reading note */}
      <section className="py-16 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-sm">
            <h3 className="text-base font-semibold text-[#0f1719] mb-3">Reading the timeline</h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-1.5 flex-shrink-0" />Exited investments are labelled as exited.</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-1.5 flex-shrink-0" />Where an investment cannot be named publicly, we do not list it.</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-1.5 flex-shrink-0" />Information on this page describes past activity only. It is not a guide to future results.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight mb-4">Interested in working together?</h2>
          <p className="text-sm text-[#475569] mb-8 max-w-lg mx-auto">We welcome conversations with businesses and partners who share our long-term view.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,#8b6a14,#c9a84c,#e8d4a0)] text-[#0d1740] hover:opacity-90 transition-all shadow-md">
            Start a conversation
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}


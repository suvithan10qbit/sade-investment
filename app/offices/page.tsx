import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Offices | Dubai, UAE",
  description: "Find SADE INVESTMENT in Dubai, UAE, with office details for our international locations and how to reach us.",
};

export default function OfficesPage() {
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
            <span className="text-[#0d1740] font-medium">Our Offices</span>
          </nav>
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] font-bold tracking-widest text-[#c9a84c] uppercase">Our Offices</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold text-[#0f1719] tracking-tight leading-[1.08] mb-6">
              Where We<br /><span className="text-[#c9a84c]">Are Based</span>
            </h1>
            <p className="text-base text-[#4a5558] leading-relaxed">
              SADE INVESTMENT is based in Dubai and works with partners across regions. You can reach us at the offices below.
            </p>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Dubai Principal Office */}
            <div className="bg-white rounded-3xl p-10 border border-[#0d1740]/20 shadow-sm relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#f2ede0] text-[#0d1740] border border-[#c9a84c]/30 font-semibold">Principal Office</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#f2ede0] border border-[#c9a84c]/20 flex items-center justify-center text-[#0d1740] mb-6">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#0f1719] mb-1">Dubai, United Arab Emirates</h2>
              <p className="text-xs text-[#64748b] font-medium mb-6 uppercase tracking-wider">Our Middle East base</p>
              <div className="space-y-3 text-sm text-[#475569]">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#0d1740] mt-0.5 flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                  <span>[Office address, Dubai, United Arab Emirates — to be confirmed]</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#0d1740] mt-0.5 flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  <span>[General enquiries email — to be confirmed]</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#0d1740] mt-0.5 flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  <span>[Phone — to be confirmed]</span>
                </div>
              </div>
              <div className="mt-8 h-40 bg-[#faf8f3] rounded-xl border border-neutral-200/60 flex items-center justify-center">
                <p className="text-xs text-neutral-400">Map placeholder — address to be confirmed</p>
              </div>
            </div>

            {/* Colombo */}
            <div className="bg-white rounded-3xl p-10 border border-neutral-200/80 shadow-sm card-glass-hover">
              <div className="w-12 h-12 rounded-xl bg-[#f2ede0] border border-[#c9a84c]/20 flex items-center justify-center text-[#0d1740] mb-6">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#0f1719] mb-1">Colombo, Sri Lanka</h2>
              <p className="text-xs text-[#64748b] font-medium mb-6 uppercase tracking-wider">South Asia</p>
              <div className="space-y-3 text-sm text-[#475569]">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#0d1740] mt-0.5 flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                  <span>WTC Colombo. [Full address — to be confirmed]</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#0d1740] mt-0.5 flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  <span>[Email — to be confirmed]</span>
                </div>
              </div>
            </div>
          </div>

          {/* More offices coming */}
          <div className="bg-[#faf8f3] rounded-3xl p-10 border border-neutral-200/80">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-4 shadow-sm">
              More offices
            </div>
            <h3 className="text-xl font-semibold text-[#0f1719] mb-3">Coming soon</h3>
            <p className="text-sm text-[#475569] mb-4">
              We are establishing offices in additional locations. Details will be published once confirmed.
            </p>
            <div className="flex flex-wrap gap-2">
              {["United Kingdom", "Australia", "Canada"].map(c => (
                <span key={c} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-neutral-200/80 text-neutral-500 shadow-sm">{c} — coming soon</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal note */}
      <section className="py-10 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs text-neutral-500 max-w-3xl">
            [Registered legal name], [licence number and licensing authority], registered office [address], Dubai, United Arab Emirates.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#faf8f3] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#0f1719] tracking-tight mb-4">Prefer to write to us first?</h2>
          <p className="text-sm text-[#475569] mb-8">Send an enquiry and we will respond in due course.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,#8b6a14,#c9a84c,#e8d4a0)] text-[#0d1740] hover:opacity-90 transition-all shadow-md">
            Send an enquiry
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}


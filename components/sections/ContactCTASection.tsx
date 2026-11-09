"use client";

const trustBadges = [
  "Strict Confidentiality",
  "Direct Partner Response",
  "Registered Institutional Mandate",
];

export default function ContactCTASection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Inquiry received. A managing partner will contact you discreetly.");
  }

  return (
    <section className="py-24 relative bg-[#f1f4f6] overflow-hidden" id="contact">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 border border-neutral-200 bg-white shadow-xl text-center relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-teal-50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-semibold tracking-widest text-[#0d3034] uppercase mb-3">
              <span>[ INITIATE DIALOGUE ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0f1719] tracking-tight mb-4">
              Have an Enterprise Ready for Scaling?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto mb-8 font-body leading-relaxed">
              Whether you are exploring transition liquidity, evaluating an institutional partner, or seeking active operational alignment, we welcome discreet, principal-to-principal discussions.
            </p>

            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-6"
            >
              <input
                type="email"
                required
                placeholder="Enter corporate email address"
                className="w-full px-5 py-3 rounded-full text-sm bg-[#f8f9fa] border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0d3034] focus:border-transparent transition-all shadow-inner"
              />
              <button
                type="submit"
                className="whitespace-nowrap px-7 py-3 rounded-full text-sm font-semibold bg-[#0d3034] hover:bg-[#124045] text-white transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Schedule Call</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748b]">
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0d3034]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

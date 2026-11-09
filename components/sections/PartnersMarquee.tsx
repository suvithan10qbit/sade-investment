import React from "react";

const partners: { name: string; icon: React.ReactNode }[] = [
  {
    name: "Apex Capital",
    icon: <path d="M12 2L2 22h20L12 2zm0 4.2L18.4 19H5.6L12 6.2z" />,
  },
  {
    name: "Meridian Health",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v10M7 12h10" />
      </>
    ),
  },
  {
    name: "Synthetix Dynamics",
    icon: <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 9l7-7m0 7l-7-7" stroke="currentColor" strokeWidth="2" />,
  },
  {
    name: "Veritas Robotics",
    icon: <path d="M12 3L4 9v12h16V9l-8-6zm0 3.5l5 3.75V19H7v-8.75l5-3.75z" />,
  },
  {
    name: "Novus Energy",
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    name: "Aura Cloud Platform",
    icon: (
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    ),
  },
  {
    name: "Cobalt Financial",
    icon: <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />,
  },
  {
    name: "Quantis Logistics",
    icon: (
      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
    ),
  },
];

function PartnerItem({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors group cursor-default">
      <svg
        className="w-5 h-5 text-[#0d3034] opacity-80 group-hover:opacity-100 transition-opacity"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
      <span className="text-sm font-semibold tracking-wider font-sans uppercase">{name}</span>
    </div>
  );
}

export default function PartnersMarquee() {
  const doubled = [...partners, ...partners];

  return (
    <section className="relative py-14 bg-[#f4f6f7] border-y border-neutral-200/60 overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-[10px] font-semibold tracking-widest text-[#1a4d52] uppercase shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0d3034]" />
          STRATEGIC CAPITAL PARTNERS &amp; PORTFOLIO LEADERS
        </div>
      </div>
      <div className="relative w-full mask-marquee overflow-hidden">
        <div className="flex items-center gap-12 sm:gap-16 whitespace-nowrap animate-marquee w-max py-2">
          {doubled.map((partner, i) => (
            <PartnerItem key={i} name={partner.name} icon={partner.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

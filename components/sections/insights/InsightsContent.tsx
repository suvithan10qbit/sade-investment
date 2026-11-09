"use client";

import { useState } from "react";

const categories = ["Investment perspectives", "Markets and regions", "Sector notes", "Company news"];

const comingSoon = [
  {
    category: "Investment perspectives",
    title: "Why long-term capital changes the questions we ask",
    desc: "How a long-term view shapes the way SADE INVESTMENT evaluates people, businesses and partnerships.",
    readTime: "5 min read",
  },
  {
    category: "Investment perspectives",
    title: "What we look for before we partner with a business",
    desc: "The people, clarity and alignment SADE INVESTMENT looks for before partnering with a business.",
    readTime: "4 min read",
  },
  {
    category: "Markets and regions",
    title: "Dubai as a base for cross-border partnerships",
    desc: "Why Dubai works as a practical base for building investment relationships across regions.",
    readTime: "4 min read",
  },
];

export default function InsightsContent() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? comingSoon.filter(a => a.category === active) : comingSoon;

  return (
    <>
      {/* Category filters */}
      <section className="py-8 bg-white border-b border-neutral-200/80 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter articles by category">
            <button
              onClick={() => setActive(null)}
              aria-pressed={active === null}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-colors ${
                active === null
                  ? "bg-[#0d1740] text-white"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              All
            </button>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c === active ? null : c)}
                aria-pressed={active === c}
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 transition-colors ${
                  active === c
                    ? "bg-[#0d1740] text-white"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-xs text-amber-700 font-medium mb-2">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" /></svg>
              Articles coming soon – check back shortly after launch
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm card-glass-hover overflow-hidden flex flex-col">
                <div className="bg-[#faf8f3] h-40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-[#f2ede0] border border-[#c9a84c]/20 flex items-center justify-center text-[#0d1740] mx-auto mb-2">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>
                    </div>
                    <span className="text-xs text-neutral-400">Coming soon</span>
                  </div>
                </div>
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#f2ede0] text-[#0d1740] border border-[#c9a84c]/30 font-medium">{a.category}</span>
                    <span className="text-xs text-neutral-400">{a.readTime}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0f1719] leading-snug">{a.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full py-16 text-center text-sm text-neutral-400">
                No articles in this category yet — check back after launch.
              </div>
            )}
          </div>
          <p className="mt-10 text-xs text-neutral-500 max-w-2xl">
            Articles are for information only. They are not investment advice, an offer or a solicitation.
          </p>
        </div>
      </section>
    </>
  );
}

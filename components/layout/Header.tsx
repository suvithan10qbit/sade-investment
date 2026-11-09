"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSidebar } from "./SidebarContext";

export default function Header() {
  const pathname = usePathname();
  const { open, setOpen } = useSidebar();

  // Close sidebar on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "/about", label: "About" },
    { href: "/investment-focus", label: "Investment Focus" },
    { href: "/experience", label: "Our Experience" },
    { href: "/insights", label: "Insights" },
    { href: "/offices", label: "Offices" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-3 px-6 md:px-12 backdrop-blur-sm bg-white/80 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.webp" alt="SADE INVESTMENT" width={200} height={66} className="h-14 w-auto object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 text-xs font-medium text-neutral-600">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={`px-3 py-1.5 rounded-full transition-colors ${pathname === l.href ? "bg-[#0d1740] text-white font-semibold" : "hover:text-neutral-900 hover:bg-neutral-100"}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold bg-[linear-gradient(135deg,#8b6a14,#c9a84c,#e8d4a0)] text-[#0d1740] hover:opacity-90 transition-all duration-200 shadow-sm">
              Start a conversation
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
            </Link>

            {/* Hamburger toggle — mobile only */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full bg-[#0d1740] hover:bg-[#162056] transition-colors shadow-sm"
            >
              {/* Top bar */}
              <span className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`} />
              {/* Middle bar */}
              <span className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "w-0 opacity-0" : "w-3.5 opacity-100"}`} />
              {/* Bottom bar */}
              <span className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] lg:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sidebar drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-2xl lg:hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
          <Image src="/logo.webp" alt="SADE INVESTMENT" width={120} height={40} className="h-9 w-auto object-contain" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
          >
            <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40 + 80}ms` : "0ms" }}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"} ${pathname === l.href ? "bg-[#0d1740] text-white font-semibold" : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Sidebar CTA */}
        <div className="px-4 py-6 border-t border-neutral-100">
          <p className="text-xs text-neutral-400 mb-3 px-1">Dubai, United Arab Emirates</p>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,#8b6a14,#c9a84c,#e8d4a0)] text-[#0d1740] hover:opacity-90 transition-all shadow-sm"
          >
            Start a conversation
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
        </div>
      </aside>
    </>
  );
}

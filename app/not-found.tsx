import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#faf8f3] text-[#191c1d] font-sans antialiased min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-[120px] font-bold leading-none text-[#0d1740]/[0.06] select-none mb-6">404</div>
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-[10px] font-bold tracking-widest text-[#8b6a14] uppercase">Page not found</span>
          <span className="w-8 h-px bg-[#c9a84c]" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0f1719] tracking-tight mb-4">
          This page does not exist.
        </h1>
        <p className="text-sm text-[#475569] leading-relaxed mb-10">
          The page you are looking for may have been moved, renamed, or is no longer available.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#0d1740] text-white hover:bg-[#1e2d6e] transition-all"
          >
            Go to homepage
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full text-sm font-medium text-[#0d1740] border border-[#0d1740]/30 hover:border-[#0d1740] bg-white hover:bg-white transition-all"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

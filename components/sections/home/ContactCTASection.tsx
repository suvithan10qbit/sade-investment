import Link from "next/link";
import { FadeUp } from "@/components/ui/animations";

export default function ContactCTASection() {
  return (
    <section className="py-24 bg-[#faf8f3] border-t border-neutral-200/80">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <div className="rounded-3xl p-10 sm:p-16 border border-neutral-200 bg-white shadow-xl text-center relative overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#f2ede0] rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ede0] border border-[#c9a84c]/30 text-xs font-semibold tracking-widest text-[#0d1740] uppercase mb-4">
                Start a conversation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0f1719] tracking-tight mb-4">
                Ideas worth exploring.
              </h2>
              <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto mb-8 leading-relaxed">
                Have a question or a partnership idea? We would be pleased to hear from you.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,#8b6a14,#c9a84c,#e8d4a0)] text-[#0d1740] hover:opacity-90 transition-all shadow-md">
                General and partnership enquiries
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

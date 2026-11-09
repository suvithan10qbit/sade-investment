import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#eef1f3] text-neutral-600 py-16 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-neutral-200/80">
          <div className="lg:col-span-1 space-y-4">
            <Image src="/logo.webp" alt="SADE INVESTMENT" width={200} height={66} className="h-14 w-auto object-contain" />
            <p className="text-xs text-neutral-500 font-medium tracking-wider italic">Global perspective. Lasting value.</p>
            <p className="text-xs text-neutral-600 max-w-xs leading-relaxed">An international private investment firm based in Dubai, UAE.</p>
            <div className="text-xs text-[#162056] font-mono pt-1">Dubai, United Arab Emirates</div>
          </div>
          <div>
            <h5 className="text-xs font-bold text-[#0f1719] uppercase tracking-wider mb-4">Firm</h5>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-[#0d1740] transition-colors">About</Link></li>
              <li><Link href="/investment-focus" className="hover:text-[#0d1740] transition-colors">Investment Focus</Link></li>
              <li><Link href="/experience" className="hover:text-[#0d1740] transition-colors">Our Experience</Link></li>
              <li><Link href="/offices" className="hover:text-[#0d1740] transition-colors">Offices</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold text-[#0f1719] uppercase tracking-wider mb-4">Insights &amp; Contact</h5>
            <ul className="space-y-2 text-xs">
              <li><Link href="/insights" className="hover:text-[#0d1740] transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-[#0d1740] transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-[#0d1740] transition-colors">Start a conversation</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold text-[#0f1719] uppercase tracking-wider mb-4">Legal</h5>
            <ul className="space-y-2 text-xs">
              <li><Link href="/legal/terms" className="hover:text-[#0d1740] transition-colors">Terms and Conditions</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-[#0d1740] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/cookies" className="hover:text-[#0d1740] transition-colors">Cookie Information</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 space-y-3">
          <p className="text-[11px] text-neutral-500">Information only. Not an offer or investment advice.</p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-[11px] text-neutral-500 gap-3">
            <p>© 2026 SADE INVESTMENT. All rights reserved.</p>
            <p className="max-w-2xl md:text-right">The information on this website is provided for general information only. It is not an offer, invitation or solicitation to buy or sell any security or to make any investment.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

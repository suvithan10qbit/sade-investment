import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="sade-hero" aria-labelledby="hero-heading">
      <Image src="/Sunset Promenade Beneath the Skyline.png" alt="Dubai skyline framed by sweeping waterfront architecture at sunset" fill priority sizes="100vw" className="sade-hero-image" />
      <div className="sade-hero-wash" aria-hidden="true" />
      <svg className="sade-hero-curves" viewBox="0 0 1774 887" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 175C170 5 408 170 819 91C518 299 375 373 164 503C84 551 28 575 0 606V175Z" fill="white" fillOpacity=".47" />
        <path d="M0 698C205 858 441 883 611 865C844 839 1038 720 1160 756C829 823 783 858 590 887H0V698Z" fill="white" fillOpacity=".66" />
        <path d="M0 853C104 766 240 778 342 840C203 818 93 842 0 887V853Z" fill="#e8ecfb" fillOpacity=".65" />
      </svg>
      <div className="sade-hero-content">
        <div className="sade-hero-badge"><span />Private Investment Firm | Dubai, UAE</div>
        <h1 id="hero-heading">Building long-term<br className="sade-desktop-break" /> value through <span>strategic investments.</span></h1>
        <p className="sade-hero-description">We work with businesses through strategic investments, partnerships and active participation in growth, across borders and across stages.</p>
        <div className="sade-hero-actions">
          <Link href="/investment-focus" className="sade-hero-primary">Explore Our Focus<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12h17m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          <Link href="/contact" className="sade-hero-secondary">Make an Enquiry</Link>
        </div>
        <div className="sade-hero-facts">
          <span><svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M3 24V15h5v9H3Zm8 0V9h5v15h-5Zm8 0V3h5v21h-5Z" /></svg>Dubai, UAE</span>
          <span><svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="m3 9 11-6 11 6-11 6L3 9Zm0 5 11 6 11-6M3 19l11 6 11-6" /></svg>Long-Term Capital</span>
          <span><svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="8" r="4" /><path d="M7 25v-5a7 7 0 0 1 14 0v5H7ZM6 7a3 3 0 0 0 0 6M22 7a3 3 0 0 1 0 6M5 16a5 5 0 0 0-4 5v2h3m19-7a5 5 0 0 1 4 5v2h-3" /></svg>A Global Perspective</span>
        </div>
        <a href="#perspective" className="sade-hero-scroll">Scroll to discover<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      </div>
    </section>
  );
}

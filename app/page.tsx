import HeroSection from "@/components/sections/home/HeroSection";
import PerspectiveSection from "@/components/sections/home/PerspectiveSection";
import SectorsSection from "@/components/sections/home/SectorsSection";
import CrossBorderSection from "@/components/sections/home/CrossBorderSection";
import HowWeWorkSection from "@/components/sections/home/HowWeWorkSection";
import StatementBand from "@/components/sections/home/StatementBand";
import ContactCTASection from "@/components/sections/home/ContactCTASection";

export default function Home() {
  return (
    <main className="bg-[#faf8f3] text-[#191c1d] font-sans antialiased">
      <HeroSection />
      <PerspectiveSection />
      <SectorsSection />
      <CrossBorderSection />
      <HowWeWorkSection />
      <StatementBand />
      <ContactCTASection />
    </main>
  );
}

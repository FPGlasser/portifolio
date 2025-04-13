import { AboutSection } from "@/core/presentation/components/features/portifolio/sections/AboutSection";
import { ContactSection } from "@/core/presentation/components/features/portifolio/sections/ContactSection";
import { HeroSection } from "@/core/presentation/components/features/portifolio/sections/HeroSection";
import { ServiceSection } from "@/core/presentation/components/features/portifolio/sections/ServiceSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}

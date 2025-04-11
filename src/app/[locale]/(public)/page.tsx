"use client";
import ScrollToHash from "@/components/effects/ScrollToSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceSection } from "@/components/sections/ServiceSection";

export default function Home() {
  return (
    <div>
      <ScrollToHash />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}

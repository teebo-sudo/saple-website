import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* 01 Navigation */}
      <Navigation />
      {/* 02 Hero */}
      <HeroSection />
      {/* 03 Showreel / Arbeiten */}
      <IntegrationsSection />
      {/* 04 Problem-Statement */}
      <DevelopersSection />
      {/* 05 Leistungen (4 Phasen) */}
      <FeaturesSection />
      {/* 06 Ergebnisse / Social Proof */}
      <InfrastructureSection />
      {/* 07 Warum Saple (Differenzierung) */}
      <SecuritySection />
      {/* 08 Testimonials */}
      <TestimonialsSection />
      {/* 09 So läuft's ab */}
      <HowItWorksSection />
      {/* 10 Zusammenarbeit / Pakete */}
      <PricingSection />
      {/* 11 Abschluss-CTA */}
      <CtaSection />
      {/* 12 Footer */}
      <FooterSection />
    </main>
  );
}

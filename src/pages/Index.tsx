import { HeroSection } from "@/components/HeroSection";
import { ContentSection } from "@/components/ContentSection";
import { ReasonsSection } from "@/components/ReasonsSection";
import { CTASection } from "@/components/CTASection";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContentSection />
      <ReasonsSection />
      <CTASection />
      <FloatingCTA />
    </main>
  );
};

export default Index;

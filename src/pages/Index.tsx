import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ContentSection } from "@/components/ContentSection";
import { CTASection } from "@/components/CTASection";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ContentSection />
      <CTASection />
      <FloatingCTA />
    </main>
  );
};

export default Index;

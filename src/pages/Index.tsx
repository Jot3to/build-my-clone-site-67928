import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ContentSection } from "@/components/ContentSection";
import { CTASection } from "@/components/CTASection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { LiveCounter } from "@/components/LiveCounter";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show floating CTA when hero section is not visible
        setShowFloatingCTA(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-100px"
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <ContentSection />
      <CTASection />
      {showFloatingCTA && <FloatingCTA />}
      <LiveCounter />
    </main>
  );
};

export default Index;

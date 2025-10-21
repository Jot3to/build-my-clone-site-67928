import { Badge } from "./Badge";

export const HeroSection = () => {
  return (
    <section className="hero-section min-h-[60vh] flex items-center py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <Badge>Sleep Resources</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-normal">
              How I Got My Toddler Sleeping 11 Hours a Night in Just 7 Days (Without Cry-It-Out)
            </h1>
            
            {/* Image shown after title on mobile, in grid on desktop */}
            <div className="flex justify-center md:hidden my-8">
              <img
                src={new URL("../assets/hero-sleeping-toddler.jpg", import.meta.url).href}
                alt="Peaceful sleeping toddler"
                className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              />
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              This is the 5-step method that's helped over 800 families end middle-of-the-night wake-ups in just two weeks – plus what to do when DIY isn't enough.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>By Sarah Martinez, Certified Pediatric Sleep Consultant</strong><br />
              Posted July 16, 2025
            </p>
          </div>
          
          {/* Image hidden on mobile, shown in grid on desktop */}
          <div className="hidden md:flex justify-center">
            <img
              src={new URL("../assets/hero-sleeping-toddler.jpg", import.meta.url).href}
              alt="Peaceful sleeping toddler"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

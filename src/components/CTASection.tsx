import { Button } from "./ui/button";

export const CTASection = () => {
  return (
    <section className="cta-section py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={new URL("../assets/consultant-with-child.jpg", import.meta.url).href}
              alt="Sarah Martinez, Certified Pediatric Sleep Consultant"
              className="rounded-3xl shadow-2xl w-full max-w-sm object-cover"
            />
          </div>
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl">
              How I Help Families Get Full Nights of Sleep
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              After struggling with my own daughter's sleep, I created a hands-on coaching program for families who need more than generic advice. It's called a <strong>Peaceful Nights Method</strong>, and it's helped over 800 families get their toddlers sleeping through the night in an average of 7 days.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              This is not a course or a one-size-fits-all eBook.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-lg font-semibold mb-2">
                It's a personalized, two-week program where I work with you directly to solve your toddler's sleep challenges.
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-white text-accent hover:bg-white/90 font-semibold text-lg px-8 py-6"
            >
              Learn More About the Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

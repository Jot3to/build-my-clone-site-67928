import { Check } from "lucide-react";

const reasons = [
  {
    title: "Designed for Real-Life Toddlers",
    description: "Works even if your child is a light sleeper, sensitive, or nothing else has worked."
  },
  {
    title: "No Cry-It-Out Needed",
    description: "Gentle, attachment-safe strategies that help your child sleep without fear, stress, or confusion."
  },
  {
    title: "Tailored to Your Family",
    description: "Your sleep plan fits your schedule, parenting style, and your toddler's unique personality."
  },
  {
    title: "Step-by-Step Coaching",
    description: "No more late-night Googling. You'll know exactly what to do every night, with daily check-ins and guidance."
  },
  {
    title: "Support When You Need It Most",
    description: "We handle night fixes and stylish staging that add an average 7% to final sale price—no upfront cost to you."
  },
  {
    title: "Quick, Measurable Progress",
    description: "Trained negotiators work every offer line-by-line, squeezing out extra dollars and cleaner terms."
  },
  {
    title: "Safe to Try, Guaranteed",
    description: "You'll know the numbers—views, inquiries, offers—in a Friday video recap that takes two minutes to watch."
  },
  {
    title: "Trusted by Hundreds of Families",
    description: "We tap live market stats, not gut guesses, to price your home for maximum demand from day one."
  },
  {
    title: "Built for Real-Life Chaos",
    description: "We tap live market stats, not gut guesses, to price your home for maximum demand from day one."
  },
  {
    title: "Results That Last",
    description: "Once your toddler learns to self-soothe, they stay asleep. No backsliding or endless regressions."
  }
];

export const ReasonsSection = () => {
  return (
    <section className="content-section py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            10 Reasons Parents Choose the Peaceful Nights Method
          </h2>
          <p className="text-lg text-muted-foreground">
            —and Feel Confident They're Making the Right Move
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

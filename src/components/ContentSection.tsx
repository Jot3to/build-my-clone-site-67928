export const ContentSection = () => {
  return (
    <section className="content-section py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl space-y-12">
        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl text-center">
            The 3 AM Wake Up Call That Changed Everything
          </h2>
          <p className="text-lg leading-relaxed">
            Three months ago, I was sitting in my kitchen at 3:17 AM, holding my crying two-year-old for the fourth time that night. My husband was passed out on the couch (lucky him), and I was running on maybe 2 hours of sleep. Again.
          </p>
          <p className="text-lg leading-relaxed">
            I remember thinking: "There HAS to be a better way."
          </p>
          <p className="text-lg leading-relaxed">
            As a pediatric sleep consultant, I help families with this exact problem every single day. But here I was, completely failing with my own toddler who treated bedtime like a "suggestion" rather than a rule.
          </p>
          <p className="text-lg leading-relaxed">
            That's when I realized something important, even us "experts" struggle with our own kids sometimes. And if I was having trouble, then thousands of other parents were probably going through the same nightmare.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Why Most Toddler Sleep Advice Doesn't Work (It's Not What You Think)
          </h2>
          <p className="text-lg leading-relaxed">
            Most parents think their toddler is just being difficult. But after working with over 800 families, I've learned that night-waking usually comes down to three simple things:
          </p>
          
          <div className="space-y-4 pl-6 border-l-4 border-primary/30">
            <div>
              <h3 className="text-xl font-bold mb-2">The Bedtime Shuffle</h3>
              <p className="leading-relaxed">
                Your toddler's internal clock gets confused when bedtime changes every night. Monday it's 7:30, Tuesday it's 8:15, Wednesday you're running late and it's 9:00. Their brain doesn't know when "sleep mode" should kick in.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">The Nap Trap</h3>
              <p className="leading-relaxed">
                Late afternoon naps are sleep killers. If your toddler naps after 3 PM, they're not tired enough at bedtime. They'll lay there wide awake, then crash around 10 PM and wake up at midnight ready to party.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">The Bedroom Chaos</h3>
              <p className="leading-relaxed">
                Toddlers need their room to scream "sleep time." But most bedrooms are full of distractions – nightlights that are too bright, toys everywhere, sounds from other rooms. Their brain stays in "play mode" instead of "sleep mode."
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            Here's the thing: once you understand these three issues, fixing them becomes way easier.
          </p>
        </article>

        <div className="my-12 flex justify-center">
          <img
            src={new URL("../assets/parent-tucking-child.jpg", import.meta.url).href}
            alt="Parent gently tucking in child at bedtime"
            className="rounded-3xl shadow-2xl w-full max-w-2xl object-cover"
            style={{ boxShadow: 'var(--shadow-soft)' }}
          />
        </div>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            My 5 Step "Sleep Reset" Method (Try This Tonight)
          </h2>
          <p className="text-lg leading-relaxed">
            After that brutal 3 AM wake-up call, I created a simple system that any parent can use. I tested it with my own daughter first, then with my clients. <strong>It works about 85% of the time</strong> when parents stick to it.
          </p>

          <div className="space-y-8 mt-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Step 1: Pick Your Bedtime and Stick to It</h3>
              <p className="leading-relaxed">
                Choose one bedtime (like 7:30 PM) and don't move it by more than 15 minutes all week. Your toddler's body clock will start working with you instead of against you.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Step 2: End All Naps by 2 PM</h3>
              <p className="leading-relaxed">
                I know this sounds scary, but late naps are the enemy of good nighttime sleep. If your toddler is still napping at 4 PM, they won't be tired at bedtime. Cut off naps by 2 PM, even if they're cranky for a few days.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Step 3: Create a Cave</h3>
              <p className="leading-relaxed">
                Make their bedroom as dark as possible. Cover any blinking lights, use blackout curtains, no screens, and keep it quiet. Think "cozy cave" not "fun playroom."
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Step 4: The 30-Minute Wind-Down</h3>
              <p className="leading-relaxed">
                Start the bedtime routine 30 minutes before bedtime. Read books, sing quiet songs, or do gentle stretches. No screens, no rough play, no exciting activities. This tells their brain it's time to slow down.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Step 5: The One-Time Check-In Rule</h3>
              <p className="leading-relaxed">
                When they call out or come to your room, you can check on them once. Keep it short and boring – no long conversations or extra stories. Then leave and don't go back, even if they cry for a bit.
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed mt-8">
            Most families see fewer wake-ups within 3-4 nights using just these steps.
          </p>
        </article>
      </div>
    </section>
  );
};

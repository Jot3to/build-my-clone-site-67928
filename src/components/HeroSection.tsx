import { Badge } from "./Badge";

export const HeroSection = () => {
  return (
    <section className="hero-section min-h-[60vh] flex items-center py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <Badge>Guía de Matrimonios</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-normal">
              5 errores que cometen la mayoría de los novios al hacer su lista de regalos (y cómo evitarlos)
            </h1>
            
            {/* Image shown after title on mobile, in grid on desktop */}
            <div className="flex justify-center md:hidden my-8">
              <img
                src={new URL("../assets/hero-sleeping-toddler.jpg", import.meta.url).href}
                alt="Pareja planificando su matrimonio"
                className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              />
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Organizar un matrimonio es una mezcla perfecta de ilusión, nervios y mil decisiones. Entre elegir el lugar, las flores o la música, la lista de regalos suele parecer un detalle más… hasta que te das cuenta de que puede marcar una gran diferencia en tu experiencia (y en tu bolsillo).
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              Después de acompañar a miles de parejas, hemos visto los mismos errores repetirse una y otra vez. Evitar estos cinco puede ahorrarte tiempo, estrés y más de una desilusión.
            </p>
          </div>
          
          {/* Image hidden on mobile, shown in grid on desktop */}
          <div className="hidden md:flex justify-center">
            <img
              src={new URL("../assets/hero-sleeping-toddler.jpg", import.meta.url).href}
              alt="Pareja planificando su matrimonio"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { Badge } from "./Badge";

export const HeroSection = () => {
  return (
    <section className="hero-section py-12 md:py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-5">
            <Badge>Guía de Preparación EUNACOM</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-normal">
              Los 5 errores más comunes que te pueden hacer reprobar el Eunacom (y cómo evitarlos)
            </h1>
            
            <div className="space-y-3 text-base md:text-lg text-foreground/90">
              <p>
                Preparar el EUNACOM es un desafío que marca tu futuro profesional. Miles de médicos se enfrentan cada año a este examen, pero no todos logran el puntaje necesario para ingresar a la especialidad deseada.
              </p>
              <p>
                ¿La razón? No es falta de inteligencia ni de dedicación. Es estudiar de la manera equivocada.
              </p>
              <p className="font-medium">
                Estos son los 5 errores más comunes que separan a quienes aprueban con excelencia de quienes reprueban (y cómo solucionarlos):
              </p>
            </div>
            
            {/* Image shown after title on mobile, in grid on desktop */}
            <div className="flex justify-center md:hidden mt-6">
              <img
                src={new URL("../assets/hero-engaged-couple.jpg", import.meta.url).href}
                alt="Preparación para el examen EUNACOM"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              />
            </div>
            
          </div>
          
          {/* Image hidden on mobile, shown in grid on desktop */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src={new URL("../assets/hero-engaged-couple.jpg", import.meta.url).href}
              alt="Preparación para el examen EUNACOM"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

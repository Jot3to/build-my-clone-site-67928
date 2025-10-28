import { Badge } from "./Badge";
import heroImage from "@/assets/hero-medical-student.jpg";

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
            
            {/* Image shown after title on mobile, in grid on desktop */}
            <div className="flex justify-center md:hidden mt-6">
              <img
                src={heroImage}
                alt="Estudiante de medicina preparándose para el EUNACOM"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              />
            </div>
            
          </div>
          
          {/* Image hidden on mobile, shown in grid on desktop */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src={heroImage}
              alt="Estudiante de medicina preparándose para el EUNACOM"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

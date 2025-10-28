import { Badge } from "./Badge";
import heroImage from "@/assets/hero-medical-student.jpg";

export const HeroSection = () => {
  return (
    <section className="hero-section py-12 md:py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-6 md:gap-10 items-center">
          <div className="space-y-4">
            <Badge>Guía de Preparación</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-normal">
              Los 5 errores más comunes que te pueden hacer reprobar el Eunacom (y cómo evitarlos)
            </h1>
            <p className="text-lg leading-relaxed mt-4 opacity-90">
              Preparar el EUNACOM marca tu futuro profesional. Miles de médicos se enfrentan cada año a este examen, pero no todos logran el puntaje necesario para ingresar a la especialidad deseada.
            </p>
            <p className="text-lg leading-relaxed mt-3 opacity-90">
              ¿La razón? No es falta de inteligencia ni de dedicación. Es estudiar de la manera equivocada.
            </p>
            <p className="text-lg leading-relaxed mt-3 opacity-90 font-semibold">
              Estos son los 5 errores que separan a quienes aprueban con excelencia de quienes reprueban:
            </p>
            
            {/* Image shown after title on mobile, in grid on desktop */}
            <div className="flex justify-center md:hidden mt-5">
              <img
                src={heroImage}
                alt="Estudiante de medicina preparándose para el Eunacom"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[16/9]"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              />
            </div>
            
          </div>
          
          {/* Image hidden on mobile, shown in grid on desktop */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src={heroImage}
              alt="Estudiante de medicina preparándose para el Eunacom"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[5/3]"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

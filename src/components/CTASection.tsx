import { Button } from "./ui/button";
import doctorImage from "@/assets/successful-doctor-portrait.jpg";

export const CTASection = () => {
  return (
    <section className="cta-section py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-white order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl">
              Tu futuro no depende de la suerte
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Estos 5 errores los vemos una y otra vez: médicos brillantes que estudian meses enteros, leyendo los mismos libros, viendo las mismas clases, memorizando la misma teoría... y reprueban. No porque no sepan, sino porque nunca entrenaron como se enfrentarían al examen real.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Por eso existe Mi Eunacom, una plataforma construida sobre lo que realmente funciona: aprender respondiendo preguntas, entrenar bajo presión real, usar material actualizado constantemente y tener un plan claro que elimine la ansiedad del "¿voy bien o mal?".
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90 font-semibold">
              Tu especialidad te está esperando. La pregunta es: ¿vas a seguir estudiando como siempre, o vas a cambiar tu estrategia hoy?
            </p>
            <button 
              className="bg-white text-accent hover:bg-white/90 font-semibold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full rounded-lg transition-colors"
            >
              👉 Comienza tu preparación en mieunacom.cl
            </button>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={doctorImage}
              alt="Médico exitoso después de aprobar el EUNACOM"
              className="rounded-3xl shadow-2xl w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

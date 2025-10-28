import { Button } from "./ui/button";
import doctorImage from "@/assets/successful-doctor-portrait.jpg";

export const CTASection = () => {
  return (
    <section className="cta-section py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid md:grid-cols-[1.4fr,1fr] gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-white order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl">
              🩺 Comienza tu propia historia de éxito
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Alejandro se preparó durante 4 meses con Mi Eunacom. Hoy está cursando dermatología en la Universidad de Chile, la especialidad que siempre soñó, con un puntaje que le abrió todas las puertas.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Miles de médicos en Chile ya confiaron en Mi Eunacom para aprobar el EUNACOM con excelencia. Cada uno de ellos nos recuerda que no se trata de estudiar más horas, sino de estudiar con el método correcto, las herramientas adecuadas y cero estrés innecesario.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90 font-semibold">
              98% de ingreso a especialidad | +5.000 preguntas actualizadas | Simulaciones reales
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90 font-semibold">
              ¿Listo para escribir tu propia historia? Comienza hoy en mieunacom.cl
            </p>
            <button 
              className="bg-white text-accent hover:bg-white/90 font-semibold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full rounded-lg transition-colors"
            >
              👉 Comienza tu preparación en mieunacom.cl
            </button>
          </div>
          <div className="flex justify-center order-1 md:order-2 md:mt-12">
            <img
              src={doctorImage}
              alt="Médico exitoso después de aprobar el Eunacom"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[16/9] md:aspect-[5/6]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

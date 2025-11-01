import { Button } from "./ui/button";
import lawyerImage from "@/assets/professional-lawyer-portrait.jpg";

export const CTASection = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="cta-section py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid md:grid-cols-[1.4fr,1fr] gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-white order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl">
              No sigas viviendo con el peso de las deudas
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Carla tenía $4.500.000 en deudas y no sabía qué hacer.
              Hoy está libre gracias a la asesoría legal correcta.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90 font-semibold">
              +400 casos resueltos | Evaluación 100% gratuita | Abogados especialistas en soluciones de deuda
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90 font-semibold">
              Tu situación tiene salida legal. Solo necesitas el camino correcto.
            </p>
            <button 
              onClick={scrollToForm}
              className="bg-white text-accent hover:bg-white/90 font-semibold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full rounded-lg transition-colors"
            >
              Quiero mi evaluación gratuita ➜
            </button>
          </div>
          <div className="flex justify-center order-1 md:order-2 md:mt-12">
            <img
              src={lawyerImage}
              alt="Abogado profesional especialista en soluciones de deuda"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[16/9] md:aspect-[5/6]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

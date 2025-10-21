import { Button } from "./ui/button";

export const CTASection = () => {
  return (
    <section className="cta-section py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-white order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl">
              Por qué creamos Mi Lista de Novios
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Después de ver a tantas parejas frustradas con las listas tradicionales —entre regalos que no usaban, tarjetas con condiciones y procesos lentos— decidimos crear una plataforma diferente.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Así nació Mi Lista de Novios, un servicio 100% online que te permite recibir el dinero de tus regalos directo en tu cuenta bancaria, con total libertad para usarlo como quieras.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <p className="text-base md:text-lg font-semibold">
                No es una lista tradicional ni un catálogo cerrado: es una experiencia personalizada, gratuita para los novios y diseñada para hacer del proceso de regalar algo emocional, simbólico y completamente libre.
              </p>
            </div>
            <button 
              className="bg-white text-accent hover:bg-white/90 font-semibold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full md:w-auto rounded-lg transition-colors"
            >
              Conoce más sobre cómo funciona Mi Lista de Novios
            </button>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={new URL("../assets/consultant-with-child.jpg", import.meta.url).href}
              alt="Sarah Martinez, Certified Pediatric Sleep Consultant"
              className="rounded-3xl shadow-2xl w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

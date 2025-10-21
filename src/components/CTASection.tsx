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
              Mi Lista de Novios nació de algo muy simple: ver cómo demasiadas parejas terminaban frustradas con las listas tradicionales. Promesas que no se cumplían, beneficios con letra chica, tarjetas que no podían usar y regalos que no los representaban.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Por eso decidimos crear una alternativa distinta: una lista libre, transparente y diseñada para disfrutar el proceso. Una donde los novios reciban el dinero directamente, sin trámites ni confusiones, y los invitados vivan una experiencia linda, emotiva y fácil.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <p className="text-base md:text-lg font-semibold mb-3">
                Desde 2018, más de 10.000 parejas en Chile ya confiaron en nosotros.
              </p>
              <p className="text-base md:text-lg opacity-90">
                Y cada una de ellas nos recuerda que no se trata solo de regalos, sino de comenzar la vida juntos con libertad, emoción y cero complicaciones.
              </p>
            </div>
            <button 
              className="bg-white text-accent hover:bg-white/90 font-semibold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full md:w-auto rounded-lg transition-colors"
            >
              👉 Conoce cómo funciona y crea tu lista hoy en milistadenovios.cl
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

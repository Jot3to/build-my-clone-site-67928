import { Badge } from "./Badge";
import { ContactForm } from "./ContactForm";

export const HeroSection = () => {
  return (
    <section className="hero-section py-12 md:py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-6 md:gap-10 items-start">
          <div className="space-y-4">
            <Badge>Historia de Éxito</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-normal">
              Los 7 trucos que me permitieron sacar 95 puntos en el Eunacom (y que nadie me enseñó)
            </h1>
            <p className="text-lg leading-relaxed opacity-80 italic mt-4">
              Por Alejandro Díaz, médico dermatólogo
            </p>
          </div>
          
          {/* Contact Form on the right */}
          <div className="flex justify-center items-start">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

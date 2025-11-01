import { ContactForm } from "./ContactForm";
import { Star, Users } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [randomCount] = useState(() => Math.floor(Math.random() * 100) + 1);

  return (
    <section className="hero-section py-12 md:py-16 px-2 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-6 md:gap-10 items-start">
          <div className="space-y-4">
            {/* Social Proof Module */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                <img 
                  src="https://i.pravatar.cc/150?img=33" 
                  alt="Cliente satisfecho"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                />
                <img 
                  src="https://i.pravatar.cc/150?img=47" 
                  alt="Cliente satisfecho"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                />
                <img 
                  src="https://i.pravatar.cc/150?img=65" 
                  alt="Cliente satisfecho"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm font-medium opacity-90">
                  +5.000 clientes sin deudas
                </p>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
              ¿Quieres saber si tu deuda está prescrita?
            </h1>
            <p className="text-lg leading-relaxed opacity-80 mb-4">
              Responde la encuesta y descúbrelo en menos de 2 minutos
            </p>

            <div className="rounded-2xl shadow-2xl w-full overflow-hidden aspect-[16/9]" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video explicativo"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form on the right */}
          <div className="flex flex-col justify-center items-start gap-4">
            <ContactForm />
            <div className="w-full bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-center gap-2 justify-center">
              <Users className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium">
                Últimas 24 horas: <span className="text-primary font-semibold">{randomCount} personas</span> consultaron su situación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

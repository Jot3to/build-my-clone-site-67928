import { ContactForm } from "./ContactForm";
import { Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="hero-section py-12 md:py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-6 md:gap-10 items-start">
          <div className="space-y-4">
            {/* Social Proof Module */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white shadow-sm flex items-center justify-center text-white font-semibold text-sm">
                  JM
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary border-2 border-white shadow-sm flex items-center justify-center text-white font-semibold text-sm">
                  AC
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary border-2 border-white shadow-sm flex items-center justify-center text-white font-semibold text-sm">
                  LP
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm font-medium opacity-90">
                  +5.000 clientes satisfechos
                </p>
              </div>
            </div>

            <div className="rounded-2xl shadow-2xl w-full overflow-hidden aspect-[16/9] mb-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video explicativo"
              ></iframe>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-normal">
              ¿Quieres saber si estás en DICOM?
            </h1>
            <p className="text-lg leading-relaxed opacity-80">
              Responde la encuesta y descúbrelo en menos de 2 minutos
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

import { ContactForm } from "./ContactForm";

export const HeroSection = () => {
  return (
    <section className="hero-section py-12 md:py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-6 md:gap-10 items-start">
          <div className="space-y-4">
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

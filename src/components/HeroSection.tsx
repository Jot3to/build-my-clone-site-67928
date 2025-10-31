import { Badge } from "./Badge";
import { ContactForm } from "./ContactForm";
import heroImage from "@/assets/hero-medical-student.jpg";

export const HeroSection = () => {
  return (
    <section className="hero-section py-12 md:py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-6 md:gap-10 items-start">
          <div className="space-y-4">
            <img
              src={heroImage}
              alt="Estudiante de medicina preparándose para el Eunacom"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[16/9] mb-4"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-normal">
              ¿Quieres saber si estás en DICOM?
            </h1>
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

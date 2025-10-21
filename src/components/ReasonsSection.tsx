import { Check } from "lucide-react";

const reasons = [
  {
    title: "Personalizar cada regalo con fotos y mensajes",
    description: "Haz que cada regalo sea único y refleje tu historia como pareja."
  },
  {
    title: "Evitar la incomodidad de pedir sobres con dinero",
    description: "Una forma moderna y discreta de recibir regalos sin situaciones incómodas."
  },
  {
    title: "Recibir y revisar cada aporte en tiempo real",
    description: "Mantén control total sobre tus regalos desde cualquier dispositivo."
  },
  {
    title: "Seguir recibiendo regalos incluso después del matrimonio",
    description: "Tu lista permanece activa el tiempo que necesites."
  }
];

export const ReasonsSection = () => {
  return (
    <section className="content-section py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Otros beneficios de las listas online
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo pensado para que organizar tu matrimonio sea más fácil y entretenido
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg max-w-3xl mx-auto">
          <p className="text-base md:text-lg italic text-center">
            💬 Como dicen muchos de nuestros novios: "Fue hermoso ver cómo el álbum se llenaba de fotos y mensajes mientras seguían llegando regalos."
          </p>
        </div>
      </div>
    </section>
  );
};

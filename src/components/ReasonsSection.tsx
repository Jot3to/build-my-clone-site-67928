import { Check } from "lucide-react";

const reasons = [
  {
    title: "Centralizar todo en un solo lugar",
    description: "Regalos, confirmación de invitados, checklist y presupuesto, todo en una plataforma."
  },
  {
    title: "Actualizar y editar fácilmente tu lista",
    description: "Modifica tu lista desde cualquier dispositivo, en cualquier momento."
  },
  {
    title: "Evitar la incomodidad de pedir dinero en sobres",
    description: "Una forma moderna y discreta de recibir regalos sin incomodidades."
  },
  {
    title: "Personalizar cada regalo",
    description: "Agrega fotos, descripciones y mensajes que reflejen su historia como pareja."
  },
  {
    title: "Ahorrar tiempo y evitar errores",
    description: "Procesos automáticos y notificaciones que simplifican la organización de tu matrimonio."
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
      </div>
    </section>
  );
};

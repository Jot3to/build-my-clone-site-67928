import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const LandingIntermedio = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola, no estoy seguro si fui demandado por mis deudas. ¿Pueden ayudarme?";
    const whatsappUrl = `https://wa.me/56967795060?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Landing Intermedio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Necesitamos más información para evaluar tu caso
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="px-12 py-8 text-xl font-bold hover:scale-105 transition-transform"
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingIntermedio;

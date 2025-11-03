import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const DeudaPrescrita = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola, según la evaluación mi deuda está prescrita. Quiero más información.";
    const whatsappUrl = `https://wa.me/56967795060?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            DEUDA PRESCRITA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            ¡Buenas noticias! Tu deuda podría estar prescrita
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

export default DeudaPrescrita;

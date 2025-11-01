import { Check, AlertTriangle, Users, GraduationCap, HelpCircle, Shield, Award, Clock, Lock, Scale } from "lucide-react";
import { Button } from "./ui/button";

export const ContentSection = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="content-section py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl space-y-16">
        
        {/* Bloque de beneficios con cajas */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border-2 border-primary/20 p-6 rounded-2xl space-y-4 hover:border-primary/40 transition-colors">
            <div className="flex justify-center md:justify-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
            </div>
            <p className="text-lg font-semibold leading-snug text-center md:text-center">
              Resultado en 2 minutos
            </p>
          </div>
          
          <div className="bg-card border-2 border-primary/20 p-6 rounded-2xl space-y-4 hover:border-primary/40 transition-colors">
            <div className="flex justify-center md:justify-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
            </div>
            <p className="text-lg font-semibold leading-snug text-center md:text-center">
              Evaluación 100% gratuita
            </p>
          </div>
          
          <div className="bg-card border-2 border-primary/20 p-6 rounded-2xl space-y-4 hover:border-primary/40 transition-colors">
            <div className="flex justify-center md:justify-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Scale className="w-8 h-8 text-primary" />
              </div>
            </div>
            <p className="text-lg font-semibold leading-snug text-center md:text-center">
              Servicio 100% online
            </p>
          </div>
        </div>

        {/* Bloque de Urgencia/FOMO */}
        <article className="space-y-6 bg-destructive/10 border-2 border-destructive/30 p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 md:mt-1" />
            <h2 className="text-2xl md:text-3xl font-semibold">
              ¿Sabías que muchas personas siguen pagando deudas que ya prescribieron?
            </h2>
          </div>
          
          <p className="text-lg leading-relaxed">
            Si tu deuda tiene más de 3 años y <strong>NO has sido demandado</strong>, podrías tener derecho a que se declare prescrita.
          </p>
          
          <div className="bg-background/80 border-t-4 md:border-t-0 border-l-0 md:border-l-4 border-destructive p-6 rounded-lg md:rounded-r-lg md:rounded-l-none">
            <p className="text-lg leading-relaxed font-semibold">
              Pero ATENCIÓN: Si reconoces la deuda o haces un pago parcial, ¡interrumpes la prescripción y pierdes este beneficio!
            </p>
          </div>
        </article>

        {/* Casos de Éxito / Prueba Social */}
        <article className="space-y-8">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl">Casos resueltos</h2>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-muted/50 border-t-4 border-l-0 md:border-t-0 md:border-l-4 border-primary p-6 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-2xl space-y-3">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <img 
                  src="https://i.pravatar.cc/150?img=47" 
                  alt="María P."
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg leading-relaxed italic">
                    "Tenía una deuda de $3.500.000 con Ripley desde 2018. Gracias a Adiós Deudas, se declaró prescrita y salí de Dicom"
                  </p>
                  <p className="text-sm opacity-70 font-medium mt-2">— María P., Santiago</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 border-t-4 border-l-0 md:border-t-0 md:border-l-4 border-primary p-6 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-2xl space-y-3">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <img 
                  src="https://i.pravatar.cc/150?img=12" 
                  alt="Carlos R."
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg leading-relaxed italic">
                    "Debía $1.800.000 al Banco Falabella. Nunca fui demandado y después de 5 años, logramos que prescribiera"
                  </p>
                  <p className="text-sm opacity-70 font-medium mt-2">— Carlos R., Concepción</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 border-t-4 border-l-0 md:border-t-0 md:border-l-4 border-primary p-6 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-2xl space-y-3">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <img 
                  src="https://i.pravatar.cc/150?img=33" 
                  alt="Andrés T."
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg leading-relaxed italic">
                    "Pensé que nunca saldría de Dicom. Después del análisis gratuito, descubrí que mi deuda había prescrito hace 2 años"
                  </p>
                  <p className="text-sm opacity-70 font-medium mt-2">— Andrés T., Valparaíso</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Sección Educativa */}
        <article className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary hidden md:block" />
            <h2 className="text-3xl md:text-4xl">¿Cómo funciona la prescripción de deudas?</h2>
          </div>
          
          <p className="text-lg leading-relaxed">
            La ley chilena establece que las deudas prescriben si:
          </p>
          
          <ul className="space-y-4 text-lg list-none pl-0">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>Han pasado <strong>3 años desde el último pago</strong> (prescripción ejecutiva)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>Han pasado <strong>5 años desde que se contrajo la deuda</strong> (prescripción ordinaria)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>El acreedor <strong>NO te ha demandado judicialmente</strong></span>
            </li>
          </ul>
          
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-6">
            <p className="text-lg leading-relaxed">
              Si cumples estos requisitos, un juez puede declarar tu deuda <strong>PRESCRITA</strong>, lo que significa que ya no tienes la obligación legal de pagarla.
            </p>
          </div>
        </article>

        {/* FAQ Corto */}
        <article className="space-y-6">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-primary hidden md:block" />
            <h2 className="text-3xl md:text-4xl">Preguntas frecuentes</h2>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">¿Es legal que mi deuda prescriba?</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Sí, es un derecho establecido en el Código Civil chileno. No es evasión, es un derecho que te protege como consumidor.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">¿Salgo automáticamente de Dicom?</h3>
              <p className="text-lg leading-relaxed opacity-90">
                No es automático, pero al declararse la prescripción, puedes solicitar tu eliminación del boletín comercial.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">¿Cuánto cobran por el análisis?</h3>
              <p className="text-lg leading-relaxed opacity-90">
                El análisis inicial es <strong>GRATUITO</strong>. Solo cobramos si decidimos llevar tu caso y lo hacemos con honorarios accesibles.
              </p>
            </div>
          </div>
        </article>

        {/* Segundo CTA */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 p-6 md:p-12 rounded-2xl text-center space-y-4 md:space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm opacity-80">
            <Lock className="w-3 h-3 md:w-4 md:h-4" />
            <span>Tu información está protegida y es confidencial</span>
          </div>
          
          <Button 
            size="lg" 
            className="text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto w-full md:w-auto leading-tight"
            onClick={scrollToForm}
          >
            Quiero saber si mi deuda prescribió
          </Button>
          
          <p className="text-sm md:text-base opacity-80">
            O escríbenos directo por WhatsApp: <strong className="block md:inline mt-1 md:mt-0">+56 9 XXXX XXXX</strong>
          </p>
        </div>

        {/* Badges de Confianza */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t">
          <div className="flex flex-col items-center text-center space-y-2">
            <Shield className="w-10 h-10 text-primary" />
            <p className="text-sm font-medium">Abogados certificados</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2">
            <Award className="w-10 h-10 text-primary" />
            <p className="text-sm font-medium">+500 casos resueltos</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2">
            <Users className="w-10 h-10 text-primary" />
            <p className="text-sm font-medium">Atención personalizada</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2">
            <Clock className="w-10 h-10 text-primary" />
            <p className="text-sm font-medium">Sin letra chica</p>
          </div>
        </div>

      </div>
    </section>
  );
};

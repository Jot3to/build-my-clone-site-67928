import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { HelpCircle, AlertCircle, Shield, Phone, CheckCircle, TrendingDown } from "lucide-react";

const LandingIntermedio = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola, necesito un análisis completo de mi caso. Quiero saber mi situación legal.";
    const whatsappUrl = `https://wa.me/56967795060?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            No podemos determinar si tu deuda está prescrita
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Necesitamos <span className="text-primary font-semibold">más información</span> para darte una respuesta precisa
          </p>
        </div>
      </section>

      {/* Sección Educativa */}
      <section className="container mx-auto px-4 py-16 bg-card rounded-3xl shadow-xl mb-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          ¿Por qué no podemos saberlo con certeza?
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg mb-6">
            Según tus respuestas, no contamos con información suficiente para determinar si tu deuda cumple los requisitos legales para prescribir.
          </p>
          
          <div className="bg-secondary/30 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Las deudas prescriben cuando:</h3>
            <ul className="space-y-2 text-foreground">
              <li>Han pasado <strong>1 año</strong> desde el último pago (prescripción ejecutiva)</li>
              <li>Han pasado <strong>5 años</strong> desde que se contrajo la deuda (Extinción de la deuda)</li>
              <li>El acreedor <strong>NO te ha demandado</strong> judicialmente</li>
            </ul>
          </div>

          <p className="text-lg font-semibold text-foreground">
            Para determinar si tu deuda está prescrita, necesitamos revisar tu caso específico con más detalle.
          </p>
        </div>
      </section>

      {/* Sección de Urgencia */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
          ¿Qué significa esto para ti?
        </h2>
        <p className="text-xl text-center mb-12 text-muted-foreground">
          Sin información clara sobre tu situación, te arriesgas a:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Perder el beneficio de la prescripción sin saberlo",
              description: "Si tu deuda está prescrita pero no lo sabes, podrías perder este derecho por error."
            },
            {
              title: "Tomar decisiones equivocadas",
              description: "Sin asesoría legal, podrías hacer un pago o reconocer una deuda que ya prescribió."
            },
            {
              title: "Seguir en Dicom innecesariamente",
              description: "Si tu deuda está prescrita, podrías estar en Dicom sin necesidad."
            },
            {
              title: "No conocer tus opciones legales",
              description: "Aunque tu deuda no esté prescrita, podrías tener otras alternativas legales disponibles."
            },
            {
              title: "Seguir viviendo con incertidumbre",
              description: "No saber tu situación legal real te mantiene en estrés constante."
            }
          ].map((risk, index) => (
            <div key={index} className="bg-destructive/10 border-2 border-destructive/30 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{risk.title}</h3>
                  <p className="text-muted-foreground">{risk.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Elemento de Urgencia */}
        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold text-xl mb-3 text-foreground">
                ⏰ Importante: Cada día que pasa sin actuar, corres el riesgo de:
              </h3>
              <ul className="space-y-2 text-foreground">
                <li>• Que te demanden y pierdas el beneficio</li>
                <li>• Que reconozcas la deuda por error</li>
                <li>• Que hagas un pago parcial e interrumpas la prescripción</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Solución */}
      <section className="container mx-auto px-4 py-16 bg-card rounded-3xl shadow-xl mb-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
          Necesitas una evaluación legal completa de tu caso.
        </h2>
        
        <div className="bg-secondary/30 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Análisis Detallado de tu Situación
          </h3>
          <p className="mb-4 text-muted-foreground">Un abogado especialista debe revisar tu caso en detalle para determinar si tu deuda está prescrita o qué otras opciones legales tienes disponibles. Nuestros abogados se encargan de:</p>
          <ul className="space-y-2 text-foreground">
            <li>• Analizar toda la documentación de tu deuda</li>
            <li>• Verificar si fuiste demandado judicialmente</li>
            <li>• Determinar si cumples los requisitos de prescripción</li>
            <li>• Encontrar la mejor solución legal para tu caso específico</li>
          </ul>
        </div>
      </section>

      {/* Sección de Valor */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          ¿Por qué elegir Adiós Deudas?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <CheckCircle className="w-8 h-8" />,
              title: "Evaluamos tu caso GRATIS",
              description: "Sin compromiso, sin letra chica."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Análisis profesional y detallado",
              description: "No te quedas con la duda, te damos respuestas claras."
            },
            {
              icon: <CheckCircle className="w-8 h-8" />,
              title: "Experiencia comprobada",
              description: "Más de 400 casos resueltos con éxito."
            },
            {
              icon: <TrendingDown className="w-8 h-8" />,
              title: "Soluciones reales",
              description: "No vendemos falsas esperanzas. Te decimos la verdad y trabajamos con lo que SÍ es posible."
            }
          ].map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-lg">
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="container mx-auto px-4 py-16 bg-secondary/20 rounded-3xl mb-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Personas como tú ya resolvieron su situación:
        </h2>
        
        <div className="space-y-6">
          {[
            {
              quote: "No sabía si mi deuda estaba prescrita. Después del análisis, descubrí que sí lo estaba y pude salir de Dicom",
              author: "María P., Santiago"
            },
            {
              quote: "Pensaba que me habían demandado, pero resultó que no. Mi deuda prescribió y quedé libre",
              author: "Carlos R., Concepción"
            },
            {
              quote: "Tenía dudas sobre mi situación. El análisis gratuito me dio claridad y encontramos la solución perfecta",
              author: "Andrés T., Valparaíso"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-lg">
              <p className="text-lg italic mb-4 text-muted-foreground">"{testimonial.quote}"</p>
              <p className="font-semibold text-foreground">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Confianza */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-card p-8 rounded-xl shadow-lg text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            Tu información está 100% protegida
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Evaluación confidencial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Sin costo inicial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Atención personalizada de abogados certificados</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="container mx-auto px-4 py-16 max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          No sigas con la incertidumbre
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Un abogado especialista puede revisar tu caso HOY<br />
          y darte respuestas claras sobre tu situación legal.
        </p>
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full md:w-auto px-12 py-8 text-xl font-bold hover:scale-105 transition-transform"
        >
          Quiero mi análisis completo ahora
        </Button>
        <p className="mt-6 text-muted-foreground">
          O escríbenos directo por WhatsApp: <a href="https://wa.me/56967795060" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">+56 9 6779 5060</a>
        </p>
      </section>

      {/* Sección de Acción Inmediata */}
      <section className="container mx-auto px-4 py-16 bg-card rounded-3xl shadow-xl mb-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          ¿Qué pasa después?
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { number: "1️⃣", text: "Un abogado revisa tu caso en menos de 24 horas" },
            { number: "2️⃣", text: "Te llamamos para explicarte tus opciones" },
            { number: "3️⃣", text: "Juntos decidimos el mejor camino" },
            { number: "4️⃣", text: "Nosotros nos encargamos de todo" }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{step.number}</div>
              <p className="text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Preguntas Frecuentes
        </h2>
        
        <div className="space-y-6">
          {[
            {
              question: "¿Cuánto cuesta la asesoría?",
              answer: "La evaluación inicial es 100% GRATUITA. Solo cobramos si decidimos llevar tu caso juntos."
            },
            {
              question: "¿Puedo salir de Dicom?",
              answer: "Depende de tu situación específica. Si tu deuda está prescrita o encontramos otra solución legal, sí puedes regularizar tu situación y salir del boletín comercial."
            },
            {
              question: "¿Cuánto tiempo toma resolver mi caso?",
              answer: "Depende de tu caso específico, pero el proceso es rápido. No te preocupes, nosotros nos encargamos de todo."
            },
            {
              question: "¿Qué pasa si no hago nada?",
              answer: "Seguirás sin saber si tienes derechos legales que podrías estar ejerciendo. Podrías perder oportunidades de liberarte de tu deuda. Actuar HOY es la mejor decisión."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-3 text-foreground">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Módulo de Cierre */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl mb-16 max-w-5xl text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-4 text-muted-foreground">
            Miles de chilenos viven con dudas sobre su situación legal.
          </p>
          <p className="text-xl mb-4 text-muted-foreground">
            En Adiós Deudas te damos respuestas claras y soluciones reales.
          </p>
          <p className="text-2xl font-bold mb-8 text-foreground">
            Tu situación merece certeza. Solo necesitas dar el primer paso.
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="px-12 py-8 text-xl font-bold hover:scale-105 transition-transform"
          >
            Quiero conocer mi situación real ahora ➜
          </Button>
        </div>
      </section>

      {/* Badges Finales */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="flex flex-wrap justify-center gap-4">
          <Badge>
            <Shield className="w-5 h-5 mr-2" />
            Abogados certificados
          </Badge>
          <Badge>
            <CheckCircle className="w-5 h-5 mr-2" />
            +400 casos resueltos
          </Badge>
          <Badge>
            <Phone className="w-5 h-5 mr-2" />
            Atención personalizada
          </Badge>
          <Badge>
            <CheckCircle className="w-5 h-5 mr-2" />
            Sin letra chica
          </Badge>
        </div>
      </section>
    </div>
  );
};

export default LandingIntermedio;

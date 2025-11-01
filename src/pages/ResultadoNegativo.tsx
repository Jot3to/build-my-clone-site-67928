import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { Header } from "@/components/Header";
import { AlertCircle, Shield, TrendingDown, Phone, CheckCircle } from "lucide-react";

const ResultadoNegativo = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola, quiero una asesoría gratuita sobre mi deuda";
    const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-destructive/10 rounded-full mb-6">
            <AlertCircle className="w-12 h-12 text-destructive" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Lo sentimos, tu deuda NO está prescrita
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Pero tranquilo, <span className="text-primary font-semibold">AÚN TIENES OPCIONES LEGALES</span> para resolver tu situación
          </p>
        </div>
      </section>

      {/* Sección Educativa */}
      <section className="container mx-auto px-4 py-16 bg-card rounded-3xl shadow-xl mb-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          ¿Por qué tu deuda NO está prescrita?
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg mb-6">
            Según tus respuestas, tu deuda no cumple los requisitos legales para prescribir.
          </p>
          
          <div className="bg-secondary/30 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Las deudas prescriben cuando:</h3>
            <ul className="space-y-2 text-foreground">
              <li>Han pasado <strong>3 años</strong> desde el último pago (prescripción ejecutiva)</li>
              <li>Han pasado <strong>5 años</strong> desde que se contrajo la deuda (prescripción ordinaria)</li>
              <li>El acreedor <strong>NO te ha demandado</strong> judicialmente</li>
            </ul>
          </div>

          <p className="text-lg font-semibold text-foreground">
            Tu deuda no cumple con estos requisitos, pero eso no significa que estés sin opciones.
          </p>
        </div>
      </section>

      {/* Sección de Urgencia */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
          ¿Qué significa esto para ti?
        </h2>
        <p className="text-xl text-center mb-12 text-muted-foreground">
          Si no haces nada, te arriesgas a:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Embargo de tu sueldo o cuenta bancaria",
              description: "Si tienes una sentencia en tu contra, pueden embargar hasta el 50% de tu sueldo líquido."
            },
            {
              title: "Remate de tus bienes",
              description: "Pueden rematar tu auto, muebles u otros bienes para pagar la deuda."
            },
            {
              title: "Seguir en Dicom por años",
              description: "Mientras la deuda esté impaga, seguirás apareciendo en los boletines comerciales, bloqueando tu acceso a créditos, arriendo, e incluso algunos trabajos."
            },
            {
              title: "La deuda sigue creciendo",
              description: "Los intereses y costas judiciales aumentan el monto que debes cada mes."
            },
            {
              title: "Llamadas constantes de cobranza",
              description: "El estrés de vivir con cobradores llamándote todos los días."
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
                <li>• Que te demanden y pierdas opciones legales</li>
                <li>• Que la deuda siga creciendo con intereses</li>
                <li>• Que te embarguen sin que puedas defenderte</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Soluciones */}
      <section className="container mx-auto px-4 py-16 bg-card rounded-3xl shadow-xl mb-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
          Pero no todo está perdido. Tienes 3 opciones legales:
        </h2>
        
        <div className="space-y-8">
          <div className="bg-secondary/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              1️⃣ Negociación con descuentos importantes
            </h3>
            <p className="mb-4 text-muted-foreground">Nuestros abogados negocian con tus acreedores para:</p>
            <ul className="space-y-2 text-foreground">
              <li>• Reducir el monto total (descuentos del 40% al 70%)</li>
              <li>• Eliminar intereses moratorios</li>
              <li>• Establecer cuotas que puedas pagar</li>
            </ul>
          </div>

          <div className="bg-secondary/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              2️⃣ Ley de Insolvencia (Ley de Quiebras)
            </h3>
            <p className="mb-4 text-muted-foreground">Si tienes múltiples deudas y no puedes pagarlas:</p>
            <ul className="space-y-2 text-foreground">
              <li>• Reorganiza todas tus deudas en un solo plan</li>
              <li>• Congela los intereses</li>
              <li>• Pagas según tu capacidad real de pago</li>
              <li>• Puedes salir de Dicom</li>
            </ul>
          </div>

          <div className="bg-secondary/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              3️⃣ Repactación favorable
            </h3>
            <p className="mb-4 text-muted-foreground">Creamos un plan de pago ajustado a tus ingresos:</p>
            <ul className="space-y-2 text-foreground">
              <li>• Cuotas más bajas</li>
              <li>• Plazos más largos</li>
              <li>• Sin caer en mora nuevamente</li>
            </ul>
          </div>
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
              title: "Negociamos por ti",
              description: "No tienes que enfrentarte solo a los acreedores."
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
              quote: "Debía $6.200.000 a 4 empresas diferentes. Con la Ley de Insolvencia reorganicé todo y ahora pago solo $180.000 mensuales",
              author: "Pedro M., La Serena"
            },
            {
              quote: "Me iban a embargar el sueldo. Adiós Deudas negoció un descuento del 60% y pagué en cuotas accesibles",
              author: "Francisca L., Santiago"
            },
            {
              quote: "Tenía demanda del Banco de Chile. Lograron que congelaran los intereses y repacté a 36 meses sin intereses",
              author: "Roberto S., Temuco"
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
          No dejes que las deudas controlen tu vida
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Un abogado especialista puede revisar tu caso HOY<br />
          y encontrar la mejor solución para tu situación específica.
        </p>
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full md:w-auto px-12 py-8 text-xl font-bold hover:scale-105 transition-transform"
        >
          Quiero mi asesoría gratuita ahora
        </Button>
        <p className="mt-6 text-muted-foreground">
          O escríbenos directo por WhatsApp: <a href="tel:+56912345678" className="text-primary font-semibold">+56 9 1234 5678</a>
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
              answer: "Sí, con las soluciones adecuadas (negociación, repactación o Ley de Insolvencia) puedes regularizar tu situación y salir del boletín comercial."
            },
            {
              question: "¿Cuánto tiempo toma resolver mi caso?",
              answer: "Depende de tu situación específica, pero la mayoría de nuestros casos se resuelven entre 2 y 6 meses."
            },
            {
              question: "¿Qué pasa si no hago nada?",
              answer: "La deuda seguirá creciendo, podrías ser embargado, y el estrés financiero empeorará. Actuar HOY es la mejor decisión."
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
            Miles de chilenos viven agobiados por deudas que tienen solución legal.
          </p>
          <p className="text-xl mb-4 text-muted-foreground">
            En Adiós Deudas encontramos la salida correcta para cada caso.
          </p>
          <p className="text-2xl font-bold mb-8 text-foreground">
            Tu situación tiene solución. Solo necesitas el camino correcto.
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="px-12 py-8 text-xl font-bold hover:scale-105 transition-transform"
          >
            Quiero resolver mi situación ahora ➜
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
          <Badge>
            <CheckCircle className="w-5 h-5 mr-2" />
            Evaluación gratuita
          </Badge>
        </div>
      </section>
    </div>
  );
};

export default ResultadoNegativo;
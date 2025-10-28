import { Button } from "./ui/button";
import doctorImage from "@/assets/successful-doctor-portrait.jpg";

export const CTASection = () => {
  return (
    <section className="cta-section py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-white order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl">
              Tu futuro no depende de la suerte
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Reprobar el EUNACOM rara vez es por falta de inteligencia o dedicación. Es por estudiar de la manera equivocada.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Los 5 errores que acabas de leer son evitables. La diferencia entre aprobar con excelencia y reprobar está en:
            </p>
            <ul className="space-y-3 opacity-90">
              <li className="text-base md:text-lg leading-relaxed">✅ Entrenar con preguntas, no solo leer teoría</li>
              <li className="text-base md:text-lg leading-relaxed">✅ Seguir un plan estructurado que elimine el caos</li>
              <li className="text-base md:text-lg leading-relaxed">✅ Usar material actualizado y confiable</li>
              <li className="text-base md:text-lg leading-relaxed">✅ Simular el examen bajo condiciones reales</li>
              <li className="text-base md:text-lg leading-relaxed">✅ Aprender de cada error en profundidad</li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Miles de médicos ya están preparándose con el método correcto. Con herramientas diseñadas específicamente para el EUNACOM chileno. Con resultados comprobados.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90 font-semibold">
              ¿Vas a seguir estudiando como siempre y esperando resultados diferentes? O vas a cambiar tu estrategia hoy?
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90 font-semibold">
              Tu especialidad te está esperando. Pero no llegará por suerte. Llegará por preparación inteligente.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 mt-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Comienza hoy con el método que sí funciona
              </h3>
              <p className="text-base md:text-lg font-semibold mb-4">Planes disponibles:</p>
              <ul className="space-y-2 mb-4">
                <li className="text-base md:text-lg">• 3 meses: $59.000 CLP</li>
                <li className="text-base md:text-lg">• 6 meses: $99.000 CLP</li>
                <li className="text-base md:text-lg">• 12 meses: $149.000 CLP</li>
              </ul>
              <p className="text-sm md:text-base opacity-90 mb-4">
                98% de ingreso a especialidad | +5.000 preguntas actualizadas | Simulaciones reales
              </p>
            </div>
            
            <button 
              className="bg-white text-accent hover:bg-white/90 font-semibold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full rounded-lg transition-colors"
            >
              👉 Comienza tu preparación en mieunacom.cl
            </button>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={doctorImage}
              alt="Médico exitoso después de aprobar el EUNACOM"
              className="rounded-3xl shadow-2xl w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

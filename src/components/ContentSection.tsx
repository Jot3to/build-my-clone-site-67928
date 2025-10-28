import studyGroupImage from "@/assets/students-studying-group.jpg";

export const ContentSection = () => {
  return (
    <section className="content-section py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl space-y-12">
        <article className="space-y-6">
          <p className="text-lg leading-relaxed">
            Preparar el EUNACOM marca tu futuro profesional. Miles de médicos se enfrentan cada año a este examen, pero no todos logran el puntaje necesario para ingresar a la especialidad deseada.
          </p>
          <p className="text-lg leading-relaxed">
            ¿La razón? No es falta de inteligencia ni de dedicación. Es estudiar de la manera equivocada.
          </p>
          <p className="text-lg leading-relaxed">
            Estos son los 5 errores que separan a quienes aprueban con excelencia de quienes reprueban:
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error #1: Estudiar solo de libros y videos sin responder preguntas
          </h2>
          
          <p className="text-lg leading-relaxed">
            Llevas meses leyendo Harrison, viendo clases en YouTube, tomando apuntes perfectos. Te sientes preparado. Entonces llega el examen: un caso clínico, cuatro alternativas similares, el cronómetro corriendo. Y te das cuenta de algo devastador: sabes la teoría, pero no sabes resolver la pregunta.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">El problema:</h3>
          <p className="text-lg leading-relaxed">
            Leer y ver videos genera la ilusión de aprendizaje. Tu cerebro reconoce la información cuando la ve, pero no puede recuperarla bajo presión. El EUNACOM no evalúa cuánto leíste, evalúa cómo piensas bajo presión, cómo discriminas entre alternativas y cómo aplicas conocimiento en casos reales.
          </p>
          <p className="text-lg leading-relaxed">
            Estudiar sin responder preguntas significa llegar al examen sin saber identificar trampas, sin velocidad para 180 preguntas en 3 horas, sin capacidad de discriminar entre dos alternativas "casi correctas". Puedes estudiar 6 meses y reprobar si no practicaste con preguntas.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">Por qué es LA diferencia entre aprobar y reprobar:</h3>
          <p className="text-lg leading-relaxed">
            La ciencia del aprendizaje lo confirma: la recuperación activa (obligar a tu cerebro a recuperar información) es exponencialmente más efectiva que el repaso pasivo. Los que aprueban con 700+ puntos no estudiaron más. Estudiaron mejor: respondiendo preguntas desde el día uno.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">La solución:</h3>
          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-base md:text-lg">
              <strong>Mi Eunacom</strong> está construido sobre esta metodología: más de 5.000 preguntas tipo EUNACOM con justificaciones detalladas de TODAS las alternativas. El sistema rastrea tu rendimiento por especialidad e identifica exactamente dónde necesitas mejorar. Los números no mienten: el 98% de los estudiantes ingresa a la especialidad deseada porque entrenan como juegan.
            </p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error #2: Estudiar sin un plan estructurado (y perderte en el caos)
          </h2>
          
          <p className="text-lg leading-relaxed">
            Lunes: cardiología. Miércoles: alguien dice que pediatría es clave. Viernes: pánico porque no has tocado ginecología. Domingo: paralizado sin saber por dónde seguir. La ansiedad te come vivo: estudias mucho pero avanzas poco, no sabes si vas bien o mal, no sabes si llegarás preparado.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">El problema:</h3>
          <p className="text-lg leading-relaxed">
            Estudiar sin estructura es manejar sin GPS de noche. El EUNACOM tiene más de 20 especialidades, cientos de patologías, miles de detalles. Sin un plan, tu cerebro no consolida conocimientos, no identifica prioridades ni mide progreso real. El resultado: estudias mucho pero aprendes poco.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">Por qué esto define tu resultado:</h3>
          <p className="text-lg leading-relaxed">
            Los médicos que ingresan a especialidad no estudian más. Estudian mejor. Con un mapa claro que elimina las conjeturas y les dice exactamente qué hacer cada día.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">La solución:</h3>
          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-base md:text-lg">
              <strong>Mi Eunacom</strong> organiza las 5.000+ preguntas por especialidad, nivel de dificultad y frecuencia en el examen. El análisis personalizado te muestra en tiempo real dónde vas bien, dónde estás débil y tu proyección de puntaje. No más ansiedad. No más caos. Solo un camino claro hacia tu especialidad.
            </p>
          </div>
        </article>

        <div className="my-12 flex justify-center">
          <img
            src={studyGroupImage}
            alt="Estudiantes de medicina preparando el Eunacom en grupo"
            className="rounded-3xl shadow-2xl w-full max-w-2xl object-cover"
            style={{ boxShadow: 'var(--shadow-soft)' }}
          />
        </div>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error #3: Estudiar con material desactualizado (y memorizar lo incorrecto)
          </h2>
          
          <p className="text-lg leading-relaxed">
            Estudias meses con apuntes de hace 3 años. Memorizas el manejo de HTA de un PDF online. Llegas al examen confiado. La pregunta: "Según la última guía MINSAL 2024...". Marcas lo que estudiaste. Está mal. Las guías cambiaron. Perdiste puntos no porque no estudiaste, sino porque estudiaste lo incorrecto.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">El problema:</h3>
          <p className="text-lg leading-relaxed">
            La medicina evoluciona. Las guías se actualizan. Los protocolos cambian. Confiar en material desactualizado es prepararte para una pelea estudiando las estrategias del oponente del año pasado. Memorizar información incorrecta no solo no suma puntos, sino que genera confusión cuando te enfrentas a la versión actualizada.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">Por qué esto puede costarte tu especialidad:</h3>
          <p className="text-lg leading-relaxed">
            El EUNACOM se basa en guías ministeriales vigentes. Material viejo significa dosis incorrectas, algoritmos obsoletos, confusión entre lo que "era" y lo que "es". Estudiaste mucho, pero estudiaste mal.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">La solución:</h3>
          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-base md:text-lg">
              <strong>Mi Eunacom</strong> trabaja con médicos expertos que revisan y actualizan el contenido constantemente. Cada pregunta está validada según guías MINSAL vigentes, con acceso directo a los ebooks oficiales del MINSAL. No dejes tu futuro en manos de un PDF de origen desconocido.
            </p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error #4: Llegar al examen sin haber practicado bajo presión real
          </h2>
          
          <p className="text-lg leading-relaxed">
            Dominas la teoría. Has respondido cientos de preguntas en casa, sin prisa, revisando tus apuntes cuando dudas. Te sientes seguro.
          </p>
          <p className="text-lg leading-relaxed">
            Día del examen: 180 preguntas. 3 horas. Sin pausas. Sin apuntes. El cronómetro corre. Tu corazón se acelera. Empiezas a dudar. Te atrasas. Entras en pánico.
          </p>
          <p className="text-lg leading-relaxed">
            La teoría estaba. Pero el entrenamiento no.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">El problema:</h3>
          <p className="text-lg leading-relaxed">
            Conocer la respuesta en tu casa no es lo mismo que conocerla bajo presión, con tiempo limitado, con ansiedad, con fatiga mental. El EUNACOM evalúa cómo funcionas bajo condiciones extremas: concentración por 3 horas, distribución de tiempo, decisiones rápidas, manejo de ansiedad. Si nunca entrenaste esto, no estarás listo.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">Por qué esto separa a los que aprueban de los que reprueban:</h3>
          <p className="text-lg leading-relaxed">
            Los atletas de élite entrenan bajo las condiciones exactas de la competencia. Llegar sin simulaciones es como correr una maratón sin nunca haber corrido más de 5 kilómetros. Teóricamente sabes cómo, prácticamente colapsarás.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">La solución:</h3>
          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-base md:text-lg">
              <strong>Mi Eunacom</strong> ofrece simulaciones que replican exactamente el examen real: 180 preguntas, 3 horas, mismo formato y dificultad. Esto te permite identificar puntos de quiebre, mejorar velocidad sin sacrificar precisión y entrenar toma de decisiones bajo presión. El día del examen no será tu primera vez bajo presión. Será una repetición más.
            </p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error #5: Ver la respuesta correcta y seguir adelante (sin aprender realmente)
          </h2>
          
          <p className="text-lg leading-relaxed">
            Respondes 50 preguntas. Fallas 15. Ves las respuestas correctas, te frustras ("¡obvio, era esa!"), y sigues adelante.
          </p>
          <p className="text-lg leading-relaxed">
            Dos semanas después: exactamente el mismo tipo de pregunta, formulada diferente. Vuelves a fallar.
          </p>
          <p className="text-lg leading-relaxed">
            ¿Por qué? Porque nunca aprendiste el razonamiento. Solo memorizaste una respuesta.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">El problema:</h3>
          <p className="text-lg leading-relaxed">
            El aprendizaje real ocurre cuando entiendes por qué las otras estaban mal. El EUNACOM reformula la misma pregunta de 10 formas diferentes. Si solo memorizas respuestas sin comprender el concepto, reprobarás. Es como estudiar matemáticas memorizando resultados: cuando cambian los números, estás perdido.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">Por qué esto determina tu retención:</h3>
          <p className="text-lg leading-relaxed">
            Los que aprueban con puntajes altos no tienen mejor memoria. Tienen mejor comprensión. Cuando fallas sin analizar el error profundamente, no entiendes el razonamiento clínico ni identificas patrones. Resultado: mucho esfuerzo, cero progreso.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold">La solución:</h3>
          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-base md:text-lg">
              <strong>Mi Eunacom</strong> incluye justificaciones completas en sus 5.000+ preguntas: por qué cada alternativa es correcta o incorrecta, contexto clínico que refuerza el concepto, y razonamiento paso a paso. Este aprendizaje profundo explica el 98% de ingreso a especialidad. No acumules respuestas. Acumula comprensión.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export const ContentSection = () => {
  return (
    <section className="content-section py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl space-y-12">
        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl text-center">
            Introducción
          </h2>
          <p className="text-lg leading-relaxed">
            Sin embargo, muchos novios terminan arrepintiéndose después de elegir mal dónde hacerla: entre regalos que nunca usan, tarjetas que los amarran a una tienda o procesos llenos de complicaciones.
          </p>
          <p className="text-lg leading-relaxed">
            En este artículo te contamos los errores más comunes al crear la lista de regalos y cómo evitarlos para disfrutar de una experiencia mucho más libre y personalizada.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error 1: Crearla en una tienda que te amarra con una tarjeta o puntos
          </h2>
          <p className="text-lg leading-relaxed">
            Muchos novios siguen el camino tradicional y hacen su lista en casas comerciales. El problema es que, aunque parezca práctico, no recibes dinero real, sino una tarjeta de crédito con restricciones y condiciones.
          </p>
          <p className="text-lg leading-relaxed">
            Además, si algo falla (como ha pasado en varios casos), puedes terminar sin acceso a tus fondos.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Cómo evitarlo:</strong> elige una lista 100% online y sin intermediarios, donde el dinero de tus regalos llegue directo a tu cuenta bancaria. En Mi Lista de Novios, tú decides cómo y cuándo usarlo.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error 2: No pensar en lo que realmente representa a la pareja
          </h2>
          <p className="text-lg leading-relaxed">
            Las listas tradicionales están llenas de electrodomésticos repetidos o artículos que no reflejan su historia como pareja.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Cómo evitarlo:</strong> arma una lista que cuente su historia —con regalos simbólicos como "nuestra primera aventura juntos", "un viaje a la luna" o "un fin de semana sin pantallas".
          </p>
          <p className="text-lg leading-relaxed">
            Además de ser más emotiva, tus invitados disfrutarán el proceso de regalar algo con verdadero significado.
          </p>
        </article>

        <div className="my-12 flex justify-center">
          <img
            src={new URL("../assets/parent-tucking-child.jpg", import.meta.url).href}
            alt="Pareja planificando juntos su lista de regalos"
            className="rounded-3xl shadow-2xl w-full max-w-2xl object-cover"
            style={{ boxShadow: 'var(--shadow-soft)' }}
          />
        </div>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error 3: Complicarles la vida a los invitados
          </h2>
          <p className="text-lg leading-relaxed">
            Nada peor que un invitado que no logra entender cómo comprar un regalo o que se frustra con los métodos de pago.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Cómo evitarlo:</strong> elige una plataforma simple y segura, con pagos vía Transbank y todas las tarjetas disponibles. En Mi Lista de Novios, cada vez que alguien te hace un regalo, recibe un mail con el detalle y mensaje, ¡sin enredos ni pasos extra!
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error 4: No revisar los costos ocultos
          </h2>
          <p className="text-lg leading-relaxed">
            Algunas plataformas cobran comisiones o descuentan parte del dinero que recibes.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Cómo evitarlo:</strong> asegúrate de que el servicio sea gratis para los novios. En Mi Lista de Novios recibes el 100% del monto regalado, sin comisiones ni descuentos, mientras que el recargo de 10% se aplica solo al invitado (el mismo costo de cualquier compra online).
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error 5: No aprovechar beneficios adicionales
          </h2>
          <p className="text-lg leading-relaxed">
            Muchos novios se enfocan solo en los regalos y olvidan los beneficios exclusivos que pueden obtener al elegir bien su lista.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Cómo evitarlo:</strong> busca plataformas con alianzas reales y ventajas para tu matrimonio. En Mi Lista de Novios, por ejemplo, accedes a descuentos con marcas como LG, Samsung, Viña Casas del Bosque, Joyas Premium y Huilo Huilo, además de acumular Millas LATAM Pass por cada regalo recibido.
          </p>
        </article>
      </div>
    </section>
  );
};

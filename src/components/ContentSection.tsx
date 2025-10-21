export const ContentSection = () => {
  return (
    <section className="content-section py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl space-y-12">
        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error 1: Hacer la lista en una tienda que te amarra
          </h2>
          <p className="text-lg leading-relaxed">
            Durante años, lo típico era crear la lista en una casa comercial. Prometen que recibirás el dinero de tus regalos, pero muchos novios descubren —cuando ya están casados y con la tarjeta en la mano— que en realidad no están recibiendo dinero, sino una tarjeta de crédito con condiciones.
          </p>
          <p className="text-lg leading-relaxed">
            Si tienes una deuda activa con esa tarjeta, el monto de tus regalos se usa automáticamente para pagarla. Y aunque estés al día, lo que recibes no es libre: tiene topes, restricciones y letras chicas.
          </p>
          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-base md:text-lg italic">
              "Si me hubieran dicho esto antes, jamás habría elegido Novios París. Todo el monto se fue a pagar la tarjeta."<br />
              <span className="text-sm text-muted-foreground">— Isabel, reseña en matrimonios.cl (1/5 estrellas)</span>
            </p>
          </div>
          <p className="text-lg leading-relaxed">
            Otros novios se quejan de beneficios que nunca llegan o descuentos que solo aplican en ciertas tiendas. Lo que parecía práctico termina siendo un proceso lento, engorroso y muy poco transparente.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>💡 Cómo evitarlo:</strong> elige una plataforma libre y directa. Con Mi Lista de Novios, el dinero de tus regalos llega a tu cuenta bancaria, sin intermediarios, sin letras chicas y sin amarras. Tú decides en qué usarlo: tu luna de miel, tu casa, o simplemente darte un respiro después del gran día.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error 2: Llenarla de cosas que no los representan
          </h2>
          <p className="text-lg leading-relaxed">
            Tostadoras, platos, licuadoras… todo eso está bien. Pero seamos honestos: una lista llena de artículos se ve más como una lista de supermercado que como una invitación especial a ser parte de su historia.
          </p>
          <p className="text-lg leading-relaxed">
            Y eso cambia por completo la experiencia del invitado. Recibir un link con una lista de productos impersonales se siente frío, casi como si le mandaras un pedido del súper. En cambio, recibir una lista con regalos simbólicos y mensajes lindos —como "nuestra primera escapada juntos" o "una cena sin pantallas"— emociona, hace sonreír y conecta.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>💡 Cómo evitarlo:</strong> haz que tu lista se vea bonita y cuente quiénes son. En Mi Lista de Novios, tú inventas los regalos, defines los precios y das sentido a cada uno. Tus invitados no solo aportan dinero: te ayudan a construir recuerdos.
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
            Muchos invitados, sobre todo los mayores, se frustran cuando deben crear cuentas, usar puntos o entender sistemas enredados. Y lo más triste es que, por no saber cómo hacerlo, terminan no regalando nada.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>💡 Cómo evitarlo:</strong> usa una plataforma pensada para todos. En Mi Lista de Novios, tus invitados pagan con tarjeta de débito o crédito vía Transbank, sin registros ni pasos extra. Reciben un mail automático con el detalle del regalo y su mensaje, y tú puedes ver todo desde tu cuenta: quién regaló, cuánto, cuándo y qué escribió.
          </p>
          <p className="text-lg leading-relaxed">
            Así, regalar se vuelve tan fácil como hacer una compra online… pero con emoción.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error 4: No revisar los costos ocultos
          </h2>
          <p className="text-lg leading-relaxed">
            Muchas plataformas descuentan parte del dinero que recibes o esconden comisiones detrás de "beneficios especiales". A simple vista parece poco, pero cuando sumas todos los regalos, la diferencia puede ser enorme.
          </p>
          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-base md:text-lg italic">
              💬 "No es lo que te ofrecen. La forma en que plantean los beneficios es engañosa. Te dicen una cosa y después aplican otra."<br />
              <span className="text-sm text-muted-foreground">— Reseña real en matrimonios.cl</span>
            </p>
          </div>
          <p className="text-lg leading-relaxed">
            <strong>💡 Cómo evitarlo:</strong> busca transparencia real. En Mi Lista de Novios, el servicio es 100% gratuito para los novios. Si un regalo vale $50.000, recibes exactamente $50.000. El único recargo del 10% lo paga el invitado (como cualquier compra online) y cubre el sistema y los medios de pago.
          </p>
          <p className="text-lg leading-relaxed">
            Nada escondido. Nada que reste.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Error 5: No aprovechar las herramientas que realmente facilitan tu matrimonio
          </h2>
          <p className="text-lg leading-relaxed">
            Hoy todas las plataformas prometen "beneficios", pero pocas entregan herramientas reales. Mientras algunos hablan de puntos o descuentos llenos de condiciones, en Mi Lista de Novios decidimos hacer algo distinto: darte funcionalidades que te simplifican la vida.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>💡 Cómo evitarlo:</strong> elige una lista que te acompañe de verdad en la organización. Además de recibir el dinero de tus regalos, en Mi Lista de Novios puedes:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-lg leading-relaxed">
              <strong>Acumular Millas LATAM Pass</strong> por cada regalo recibido.
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Contactar automáticamente a tus invitados por mail</strong> para recordarles tu lista (sin tener que hacerlo tú).
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Organizar las mesas de tu matrimonio</strong> con un plano virtual.
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Crear tu checklist y presupuesto</strong> dentro de la misma cuenta.
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Compartir un álbum de fotos</strong> donde tus invitados suben las imágenes de ese día en tiempo real.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            Todo en un solo lugar. Sin descargas, sin apps extra, y sin letras chicas.
          </p>
        </article>
      </div>
    </section>
  );
};

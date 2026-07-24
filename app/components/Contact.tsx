export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-stone-900 text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.35em] text-sm text-amber-400">
          Contacto
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Conversemos alrededor de un buen café.
        </h2>

        <p className="mt-6 text-lg text-stone-300 max-w-2xl mx-auto leading-8">
          ¿Quieres conocer nuestros cafés, hacer un pedido o distribuir
          Valle Umbría? Estaremos encantados de ayudarte.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="https://wa.me/573122820001"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-green-600 px-8 py-4 font-semibold hover:bg-green-700 transition"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/valleumbriacafe"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white px-8 py-4 font-semibold hover:bg-white hover:text-stone-900 transition"
          >
            Instagram
          </a>

        </div>

      </div>
    </section>
  );
}
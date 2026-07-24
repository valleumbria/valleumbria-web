import Image from "next/image";

export default function Story() {
  return (
    <section
      id="historia"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="uppercase tracking-[0.35em] text-sm font-semibold text-amber-700">
            Nuestra Historia
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-stone-900">
            Un café que nace entre montañas.
          </h2>

          <p className="mt-8 text-lg leading-8 text-stone-600">
            Valle Umbría nace del deseo de compartir cafés de especialidad que
            expresan el origen, la dedicación de los caficultores y la riqueza
            de las montañas antioqueñas.
          </p>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            Cada lote es cuidadosamente seleccionado, procesado y tostado para
            resaltar sus mejores atributos y brindar una experiencia única en
            cada taza.
          </p>
        </div>

        <div>
          <Image
            src="/bolsa.jpeg"
            alt="Valle Umbría"
            width={600}
            height={700}
            className="rounded-3xl shadow-xl mx-auto"
          />
        </div>

      </div>
    </section>
  );
}
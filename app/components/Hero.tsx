import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="uppercase tracking-[0.35em] text-sm font-semibold text-amber-700">
            Café de Especialidad Colombiano
          </p>

          <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight text-stone-900">
            Cada taza
            <span className="block text-amber-700">
              cuenta una historia.
            </span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-stone-600 max-w-xl">
            Desde las montañas de Antioquia cultivamos café de especialidad con
            procesos cuidadosamente seleccionados para resaltar el origen, la
            dulzura y la complejidad de cada grano.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#productos"
              className="rounded-xl bg-amber-700 px-8 py-4 text-white font-semibold hover:bg-amber-800 transition"
            >
              Descubrir nuestros cafés
            </a>

            <a
              href="#historia"
              className="rounded-xl border border-amber-700 px-8 py-4 font-semibold text-amber-700 hover:bg-amber-700 hover:text-white transition"
            >
              Nuestra Historia
            </a>

          </div>

        </div>

        <div className="flex justify-center">

          <Image
            src="/bolsa.jpeg"
            alt="Bolsa Café Valle Umbría"
            width={560}
            height={720}
            priority
            className="drop-shadow-[0_35px_60px_rgba(0,0,0,0.30)] hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}
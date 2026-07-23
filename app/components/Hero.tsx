import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <Image
            src="/f951b2f4-de64-4b7c-ae59-d7688ca02ee3.jpeg"
            alt="Valle Umbría"
            width={180}
            height={180}
            className="mb-8"
          />

          <p className="uppercase tracking-[0.35em] text-sm text-amber-700 font-semibold">
            Café de Especialidad
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mt-5 leading-tight">
            Café cultivado en las montañas de Antioquia.
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            En Valle Umbría cultivamos cafés de origen con procesos Lavado,
            Honey y Natural, resaltando la riqueza de Granada y Andes,
            Antioquia.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://wa.me/573122820001"
              target="_blank"
              className="rounded-full bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700 transition"
            >
              Comprar por WhatsApp
            </a>

            <a
              href="https://instagram.com/valleumbriacafe"
              target="_blank"
              className="rounded-full border px-8 py-4 font-semibold hover:bg-gray-100 transition"
            >
              Instagram
            </a>

          </div>
        </div>

        <div>
          <Image
            src="/3124532e-a97c-4926-b022-e04f1f61f721.jpeg"
            alt="Café Valle Umbría"
            width={700}
            height={700}
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

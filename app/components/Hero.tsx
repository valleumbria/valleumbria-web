import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <Image
            src="/logo.jpeg"
            alt="Café Valle Umbría"
            width={180}
            height={180}
          />

          <p className="mt-8 uppercase tracking-[0.35em] text-sm text-amber-700">
            Café de Especialidad
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            Desde las montañas de Antioquia hasta tu taza.
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Café de especialidad cultivado con pasión, procesos
            cuidadosamente seleccionados y un perfil pensado para quienes
            disfrutan una excelente taza de café.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#historia"
              className="bg-amber-700 text-white px-6 py-3 rounded-xl"
            >
              Nuestra Historia
            </a>

            <a
              href="#productos"
              className="border border-amber-700 text-amber-700 px-6 py-3 rounded-xl"
            >
              Ver Café
            </a>
          </div>
        </div>
<div className="mt-8 flex gap-6">
  <a
    href="https://wa.me/573122820001"
    target="_blank"
    className="text-green-600 font-semibold hover:underline"
  >
    WhatsApp
  </a>

  <a
    href="https://instagram.com/valleumbriacafe"
    target="_blank"
    className="text-amber-700 font-semibold hover:underline"
  >
    Instagram
  </a>
</div>
        <div className="flex justify-center">
          <Image
            src="/bolsa.jpeg"
            alt="Bolsa Café Valle Umbría"
            width={520}
            height={650}
            priority
          />
        </div>

      </div>
    </section>
  );
}
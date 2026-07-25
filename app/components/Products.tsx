import Image from "next/image";

export default function Products() {
  return (
    <section
      id="productos"
      className="bg-stone-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-sm text-amber-700 font-semibold">
            Nuestros Cafés
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-stone-900">
            Descubre el origen en cada taza.
          </h2>

          <p className="mt-6 text-lg text-stone-600 leading-8">
            Cada proceso resalta características únicas del café. Explora nuestros perfiles y encuentra el que mejor se adapta a tu forma de disfrutar el café de especialidad.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition">

            <Image
              src="/bolsa.jpeg"
              alt="Café Lavado"
              width={280}
              height={360}
              className="mx-auto"
            />

            <h3 className="mt-8 text-2xl font-bold">
              Lavado
            </h3>

            <p className="mt-4 text-stone-600 leading-7">
              Perfil limpio y balanceado, con acidez brillante y dulzor elegante.
            </p>

            <a
              href="https://wa.me/573122820001?text=Hola,%20quiero%20comprar%20café%20Valle%20Umbría"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-amber-700 font-semibold"
            >
              comprar ahora →
            </a>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition">

            <Image
              src="/bolsa.jpeg"
              alt="Café Honey"
              width={280}
              height={360}
              className="mx-auto"
            />

            <h3 className="mt-8 text-2xl font-bold">
              Honey
            </h3>

            <p className="mt-4 text-stone-600 leading-7">
              Dulzor pronunciado con notas frutales y cuerpo sedoso.
            </p>

            <a
              href="https://wa.me/573122820001?text=Hola,%20quiero%20comprar%20café%20Valle%20Umbría"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-amber-700 font-semibold"
            >
              comprar ahora →
            </a>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition">

            <Image
              src="/bolsa.jpeg"
              alt="Café Natural"
              width={280}
              height={360}
              className="mx-auto"
            />

            <h3 className="mt-8 text-2xl font-bold">
              Natural
            </h3>

            <p className="mt-4 text-stone-600 leading-7">
              Intenso, complejo y con notas dulces que resaltan el origen del grano.
            </p>

            <a
              href="https://wa.me/573122820001?text=Hola,%20quiero%20comprar%20café%20Valle%20Umbría"
target="_blank"
rel="noopener noreferrer"
              className="inline-block mt-8 text-amber-700 font-semibold"
            >
              comprar ahora →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
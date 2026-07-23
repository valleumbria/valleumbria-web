import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-[#4A3728]">
            Café Valle Umbría
          </h1>

          <nav className="hidden gap-8 md:flex">
            <a href="#historia" className="hover:text-amber-700">
              Historia
            </a>
            <a href="#cafes" className="hover:text-amber-700">
              Cafés
            </a>
            <a href="https://instagram.com/valleumbriacafe" target="_blank">
              Instagram
            </a>
          </nav>
        </div>
      </header>

      <Hero />

      <section
        id="historia"
        className="mx-auto max-w-6xl px-6 py-20 text-center"
      >
        <h2 className="mb-6 text-4xl font-bold">
          Nuestra Historia
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-700">
          Valle Umbría nace de la pasión por producir cafés de especialidad en
          las montañas de Antioquia. Cada lote refleja el trabajo cuidadoso de
          la finca, la selección del grano y una tostión diseñada para resaltar
          el origen.
        </p>
      </section>

      <section
        id="cafes"
        className="bg-[#EEE4D5] py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              Lavado
            </h3>
            <p>
              Perfil limpio, dulce y balanceado.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              Honey
            </h3>
            <p>
              Dulzor pronunciado y notas frutales.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              Natural
            </h3>
            <p>
              Mayor intensidad, cuerpo y complejidad.
            </p>
          </div>

        </div>
      </section>

      <footer className="bg-[#3B2B20] py-10 text-center text-white">
        <h3 className="text-2xl font-bold">
          Café Valle Umbría
        </h3>

        <p className="mt-3">
          Granada y Andes • Antioquia • Colombia
        </p>

        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://wa.me/573122820001"
            target="_blank"
            className="rounded-full bg-green-600 px-6 py-3"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/valleumbriacafe"
            target="_blank"
            className="rounded-full bg-amber-600 px-6 py-3"
          >
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}

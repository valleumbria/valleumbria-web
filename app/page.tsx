import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section
        id="historia"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-700">
            Nuestra Historia
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Café cultivado con paciencia, pasión y respeto por la montaña.
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Valle Umbría nace en las montañas de Antioquia con el propósito de
            ofrecer café de especialidad que refleje el origen, el trabajo de
            los caficultores y la riqueza de cada cosecha.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Cada lote es seleccionado cuidadosamente y procesado buscando el
            mejor perfil en taza para brindar una experiencia única.
          </p>
        </div>
      </section>
    </main>
  );
}
<section
  id="productos"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <p className="uppercase tracking-[0.3em] text-sm text-amber-700 text-center">
    Nuestros Cafés
  </p>

  <h2 className="text-4xl font-bold text-center mt-4">
    Cada bolsa cuenta una historia
  </h2>

  <div className="mt-16 flex justify-center">
    <img
      src="/bolsa.jpeg"
      alt="Bolsa Café Valle Umbría"
      className="w-72"
    />
  </div>

  <div className="text-center mt-8">
    <h3 className="text-2xl font-semibold">
      Café Valle Umbría
    </h3>

    <p className="mt-4 text-gray-600">
      Café de especialidad cultivado en Antioquia,
      seleccionado y tostado para resaltar todo el potencial
      de cada grano.
    </p>
  </div>
</section>
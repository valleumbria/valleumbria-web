export default function Benefits() {
  const benefits = [
    {
      icon: "🌱",
      title: "Origen",
      text: "Café cultivado en las montañas de Antioquia, donde la altura y el clima favorecen una taza excepcional.",
    },
    {
      icon: "☕",
      title: "Calidad",
      text: "Seleccionamos cada lote para ofrecer una experiencia consistente y de alta calidad.",
    },
    {
      icon: "🏔️",
      title: "Altura",
      text: "Cultivado alrededor de los 1.720 m s. n. m., ideal para desarrollar aromas y dulzor natural.",
    },
    {
      icon: "❤️",
      title: "Pasión",
      text: "Cada grano refleja el trabajo, el cuidado y el respeto por el café y por quienes lo producen.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm font-semibold text-amber-700">
            ¿Por qué Valle Umbría?
          </p>

          <h2 className="mt-4 text-4xl font-bold text-stone-900">
            Mucho más que una taza de café.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-stone-50 p-8 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const restaurants = [
    {
      id: 1,
      emoji: "🍕",
      name: "I Masanielli",
      category: "Pizza",
      rating: 4.9,
      delivery: "20-30 min",
      fee: "€1,99",
    },
    {
      id: 2,
      emoji: "🍣",
      name: "Tatami Japanese",
      category: "Sushi",
      rating: 4.7,
      delivery: "25-35 min",
      fee: "€2,49",
    },
    {
      id: 3,
      emoji: "🍔",
      name: "Smash Up",
      category: "Burger",
      rating: 4.8,
      delivery: "15-20 min",
      fee: "€1,49",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-green-600 text-white p-6 rounded-b-3xl shadow-lg">
        <p className="text-green-100 text-sm">
          Caserta
        </p>

        <h1 className="text-4xl font-bold">
          🦎 GEKO
        </h1>

        <p className="mt-1 text-green-100">
          Consegna autonoma
        </p>

        <input
          placeholder="Cerca ristoranti..."
          className="w-full mt-5 rounded-xl p-3 text-black bg-white"
        />
      </div>

      {/* Categorie */}
      <div className="flex gap-2 overflow-x-auto p-4">
        {["🍕 Pizza", "🍣 Sushi", "🍔 Burger"].map(
          (cat) => (
            <div
              key={cat}
              className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium whitespace-nowrap"
            >
              {cat}
            </div>
          )
        )}
      </div>

      {/* Ristoranti */}
      <section className="px-4">
        <h2 className="text-xl font-bold mb-3">
          I più richiesti
        </h2>

        {restaurants.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl p-4 mb-4 shadow-md flex items-center gap-4"
          >
            <div className="text-5xl">
              {r.emoji}
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-lg">
                {r.name}
              </h3>

              <p className="text-gray-500">
                {r.category}
              </p>

              <p className="text-sm mt-1">
                ⭐ {r.rating} • {r.delivery}
              </p>
            </div>

            <div className="text-right">
              <span className="text-green-600 font-bold">
                {r.fee}
              </span>

              <p className="text-xs text-gray-500">
                GEKO
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-4 text-2xl">
        <button>🏠</button>
        <button>🔍</button>
        <button>🛒</button>
        <button>👤</button>
      </nav>
    </main>
  );
}

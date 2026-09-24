
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="bg-green-600 text-white p-5 rounded-b-3xl">
        <h1 className="text-3xl font-bold">🦎 GEKO</h1>
        <p className="text-green-100 mt-1">
          Consegne autonome
        </p>

        <input
          className="w-full mt-4 p-3 rounded-xl text-black"
          placeholder="Cerca ristoranti..."
        />
      </div>

      <section className="p-4">
        <h2 className="font-bold text-xl mb-3">
          Ristoranti
        </h2>

        {[
          ["🍕", "Pizza Mario", "18-25 min"],
          ["🍣", "Sushi Go", "25-35 min"],
          ["🍔", "Burger Lab", "15-20 min"],
        ].map(([emoji, name, time]) => (
          <div
            key={name}
            className="bg-white rounded-2xl p-4 mb-3 shadow-sm flex items-center gap-4"
          >
            <div className="text-4xl">{emoji}</div>

            <div className="flex-1">
              <h3 className="font-semibold">{name}</h3>
              <p className="text-gray-500 text-sm">
                ⭐ 4.8 • {time}
              </p>
            </div>

            <span className="text-green-600 font-bold">
              GEKO
            </span>
          </div>
        ))}
      </section>

      <nav className="fixed bottom-0 w-full bg-white border-t p-3 flex justify-around text-2xl">
        <button>🏠</button>
        <button>🔍</button>
        <button>🛒</button>
        <button>👤</button>
      </nav>
    </main>
  );
}

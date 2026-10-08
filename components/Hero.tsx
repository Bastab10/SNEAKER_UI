export default function Hero() {
  return (
    <section className="relative h-[650px] w-full overflow-hidden bg-gray-200">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2000&q=90"
        alt="Featured sneaker"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-12 flex flex-col items-center px-6 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em]">
          New Collection
        </p>

        <h1 className="text-6xl font-black uppercase tracking-tight sm:text-7xl md:text-8xl">
          Move Free
        </h1>

        <p className="mt-4 max-w-lg text-sm sm:text-base">
          Designed for everyday movement. Built for wherever you go.
        </p>

        <div className="mt-7 flex gap-3">
          <button
            type="button"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Shop Men
          </button>

          <button
            type="button"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Shop Women
          </button>
        </div>
      </div>
    </section>
  );
}

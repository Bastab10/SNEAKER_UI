export default function Hero() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden bg-gray-200 sm:h-[600px] md:h-[650px]">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2000&q=90"
        alt="Featured sneaker"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center px-4 text-center text-white sm:bottom-12 sm:px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm sm:tracking-[0.3em]">
          New Collection
        </p>

        <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Move Free
        </h1>

        <p className="mt-3 max-w-lg text-sm leading-relaxed sm:mt-4 sm:text-base">
          Designed for everyday movement. Built for wherever you go.
        </p>

        <div className="mt-6 flex w-full flex-wrap justify-center gap-3 sm:mt-7">
          <button
            type="button"
            className="min-w-[130px] rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 sm:min-w-0 sm:px-8"
          >
            Shop Men
          </button>

          <button
            type="button"
            className="min-w-[130px] rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 sm:min-w-0 sm:px-8"
          >
            Shop Women
          </button>
        </div>
      </div>
    </section>
  );
}

export default function PromoBar() {
  return (
    <section className="w-full bg-gray-100 px-3 py-3 text-center sm:px-6 sm:py-4">
      <p className="text-xs font-medium leading-relaxed sm:text-sm">
        Get Up To 40% Off*. Buy 3, Get Extra 20% Off*
      </p>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs underline underline-offset-4 sm:gap-5">
        <button type="button" className="transition-colors hover:text-gray-500">
          Shop Now
        </button>

        <button type="button" className="transition-colors hover:text-gray-500">
          Terms & Conditions
        </button>
      </div>
    </section>
  );
}

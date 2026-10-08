export default function PromoBar() {
  return (
    <section className="bg-gray-100 px-6 py-4 text-center">
      <p className="text-sm  font-medium">
        Get Up To 40% Off*.   Buy 3,   Get Extra 20% Off*
      </p>

      <div className="mt-1 flex items-center justify-center gap-5 text-xs underline underline-offset-4">
        <button type="button">Shop Now</button>
        <button type="button">Terms & Conditions</button>
      </div>
    </section>
  );
}
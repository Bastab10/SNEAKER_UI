    "use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product";

type ProductSectionProps = {
  eyebrow: string;
  title: string;
  products: Product[];
};

export default function ProductSection({
  eyebrow,
  title,
  products,
}: ProductSectionProps) {
  const scrollLeft = () => {
    document.getElementById(title)?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById(title)?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            {eyebrow}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label={`Previous ${title}`}
            className="rounded-full bg-gray-100 p-3 transition hover:bg-gray-200"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            aria-label={`Next ${title}`}
            className="rounded-full bg-gray-100 p-3 transition hover:bg-gray-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        id={title}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[75%] shrink-0 sm:w-[45%] lg:w-[calc(25%-15px)]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
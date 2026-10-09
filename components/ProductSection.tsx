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
    <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-6 flex items-end justify-between gap-3 sm:mb-8">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500 sm:text-sm">
            {eyebrow}
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label={`Previous ${title}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200 sm:h-12 sm:w-12"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            aria-label={`Next ${title}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200 sm:h-12 sm:w-12"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        id={title}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[82%] shrink-0 snap-start min-[400px]:w-[75%] sm:w-[45%] lg:w-[calc(25%-15px)]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

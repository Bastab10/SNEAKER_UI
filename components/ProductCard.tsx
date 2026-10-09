import { Heart } from "lucide-react";
import { Product } from "@/types/Product";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="group relative min-w-0 w-full">
      <div className="relative">
        <Link href={`/products/${product.id}`} className="block">
          <div className="aspect-square w-full overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-sm transition-transform hover:scale-105 sm:right-4 sm:top-4 sm:p-2.5"
        >
          <Heart
            size={19}
            strokeWidth={1.8}
            className="h-[18px] w-[18px] sm:h-5 sm:w-5"
          />
        </button>
      </div>

      <Link href={`/products/${product.id}`} className="block">
        <div className="pt-3 sm:pt-4">
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-medium sm:whitespace-normal">
                {product.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {product.category}
              </p>
            </div>

            <p className="shrink-0 whitespace-nowrap text-xs font-medium sm:text-sm">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
          </div>

          {product.originalPrice && (
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
              <span className="text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>

              {product.discount && (
                <span className="text-red-600">
                  {product.discount}% off
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}

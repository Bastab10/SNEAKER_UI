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
    <article className="group relative">
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 rounded-full bg-white p-2.5 shadow-sm transition-transform hover:scale-105"
        >
          <Heart size={19} strokeWidth={1.8} />
        </button>
      </div>

      <Link href={`/products/${product.id}`}>
        <div className="pt-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-medium">
                {product.name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {product.category}
              </p>
            </div>

            <p className="text-sm font-medium">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
          </div>

          {product.originalPrice && (
            <div className="mt-2 flex items-center gap-2 text-sm">
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
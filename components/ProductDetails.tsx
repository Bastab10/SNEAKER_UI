"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import ProductGallery from "@/components/ProductGallery";
import { Product } from "@/types/Product";

type ProductDetailsProps = {
  product: Product;
};

const sizes = [6, 7, 8, 9, 10, 11];

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(
    null
  );

  const [liked, setLiked] = useState(false);

  const { addToCart } = useCart();

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-12 md:grid-cols-2">
        <ProductGallery
          images={product.images}
          name={product.name}
        />

        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-500">
            {product.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            {product.name}
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-xl font-medium">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            {product.originalPrice && (
              <span className="text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}

            {product.discount && (
              <span className="text-red-600">
                {product.discount}% off
              </span>
            )}
          </div>

          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-medium">
                Select Size
              </h2>

              <button
                type="button"
                className="text-sm underline underline-offset-4"
              >
                Size Guide
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-md border py-4 text-sm font-medium transition ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  UK {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => setLiked(!liked)}
              aria-label="Add to wishlist"
              className="flex w-14 items-center justify-center rounded-full border border-gray-300 transition hover:border-black"
            >
              <Heart
                size={21}
                fill={liked ? "currentColor" : "none"}
              />
            </button>

            <button
              type="button"
              disabled={!selectedSize}
              onClick={() => {
                if (selectedSize) {
                  addToCart(product, selectedSize);
                }
              }}
              className="flex-1 rounded-full bg-black py-4 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {selectedSize ? "Add to Bag" : "Select Size"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
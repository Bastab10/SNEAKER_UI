"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Your Bag</h1>

        <p className="mt-4 text-gray-500">Your bag is currently empty.</p>

        <Link
          href="/"
          className="mt-8 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Your Bag</h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          {cart.map((item) => (
            <article
              key={`${item.product.id}-${item.size}`}
              className="flex gap-5 border-b border-gray-200 pb-8"
            >
              <Link
                href={`/products/${item.product.id}`}
                className="h-36 w-36 shrink-0 overflow-hidden bg-gray-100 sm:h-44 sm:w-44"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-full w-full object-cover"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div className="flex justify-between gap-6">
                  <div>
                    <Link
                      href={`/products/${item.product.id}`}
                      className="text-base font-medium hover:underline"
                    >
                      {item.product.name}
                    </Link>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.product.category}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Size: UK {item.size}
                    </p>
                  </div>

                  <p className="shrink-0 text-sm font-medium">
                    ₹{item.product.price.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-gray-300">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.size,
                          item.quantity - 1,
                        )
                      }
                      className="px-4 py-2 text-lg"
                    >
                      −
                    </button>

                    <span className="min-w-8 text-center text-sm">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.size,
                          item.quantity + 1,
                        )
                      }
                      className="px-4 py-2 text-lg"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id, item.size)}
                    aria-label={`Remove ${item.product.name}`}
                    className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black"
                  >
                    <Trash2 size={18} strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-2xl bg-gray-50 p-7">
          <h2 className="text-xl font-semibold">Summary</h2>

          <div className="mt-7 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>

              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Delivery</span>

              <span>Free</span>
            </div>
          </div>

          <div className="my-6 border-t border-gray-200" />

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>

            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>

          <Link
            href="/checkout"
            className="mt-7 block w-full rounded-full bg-black py-4 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Checkout
          </Link>
        </aside>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold">Your Bag Is Empty</h1>

        <p className="mt-3 text-gray-500">Add a product before checkout.</p>

        <Link
          href="/"
          className="mt-7 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Checkout</h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="text-xl font-semibold">Delivery Information</h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              className="rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none focus:border-black sm:col-span-2"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none focus:border-black sm:col-span-2"
            />

            <input
              type="text"
              placeholder="Address"
              className="rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none focus:border-black sm:col-span-2"
            />

            <input
              type="text"
              placeholder="City"
              className="rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="PIN Code"
              className="rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none focus:border-black"
            />
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-full bg-black py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Place Order
          </button>
        </div>

        <aside className="h-fit rounded-2xl bg-gray-50 p-7">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          <div className="mt-6 space-y-5">
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex gap-4"
              >
                <div className="h-20 w-20 shrink-0 overflow-hidden bg-white">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium">{item.product.name}</p>

                  <p className="mt-1 text-xs text-gray-500">
                    UK {item.size} · Qty {item.quantity}
                  </p>

                  <p className="mt-2 text-sm">
                    ₹
                    {(item.product.price * item.quantity).toLocaleString(
                      "en-IN",
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="my-6 border-t border-gray-200" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>

            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>
        </aside>
      </div>
    </main>
  );
}

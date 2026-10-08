"use client";

import { useCart } from "@/components/cart/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight">
          Your Bag
        </h1>

        <p className="mt-4 text-gray-500">
          Your bag is empty.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">
        Your Bag
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_350px]">
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="flex gap-5 border-b border-gray-200 pb-6"
            >
              <div className="h-32 w-32 shrink-0 overflow-hidden bg-gray-100">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-4">
                  <div>
                    <h2 className="font-medium">
                      {item.product.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.product.category}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Size: UK {item.size}
                    </p>
                  </div>

                  <p className="font-medium">
                    ₹{item.product.price.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-gray-300">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.size,
                          item.quantity - 1
                        )
                      }
                      className="px-4 py-2"
                    >
                      −
                    </button>

                    <span className="px-2 text-sm">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.size,
                          item.quantity + 1
                        )
                      }
                      className="px-4 py-2"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      removeFromCart(
                        item.product.id,
                        item.size
                      )
                    }
                    className="text-sm underline underline-offset-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-semibold">
            Summary
          </h2>

          <div className="mt-6 flex justify-between text-sm">
            <span>Subtotal</span>

            <span>
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div className="my-6 border-t border-gray-200" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>

            <span>
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-black py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
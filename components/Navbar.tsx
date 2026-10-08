"use client";

import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-black tracking-tight">
          SNEAKER
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/sale"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Sale
          </Link>

          <Link
            href="/new"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            New & Featured
          </Link>

          <Link
            href="/men"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Men
          </Link>

          <Link
            href="/women"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Women
          </Link>

          <Link
            href="/kids"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Kids
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-gray-100 px-5 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-200"
          >
            <Search size={18} strokeWidth={2} />
            <span>Search</span>
          </button>

          <button
            type="button"
            aria-label="Wishlist"
            className="rounded-full p-2 transition-colors hover:bg-gray-100"
          >
            <Heart size={22} strokeWidth={1.8} />
          </button>

          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="relative rounded-full p-2 transition-colors hover:bg-gray-100"
          >
            <ShoppingBag size={22} strokeWidth={1.8} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
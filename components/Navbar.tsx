"use client";

import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-xl font-black tracking-tight sm:text-2xl"
        >
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

        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <button
            type="button"
            aria-label="Search products"
            className="flex items-center gap-2 rounded-full bg-gray-100 p-2.5 text-gray-600 transition-colors hover:bg-gray-200 sm:px-5 sm:py-2.5"
          >
            <Search size={20} strokeWidth={2} />
            <span className="hidden text-sm sm:inline">Search</span>
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
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

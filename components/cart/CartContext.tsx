"use client";

import { createContext, useContext, useState } from "react";
import { CartItem } from "@/types/Cart";
import { Product } from "@/types/Product";

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, size: number) => void;
  removeFromCart: (productId: number, size: number) => void;
  updateQuantity: (
    productId: number,
    size: number,
    quantity: number
  ) => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: number) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) =>
          item.product.id === product.id && item.size === size
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentCart,
        {
          product,
          size,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (productId: number, size: number) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.size === size
          )
      )
    );
  };

  const updateQuantity = (
    productId: number,
    size: number,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
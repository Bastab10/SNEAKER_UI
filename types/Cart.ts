import { Product } from "@/types/Product";

export type CartItem = {
  product: Product;
  size: number;
  quantity: number;
};
export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images: string[];
};
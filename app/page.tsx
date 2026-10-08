import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import PromoBar from "@/components/PromoBar";
import TopBar from "@/components/TopBar";
import {
  dealProducts,
  newArrivals,
  trendingProducts,
} from "@/data/products";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PromoBar />
      <Hero />

      <ProductSection
        eyebrow="Featured"
        title="Trending Now"
        products={trendingProducts}
      />

      <ProductSection
        eyebrow="Popular"
        title="Can't-Miss Deals"
        products={dealProducts}
      />

      <ProductSection
        eyebrow="Latest"
        title="New Arrivals"
        products={newArrivals}
      />
    </>
  );
}
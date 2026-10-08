import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import PromoBar from "@/components/PromoBar";

import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PromoBar />
      <Hero />
    </>
  );
}
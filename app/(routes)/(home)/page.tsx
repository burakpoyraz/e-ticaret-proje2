"use client";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import Hero from "../_components/Hero";
import ProductList from "../_components/product/ProductList";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ProductList/>
    </div>
  );
}

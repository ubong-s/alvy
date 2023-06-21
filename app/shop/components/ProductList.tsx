"use client";

import { products } from "@/mockdata/product";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
};

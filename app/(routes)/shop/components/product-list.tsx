'use client';

import { products_data } from '@/mockdata/products_data';

import { ProductCard } from './product-card';

export const ProductList = () => {
  return (
    <section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products_data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
};

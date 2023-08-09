'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
}) => {
  return (
    <Link href='#' className='p-4 bg-cod-gray-1 rounded-lg'>
      <Image
        src={image}
        alt={name}
        width={580}
        height={590}
        className='rounded-lg w-full'
      />
      <div className='flex justify-between items-center px-2 pt-4 pb-2'>
        <h3 className='lg:text-lg'>{name}</h3>
        <p className='font-roboto-mono text-base'>$ {price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

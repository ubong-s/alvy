'use client';

import Image from 'next/image';

import { ButtonLink } from '@/components/ui';

interface FeaturedPostProps {
  title: string;
  category: string;
  image: string;
  excerpt: string;
  reverseColumns?: boolean;
  readMore: string;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({
  title,
  category,
  image,
  excerpt,
  reverseColumns,
  readMore,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 md:flex-row ${
        reverseColumns && 'md:flex-row-reverse'
      }`}
    >
      <div className='overflow-hidden md:flex-1'>
        <Image
          src={image}
          alt='name'
          width={960}
          height={920}
          className='object-cover md:h-full'
        />
      </div>

      <div className='bg-cod-gray-1 text-t-light md:flex-1 '>
        <div className='grid p-4 lg:p-12 md:h-full'>
          <p className='font-roboto-mono text-base mb-8 uppercase'>
            {category}
          </p>

          <div className='self-end'>
            <h2 className='text-2xl lg:text-3xl xl:text-5xl uppercase font-chillax mb-4'>
              {title}
            </h2>
            <p className='text-t-gray'>{excerpt}</p>

            <div className='mt-10'>
              <ButtonLink href={readMore} text='Read More' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

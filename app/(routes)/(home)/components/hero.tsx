'use client';

import Image from 'next/image';

import { ButtonLink } from '@/components/_shared';

export const Hero = () => {
  return (
    <section className='relative rounded-lg overflow-hidden h-[70vh] lg:h-[90vh]'>
      <div className='relative w-full h-full'>
        <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)] z-[1]'></div>
        <Image
          src='/images/noise.png'
          alt='hero Image'
          width={1880}
          height={930}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 lg:bottom-16 lg:left-16 lg:right-16 xl:bottom-20 xl:left-20 xl:right-20 2xl:bottom-28 2xl:left-28 2xl:right-28 z-[2] grid gap-4'>
        <h1 className='grid text-6xl lg:text-[70px] xl:text-[100px] 2xl:text-[120px]'>
          <span>Fashion</span>{' '}
          <span className='lg:ml-[60px] xl:ml-[130px] 2xl:ml-[260px]'>
            & Branding
          </span>{' '}
        </h1>
        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:gap-12 xl:gap-28'>
          <p className='max-w-[520px] lg:ml-[60px] xl:ml-[130px] 2xl:ml-[260px]'>
            Bringing Your Fashion{" Brand's"} Unique Identity to Life Through
            Strategic Marketing and Advertising.
          </p>
          <ButtonLink text='Learn More' href='#about' arrowDown />
        </div>
      </div>
    </section>
  );
};

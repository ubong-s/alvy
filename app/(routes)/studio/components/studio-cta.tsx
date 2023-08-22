'use client';

import Image from 'next/image';

import { ButtonLink } from '@/components/_shared';

export const StudioCTA = ({}) => {
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <div className='overflow-hidden md:flex-1'>
        <Image
          src='/images/noise.png'
          alt='name'
          width={400}
          height={500}
          className='object-cover md:h-full md:w-full max-h-[500px]'
        />
      </div>

      <div className='bg-cod-gray-1 text-t-light md:flex-1 '>
        <div className='grid p-4 lg:p-12 md:h-full'>
          <div>
            <h2 className='font-roboto-mono text-base mb-4'>Join our Team</h2>
            <p className='text-2xl lg:text-3xl xl:text-5xl uppercase font-chillax mb-8'>
              Want to shape the future of fashion?
            </p>
          </div>

          <div className='md:self-end'>
            <ButtonLink href='/jobs' text='Join our team' />
          </div>
        </div>
      </div>
    </div>
  );
};

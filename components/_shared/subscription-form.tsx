'use client';

import { useMounted } from '@/hooks/use-mounted';
import Image from 'next/image';

export const SubscriptionForm = () => {
  const { isMounted } = useMounted();

  if (!isMounted) {
    return null;
  }
  return (
    <section className='flex flex-col gap-4 bg-cod-gray-2 p-4 lg:flex-row lg:justify-between lg:items-center rounded-lg lg:rounded-xl'>
      <div className='flex items-center gap-8'>
        <div className='overflow-hidden'>
          <Image src='/images/noise.png' alt='sub' width={150} height={100} />
        </div>
        <div>
          <h2 className='font-roboto-mono'>NewsLetter</h2>
          <p className='font-chillax text-lg uppercase lg:text-2xl'>
            Get Insights behind the scenes
          </p>
        </div>
      </div>

      <form className='flex gap-2'>
        <input
          type='email'
          placeholder='Your email'
          className='uppercase font-roboto-mono p-5 bg-mine-shaft text-white rounded-lg border border-t-gray outline-none flex-grow lg:w-[350px]'
        />
        <button
          type='submit'
          className='p-5 rounded-lg bg-sundance text-cod-gray uppercase font-roboto-mono'
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

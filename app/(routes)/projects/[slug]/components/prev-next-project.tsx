import { ButtonLink } from '@/components/_shared';
import Image from 'next/image';

export const PrevNextProject = () => {
  return (
    <div className=' bg-cod-gray-1 p-4 flex gap-8 flex-col lg:flex-row lg:items-center lg:justify-between'>
      {/* Previous */}
      <div className='flex gap-4 items-center lg:gap-6'>
        <div className='overflow-hidden rounded-[4px]'>
          <Image src='/images/noise.png' alt='image' width={100} height={200} />
        </div>
        <div>
          <p className='font-roboto-mono uppercase text-t-gray'>Previous</p>
          <p className='text-2xl uppercase font-chillax'>Lorem Ipsum</p>
        </div>
      </div>

      {/* Overview */}

      <div className='self-center'>
        <ButtonLink href='#details' text='Overview' />
      </div>

      {/* NextProject */}
      <div className='flex flex-row-reverse gap-4 items-center lg:gap-6 text-right'>
        <div className='overflow-hidden rounded-[4px]'>
          <Image src='/images/noise.png' alt='image' width={100} height={200} />
        </div>
        <div>
          <p className='font-roboto-mono uppercase text-t-gray'>Previous</p>
          <p className='text-2xl uppercase font-chillax'>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
};

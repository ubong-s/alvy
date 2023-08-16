'use client';

import Image from 'next/image';
import { ButtonLink } from '@/components/ui';

interface ProjectHeroProps {
  name: string;
  image: string;
  excerpt: string;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({
  name,
  image,
  excerpt,
}) => {
  return (
    <div className='overflow-hidden rounded-lg relative'>
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)] z-[1]'></div>
        <Image
          src={image}
          alt={name}
          width={1880}
          height={930}
          className='w-full md:max-h-[500px] lg:max-h-screen object-cover'
        />
      </div>

      <div className='absolute left-0 top-0 w-full h-full p-6 md:p-8 lg:p-16 xl:p-[90px] flex flex-col justify-between z-[2]'>
        <Image src='/icons/behance.svg' alt={name} width={60} height={60} />

        <div className='grid gap-4 lg:flex lg:items-end lg:gap-10 lg:justify-between '>
          <div className='grid gap-4'>
            <h3 className='text-5xl lg:text-[70px] xl:text-[100px] 2xl:text-[120px]  max-w-[680px]'>
              {name}
            </h3>
            <p className='max-w-[560px]'>{excerpt}</p>
          </div>

          <ButtonLink text='Discover' href='#details' arrowDown />
        </div>
      </div>
    </div>
  );
};

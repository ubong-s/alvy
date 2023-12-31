'use client';

import { ButtonLink } from '@/components/_shared';

interface JobCardProps {
  position: string;
  location: string;
  description: string;
  type: string;
}

export const JobCard: React.FC<JobCardProps> = ({
  position,
  location,
  description,
  type,
}) => {
  return (
    <div className='p-4 md:p-8 lg:p-12 bg-cod-gray-1 grid gap-8 lg:flex lg:justify-between lg:items-center '>
      <div className='max-w-[480px]'>
        <h3 className='text-2xl mb-2 lg:text-3xl'>{position}</h3>
        <p>{description}</p>
      </div>

      <div className='grid gap-4 md:flex md:gap-8'>
        <div className='flex items-center gap-4 uppercase'>
          <span className='block px-5 py-3 rounded-md bg-cod-gray-2 border border-t-light font-roboto-mono'>
            {type}
          </span>
          <span className='block px-5 py-3 rounded-md bg-cod-gray-2 border border-t-light font-roboto-mono'>
            {location}
          </span>
        </div>

        <ButtonLink href='/contact' text='Apply Now' />
      </div>
    </div>
  );
};

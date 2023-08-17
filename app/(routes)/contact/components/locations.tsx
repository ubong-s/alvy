'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

import { locations_data } from '@/mockdata/locations_data';
import Link from 'next/link';

export const Locations = () => {
  const [activeImage, setActiveImage] = useState(1);

  const onClick = (id: number) => {
    setActiveImage(id);
  };

  return (
    <div className='flex flex-col gap-4 lg:flex-row-reverse'>
      {/* Images */}
      <div className='hidden lg:block relative flex-1 h-full'>
        {locations_data.map((location) => (
          <div
            key={location.id}
            className={`absolute top-0 left-0 w-full h-full overflow-hidden transition-opacity  ${
              location.id === activeImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={location.image}
              alt={location.name}
              width={1000}
              height={1000}
              className='h-full w-full object-cover'
            />
          </div>
        ))}
      </div>

      {/* Location Data  */}
      <div className='flex-1 flex flex-col gap-4'>
        {locations_data.map((location) => (
          <div
            key={location.id}
            onClick={() => onClick(location.id)}
            className='flex gap-8 bg-cod-gray-2 p-4 items-center'
          >
            <div className='overflow-hidden h-full lg:min-w-[100px]'>
              <Image
                src={location.image}
                alt={location.name}
                height={120}
                width={120}
                className='aspect-square h-full w-full'
              />
            </div>

            <div className='flex-1 flex items-center justify-between xl:mr-8'>
              <div>
                <h3 className='mb-4 lg:text-2xl'>{location.name}</h3>
                <div className='flex flex-col gap-2 xl:flex-row xl:gap-8 font-roboto-mono uppercase'>
                  <Link
                    href={`mailto:${location.email}`}
                    className='flex items-center gap-2 text-t-gray transition-colors hover:text-white'
                  >
                    <Mail className='h-4 w-4' /> {location.email}
                  </Link>
                  <Link
                    href={`tel:${location.phone}`}
                    className='flex items-center gap-2 text-t-gray transition-colors hover:text-white'
                  >
                    <Phone className='h-4 w-4' /> {location.phone}
                  </Link>
                </div>
              </div>

              <button
                type='button'
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(location.id);
                }}
                className='hidden lg:block'
              >
                <ArrowRight className='bg-cod-gray-2 rounded-full w-10 h-10 xl:w-12 xl:h-12 p-3 border border-t-gray' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

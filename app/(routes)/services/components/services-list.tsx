'use client';

import { services_data } from '@/mockdata/services_data';

import { ImageText } from '@/components/ui';

export const ServicesList = () => {
  return (
    <section className='grid gap-4'>
      {services_data.map((service, i) =>
        i % 2 === 0 ? (
          <ImageText key={service.id} {...service} />
        ) : (
          <ImageText key={service.id} {...service} reverseColumns />
        )
      )}
    </section>
  );
};

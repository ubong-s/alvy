import { stats_data } from '@/mockdata/stats_data';

export const AboutStats = () => {
  return (
    <section className='grid grid-cols-2 gap-8 items-center justify-center text-center py-8 lg:grid-cols-4 lg:py-16'>
      {stats_data.map(({ title, variable }) => (
        <div key={title}>
          <h3 className='text-base font-roboto-mono lg:text-xl'>{title}</h3>
          <p className='font-chillax text-[44px] lg:text-[50px] xl:text-[60px] '>
            {variable}
          </p>
        </div>
      ))}
    </section>
  );
};

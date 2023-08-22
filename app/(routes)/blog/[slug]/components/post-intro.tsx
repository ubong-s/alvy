import { ButtonLink } from '@/components/_shared';

export const PostIntro = () => {
  return (
    <section>
      {/* Heading */}
      <div className='flex flex-col gap-8 py-8 md:p-8 lg:flex-row lg:items-start lg:justify-between lg:p-12 lg:gap-12 lg:py-20 xl:gap-20  xl:py-32'>
        <h2 className='text-4xl lg:leading-[65px] lg:text-[55px] xl:text-[60px] 2xl:text-[65px]'>
          The power of influencer marketing
        </h2>

        <div className='max-w-[500px]'>
          <p className='text-t-gray text-base mb-8 md:text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium optio quas aliquam neque quam vel? Illo nemo quam ab nam
            odit molestias, tempore ad quasi accusantium dolore vitae iure
            culpa.
          </p>
          <ButtonLink href='#content' text='Read More' arrowDown />
        </div>
      </div>

      {/* Meta */}

      <div className='flex flex-col gap-4 font-roboto-mono  uppercase md:flex-row '>
        {/* Date */}
        <div className='flex items-center justify-between p-4 text-sm flex-1  bg-cod-gray-2  lg:text-base lg:p-8'>
          <p className='text-t-gray'>Date</p>
          <p>16 June 2022</p>
        </div>

        {/* Category */}
        <div className='flex items-center justify-between p-4 text-sm flex-1  bg-cod-gray-2  lg:text-base lg:p-8'>
          <p className='text-t-gray'>Category</p>
          <p>Fashion</p>
        </div>

        {/* Reading Time */}
        <div className='flex items-center justify-between p-4 text-sm flex-1  bg-cod-gray-2  lg:text-base lg:p-8'>
          <p className='text-t-gray'>Reading Time</p>
          <p>10 mins</p>
        </div>
      </div>
    </section>
  );
};

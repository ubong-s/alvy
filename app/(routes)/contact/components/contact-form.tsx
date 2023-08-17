'use client';

import Image from 'next/image';

export const ContactForm = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <div className='overflow-hidden md:flex-1'>
        <Image
          src='/images/sample-1.jpg'
          alt='name'
          width={1000}
          height={1000}
          className='object-cover md:h-full'
        />
      </div>

      <div className='bg-cod-gray-1 text-t-light md:flex-1 '>
        <div className='p-6 lg:p-12'>
          <h1 className='font-roboto-mono text-base mb-4'>Contact</h1>

          <p className='text-2xl lg:text-3xl xl:text-5xl uppercase font-chillax mb-4 lg:mb-20'>
            {"Let's"} get <br /> in touch
          </p>

          <form className='grid gap-4'>
            <input
              type='name'
              placeholder='Name'
              className='p-4 bg-transparent text-white rounded-lg border border-t-gray outline-none w-full'
            />
            <input
              type='email'
              placeholder='Email'
              className='p-4 bg-transparent text-white rounded-lg border border-t-gray outline-none w-full'
            />
            <textarea
              placeholder='Message'
              rows={6}
              className='p-4 bg-transparent text-white rounded-lg border border-t-gray outline-none w-full'
            />
            <button
              type='submit'
              className='p-4 rounded-lg bg-sundance text-cod-gray uppercase font-roboto-mono w-full'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

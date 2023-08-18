import Image from 'next/image';

export const ProductInfo = () => {
  return (
    <div className='grid gap-4 lg:grid-cols-2 '>
      {/* Images */}
      <div className='grid gap-4'>
        <div className='overflow-hidden'>
          <Image
            src='/images/noise.png'
            alt='product'
            width={1000}
            height={1000}
          />
        </div>
        <div className='overflow-hidden'>
          <Image
            src='/images/noise.png'
            alt='product'
            width={1000}
            height={1000}
          />
        </div>
        {/* Thumbnails */}
        <div className='flex gap-4 lg:hidden'>
          <div className='overflow-hidden'>
            <Image
              src='/images/noise.png'
              alt='product'
              width={80}
              height={80}
            />
          </div>
          <div className='overflow-hidden'>
            <Image
              src='/images/noise.png'
              alt='product'
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>

      <div className=' flex flex-col gap-8 bg-cod-gray-2 p-6 lg:p-12'>
        <p className='font-roboto-mono uppercase text-t-gray'>
          $ 39.00 USD <span className='line-through '>$ 59.00 USD</span>
        </p>

        <h1 className='text-2xl lg:text-3xl xl:text-5xl'>Skull T-Shirt</h1>

        <p className='text-t-gray'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et magnam,
          perspiciatis quibusdam sit quas temporibus?
        </p>

        <form className='mt-4 flex flex-col gap-4'>
          <div className='flex gap-4'>
            <input
              type='number'
              defaultValue={1}
              min={1}
              max={10}
              className='p-4 bg-mine-shaft text-white rounded-lg border border-t-gray outline-none'
            />
            {/* Sizes */}
            <div className='flex gap-4 items-center'>
              <button className='p-4 bg-mine-shaft text-white rounded-lg border border-t-gray outline-none min-w-[60px]'>
                S
              </button>
              <button className='p-4 bg-mine-shaft text-white rounded-lg border border-t-gray outline-none min-w-[60px]'>
                M
              </button>
              <button className='p-4 bg-mine-shaft text-white rounded-lg border border-t-gray outline-none min-w-[60px]'>
                L
              </button>
            </div>
          </div>

          <button className='p-5 rounded-lg bg-sundance text-cod-gray uppercase font-roboto-mono'>
            Add to cart
          </button>
        </form>

        <div>
          <p className='text-t-gray'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id
            optio facilis dolorum molestias repellendus tempora? Eum mollitia
            ratione beatae provident, minus consequatur. Nulla, rerum hic.
            Natus, exercitationem. Ipsa, similique?
          </p>

          <ul className='list-disc pl-8 pt-8 text-t-gray font-satoshi-regular flex flex-col gap-2 lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Amet consectetur adipisicing elit.</li>
            <li>Hic voluptate praesentium quibusdam</li>
            <li>Asperiores, sunt veniam nihil ea dolorem vero!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

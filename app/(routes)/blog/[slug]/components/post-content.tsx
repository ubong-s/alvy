import { Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

export const PostContent = () => {
  return (
    <section>
      {/* Image */}
      <div className='overflow-hidden h-[300px] md:h-[350px] lg:h-screen'>
        <Image
          src='/images/noise.png'
          alt='hero Image'
          width={1920}
          height={914}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content */}

      <div className='py-12 flex flex-col gap-8 max-w-[1000px] mx-auto md:py-20 md:flex-row  md:gap-12 md:items-start lg:gap-20'>
        {/* Social Share */}
        <div className='flex gap-8 md:flex-col'>
          <Facebook className='bg-cod-gray-2 rounded-full w-10 h-10 md:w-12 md:h-12 p-3 border border-t-gray' />
          <Twitter className='bg-cod-gray-2 rounded-full w-10 h-10 md:w-12 md:h-12 p-3 border border-t-gray' />
          <Instagram className='bg-cod-gray-2 rounded-full w-10 h-10 md:w-12 md:h-12 p-3 border border-t-gray' />
        </div>

        <div className='flex flex-col gap-8'>
          {/* Text Content */}
          <div className='post-content flex flex-col gap-4'>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
            <p>
              Non excepturi nemo, voluptate eius, laudantium nihil, fugiat
              maiores dolorem corporis sed ullam id quo dolore voluptates. Autem
              perferendis hic facere explicabo, quia pariatur aut obcaecati cum,
              labore eaque saepe deserunt sit.
            </p>
            <h3>Perspiciatis delectus, beatae fuga rerum</h3>
            <p>
              voluptatem excepturi doloribus unde quaerat necessitatibus, error
              similique expedita et. Iure, ratione! Voluptas officia amet
              placeat excepturi molestiae blanditiis, enim obcaecati debitis rem
              minima! Ea provident voluptatum rerum aliquam cum eveniet deleniti
              dolores laboriosam aut odio.
            </p>
            <h4>Perspiciatis delectus, beatae fuga rerum</h4>
            <p>
              voluptatem excepturi doloribus unde quaerat necessitatibus, error
              similique expedita et. Iure, ratione! Voluptas officia amet
              placeat excepturi molestiae blanditiis, enim obcaecati debitis rem
              minima! Ea provident voluptatum rerum aliquam cum eveniet deleniti
              dolores laboriosam aut odio.
            </p>
          </div>

          {/* Conclusion  & Author */}

          <div className='bg-cod-gray-2 p-6 flex flex-col gap-4 md:p-8 lg:p-12 '>
            <h3 className='font-roboto-mono'>Conclusion</h3>
            <p className='text-t-gray mb-0'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
              illo temporibus sequi dolorem perferendis pariatur alias aliquam
              dolor veritatis voluptas odio mollitia quisquam, quidem possimus
              velit itaque id vero. Fuga.
            </p>

            <div className='flex gap-4 items-center mt-2'>
              <Image
                src='/images/noise.png'
                alt='author'
                width={60}
                height={60}
                className='rounded-full'
              />

              <div className='flex flex-col gap-1 '>
                <h4 className='text-lg lg:text-xl'>Mia Johnson</h4>
                <p className='font-roboto-mono uppercase text-base lg:text-lg'>
                  Branding Expert
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

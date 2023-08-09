import Image from 'next/image';
import Link from 'next/link';

import { ButtonLink } from './button-link';
import { Badge } from './badge';

interface PostCardProps {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image?: string;
}
export const PostCard: React.FC<PostCardProps> = ({
  slug,
  title,
  excerpt,
  category,
  image,
}) => {
  return (
    <Link href={slug} className='p-4 bg-cod-gray-1 rounded-lg '>
      <div className='relative'>
        <Image
          src={'/images/noise.png'}
          alt={title}
          width={580}
          height={590}
          className='rounded-lg w-full'
        />
        <div className='absolute bottom-8 left-8'>
          <Badge text={category} />
        </div>
      </div>
      <div className='p-4 pt-8 grid gap-1  xl:h-[225px]'>
        <h3 className='capitalize lg:text-lg '>{title}</h3>
        <p className='text-base text-t-gray'>{excerpt}</p>

        <div className='mt-4 self-end'>
          <ButtonLink text='Read More' href={slug} />
        </div>
      </div>
    </Link>
  );
};

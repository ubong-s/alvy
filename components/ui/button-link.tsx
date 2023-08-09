'use client';

import Link from 'next/link';

import { ArrowDown, ArrowLink } from '../icons';

interface ButtonLinkProps {
  text: string;
  href: string;
  arrowDown?: boolean;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  text,
  href,
  arrowDown,
}) => {
  return (
    <Link
      href={href}
      className='flex items-center font-roboto-mono gap-4 uppercase transition-opacity hover:opacity-90 
       '
    >
      <span>
        {arrowDown ? (
          <span className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-t-light '>
            <ArrowDown />
          </span>
        ) : (
          <ArrowLink />
        )}
      </span>
      <span>{text}</span>
    </Link>
  );
};

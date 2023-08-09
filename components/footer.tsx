import Image from 'next/image';
import Link from 'next/link';

import { footer_links, social_links } from '@/constants';

import { Logo } from '@/components/ui';

export const Footer = () => {
  return (
    <footer className='grid gap-4 lg:grid-cols-4 xl:grid-cols-5 font-roboto-mono uppercase'>
      {/* Company Info */}
      <div className='bg-cod-gray-1 rounded-lg col-span-1 p-8 flex flex-col justify-between xl:p-12'>
        <Logo />

        <ul className='flex flex-col gap-6 mt-20'>
          {social_links.map(({ text, link }) => (
            <li key={text}>
              <Link
                href={link}
                target='_blank'
                className='flex gap-4 items-center text-t-gray transition-colors hover:text-t-light'
              >
                <span>
                  <Image
                    src={`/icons/${text}.svg`}
                    alt={text}
                    width={20}
                    height={20}
                  />
                </span>
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='grid gap-4 lg:col-span-3 xl:col-span-4'>
        {/* Footer Links */}
        <div className='rounded-lg bg-cod-gray-1 p-8 grid gap-12 grid-cols-2 lg:grid-cols-3 xl:p-12'>
          {footer_links.map(({ title, links }) => (
            <div key={title}>
              <h4 className='mb-8 text-xl text-white'>{title}</h4>

              <ul className='flex flex-col gap-6'>
                {links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className='text-t-gray transition-colors hover:text-t-light'
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className='flex flex-col gap-4 rounded-lg bg-cod-gray-1  p-8 lg:flex-row lg:justify-between xl:p-12'>
          <p className='text-base'>
            © {new Date().getFullYear()} Designed by{' '}
            <Link
              href='http://www.gola.io'
              target='_blank'
              className='opacity-50 hover:opacity-100 transition-opacity'
            >
              Pawel Gola.
            </Link>{' '}
            Developed by{' '}
            <Link
              href='https://devubong.com/'
              target='_blank'
              className='opacity-50 hover:opacity-100 transition-opacity'
            >
              Ubong Sylvester
            </Link>{' '}
            with{' '}
            <Link
              href='https://nextjs.org/'
              target='_blank'
              className='opacity-50 hover:opacity-100 transition-opacity'
            >
              Nextjs
            </Link>
          </p>
          <div className='flex gap-8'>
            <Link href='/privacy'>Privacy</Link>
            <Link href='/imprint'>Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

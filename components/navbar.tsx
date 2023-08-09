'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';

import { menu_links } from '@/constants';

import { Logo } from '@/components/ui';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((value) => !value);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header>
      <nav className='flex items-center justify-between'>
        <Logo />

        <ul
          className={`fixed top-[90px] left-4 right-4 flex flex-col gap-4 bg-cod-gray-2 p-4 rounded-lg translate-x-[100vw] transition-all opacity-0 ${
            isMenuOpen && 'translate-x-[0%] opacity-100'
          } lg:relative lg:flex-row lg:items-center lg:top-0 lg:left-0 lg:right-0 lg:p-0 lg:bg-transparent lg:translate-x-[0%] opacity-100`}
        >
          {menu_links.map((link) => (
            <li
              key={link.title}
              className='rounded-lg bg-cod-gray-1 w-full uppercase font-roboto-mono hover:bg-sundance hover:text-cod-gray last:bg-sundance last:text-cod-gray hover:last:text-t-light hover:last:bg-cod-gray-1 transition-colors'
            >
              <Link
                href={link.href}
                onClick={closeMenu}
                className='inline-block py-4 px-5 w-full'
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`group p-4 bg-cod-gray-1 flex flex-col  w-[65px] h-[55px] rounded-lg transition-colors hover:bg-sundance items-center ${
            isMenuOpen ? 'justify-center' : 'justify-between'
          } lg:hidden`}
          onClick={toggleMenu}
          title='Mobile Menu Toggle'
        >
          <div className={`menu__bar ${isMenuOpen && 'rotate-45'}`}></div>
          <div className={`menu__bar ${isMenuOpen && 'w-[0] opacity-0'}`}></div>
          <div className={`menu__bar ${isMenuOpen && '-rotate-45'}`}></div>
        </button>
      </nav>
    </header>
  );
};

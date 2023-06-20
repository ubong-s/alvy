"use client";

import Link from "next/link";

interface MenuItemProps {
  link: {
    title: string;
    href: string;
  };
  onClick: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ link, onClick }) => {
  return (
    <li
      key={link.title}
      className="rounded-lg bg-cod-gray-1 w-full uppercase font-roboto-mono hover:bg-sundance hover:text-cod-gray last:bg-sundance last:text-cod-gray hover:last:text-t-light hover:last:bg-cod-gray-1 transition-colors"
    >
      <Link
        href={link.href}
        onClick={onClick}
        className="inline-block py-4 px-5 w-full"
      >
        {link.title}
      </Link>
    </li>
  );
};

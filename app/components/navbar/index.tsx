"use client";

import { useCallback, useState } from "react";

import { menu_links } from "@/constants";
import { Logo } from "./Logo";
import { MenuItem } from "./Menuitem";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((value) => !value);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="flex items-center justify-between">
      <Logo />

      <ul
        className={`fixed top-[90px] left-4 right-4 flex flex-col gap-4 bg-cod-gray-2 p-4 rounded-lg translate-x-[100vw] transition-all opacity-0 ${
          isMenuOpen && "translate-x-[0%] opacity-100"
        } lg:relative lg:flex-row lg:items-center lg:top-0 lg:left-0 lg:right-0 lg:p-0 lg:bg-transparent lg:translate-x-[0%] opacity-100`}
      >
        {menu_links.map((link) => (
          <MenuItem key={link.title} link={link} onClick={closeMenu} />
        ))}
      </ul>

      <button
        className={`group p-4 bg-cod-gray-1 flex flex-col  w-[65px] h-[55px] rounded-lg transition-colors hover:bg-sundance items-center ${
          isMenuOpen ? "justify-center" : "justify-between"
        } lg:hidden`}
        onClick={toggleMenu}
      >
        <div className={`menu__bar ${isMenuOpen && "rotate-45"}`}></div>
        <div className={`menu__bar ${isMenuOpen && "w-[0] opacity-0"}`}></div>
        <div className={`menu__bar ${isMenuOpen && "-rotate-45"}`}></div>
      </button>
    </nav>
  );
};

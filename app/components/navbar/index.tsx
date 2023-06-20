import { menu_links } from "@/constants";
import { Logo } from "./Logo";
import { link } from "fs";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <Logo />

      <ul>
        {menu_links.map((link) => (
          <li key={link.title}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

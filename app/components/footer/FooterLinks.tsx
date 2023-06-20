import { footer_links } from "@/constants";
import Link from "next/link";

export const FooterLinks = () => {
  return (
    <div className="rounded-lg bg-cod-gray-1 p-8 grid gap-12 grid-cols-2 lg:grid-cols-3 xl:p-12">
      {footer_links.map(({ title, links }) => (
        <div key={title}>
          <h4 className="mb-8 text-xl text-white">{title}</h4>

          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-t-gray transition-colors hover:text-t-light"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

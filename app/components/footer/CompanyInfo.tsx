"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "../_shared";
import { social_links } from "@/constants";

export const CompanyInfo = () => {
  return (
    <div className="bg-cod-gray-1 rounded-lg col-span-1 p-8 flex flex-col justify-between xl:p-12">
      <Logo />

      <ul className="flex flex-col gap-6 mt-20">
        {social_links.map(({ text, link }) => (
          <li key={text}>
            <Link
              href={link}
              target="_blank"
              className="flex gap-4 items-center text-t-gray transition-colors hover:text-t-light"
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
  );
};

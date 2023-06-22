"use client";

import { ButtonLink } from "@/app/components/_shared/ButtonLink";
import Image from "next/image";

export const AboutIntro = () => {
  return (
    <section className="flex flex-col gap-4 md:flex-row ">
      <div className="overflow-hidden md:flex-1">
        <Image
          src="/images/noise.png"
          alt="name"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="bg-cod-gray-1 text-t-light md:flex-1 ">
        <div className="grid p-4 lg:p-12 md:h-full">
          <h2 className="font-roboto-mono text-base mb-8">Studio</h2>

          <div className="self-end">
            <p className="text-2xl lg:text-3xl xl:text-5xl 2xl:text-7xl uppercase font-chillax">
              How we help fashion brands stand out
            </p>
            <p className="text-t-gray my-8">
              We help fashion brands stand out with our expertise in branding,
              marketing, and creative solutions that captivate audiences and
              differentiate brands.
            </p>
            <ButtonLink text="Our Story" href="#story" arrowDown />
          </div>
        </div>
      </div>
    </section>
  );
};

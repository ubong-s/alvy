import { social_links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLink } from "../icons";

export const Socials = () => {
  return (
    <section className="overflow-x-hidden">
      <h2 className="py-8 pb-10 flex items-center just gap-8 flex-nowrap font-roboto-mono w ">
        <span>·</span>
        <span className="whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
        <span>·</span>
        <span className="whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
        <span>·</span>
        <span className="whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
        <span>·</span>
        <span className="whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
        <span>·</span>
        <span className="whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
        <span>·</span>
        <span className="whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
        <span>·</span>
        <span className="whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
        <span>·</span>
        <span className="whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
      </h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {social_links.map(({ text, link }) => (
          <div
            key={text}
            className="grid items-start p-4 md:p-6 lg:p-8 rounded-lg bg-cod-gray-1 xl:h-[335px]"
          >
            <div className="flex items-center justify-between mb-12">
              <Image
                src={`/icons/${text}.svg`}
                alt={text}
                width={30}
                height={30}
              />
              <Link href={link} title={text}>
                <ArrowLink />
              </Link>
            </div>
            <div className="xl:self-end">
              <h3 className="mb-2">{text}</h3>
              <p className="text-base text-t-gray">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis, voluptate!
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

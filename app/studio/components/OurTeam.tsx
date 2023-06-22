"use client";

import { ButtonLink } from "@/app/components/_shared/ButtonLink";
import { team } from "@/mockdata/team";
import Image from "next/image";
import Link from "next/link";

export const OurTeam = () => {
  return (
    <section>
      <div className="flex  gap-8 py-8 md:p-8 items-center justify-between lg:p-12">
        <h2 className="text-2xl lg:text-3xl xl:text-5xl">Our Team</h2>
        <ButtonLink href="/jobs" text="Find Job" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {team.map(({ _id, expertise, image, name, socials }) => (
          <div key={_id} className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/noise.png"
              alt={name}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />

            <div className="absolute left-4 right-4 top-8 flex gap-4 justify-end items-center">
              {socials.map(({ _key, name: sName, url }) => (
                <Link
                  href={url}
                  key={_key}
                  className="flex  items-center justify-center w-[40px] h-[40px] border-[0.25px] border-t-gray rounded-full bg-[rgba(255,255,255,.05)] backdrop-blur-[1rem] transition-all hover:border-t-light "
                >
                  <Image
                    src={`/icons/${sName}.svg`}
                    alt={`${name} ${sName}`}
                    width={18}
                    height={18}
                  />
                </Link>
              ))}
            </div>

            <div className="absolute left-4 right-4 bottom-4 rounded-lg bg-[rgba(255,255,255,.05)] backdrop-blur-[1rem] p-4 flex items-center justify-between border border-t-gray lg:text-xl ">
              <h3 className="">{name}</h3>
              <p className="font-roboto-mono text-base uppercase">
                {expertise}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

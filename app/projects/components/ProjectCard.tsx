"use client";

import { ButtonLink } from "@/app/components/_shared/ButtonLink";
import Image from "next/image";

interface ProjectCardProps {
  category: string;
  name: string;
  first_image: string;
  second_image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  name,
  first_image,
  second_image,
}) => {
  return (
    <div className="flex gap-4 even:flex-row-reverse">
      <div className="bg-cod-gray-1 text-t-light uppercase flex-1 ">
        <div className="grid p-4 lg:p-12 h-full">
          <div>
            <p className="font-roboto-mono mb-2 text-base">{category}</p>
            <h2 className="text-2xl lg:text-3xl xl:text-5xl">{name}</h2>
          </div>
          <div className="self-end">
            <ButtonLink text="Discover" href="#" />
          </div>
        </div>
      </div>

      <div className="overflow-hidden flex-1">
        <Image src={first_image} alt="name" width={620} height={600} />
      </div>

      <div className="overflow-hidden hidden flex-1 lg:block">
        <Image src={second_image} alt="name" width={620} height={600} />
      </div>
    </div>
  );
};

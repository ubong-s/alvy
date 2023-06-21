"use client";

import { ButtonLink } from "@/app/components/_shared/ButtonLink";

interface JobProps {
  position: string;
  location: string;
  description: string;
  type: string;
}

export const Job: React.FC<JobProps> = ({
  position,
  location,
  description,
  type,
}) => {
  return (
    // lg:flex lg:justify-between lg:items-center lg:gap-8
    <div className="p-4 lg:p-12 bg-cod-gray-1 grid gap-8 lg:flex lg:justify-between lg:items-center ">
      <div className="max-w-[480px]">
        <h3 className="text-2xl mb-2">{position}</h3>
        <p>{description}</p>
      </div>

      <div className="lg:flex lg:gap-8">
        <div className="flex items-center gap-4 uppercase">
          <span className="block px-5 py-3 rounded-md bg-cod-gray-2 border border-t-light font-roboto-mono">
            {type}
          </span>
          <span className="block px-5 py-3 rounded-md bg-cod-gray-2 border border-t-light font-roboto-mono">
            {location}
          </span>
        </div>

        <ButtonLink href="/contact" text="Apply Now" />
      </div>
    </div>
  );
};

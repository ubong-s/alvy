"use client";

import { ButtonLink } from "./ButtonLink";

interface SectionHeaderProps {
  title: string;
  link?: {
    href: string;
    text: string;
  };
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  link,
}) => {
  return (
    <div className="flex  gap-8 py-8 md:p-8 items-center justify-between lg:p-12">
      <h2 className="text-2xl lg:text-3xl xl:text-5xl">{title}</h2>
      {link && <ButtonLink href={link.href} text={link.text} />}
    </div>
  );
};

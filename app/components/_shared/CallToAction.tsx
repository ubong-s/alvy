"use client";

import Link from "next/link";
import { ColoredButtonLink } from "./ColoredButtonLink";

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title = `Let's make your fashion brand shine`,
  subtitle = "Contact",
  linkText = "Get in touch",
  linkHref = "/contact",
}) => {
  return (
    <section className="p-8 grid gap-6 bg-sundance rounded-lg my-4 lg:grid-cols-4 lg:gap-20 lg:items-end xl:gap-36 xl:p-12">
      <div className="text-cod-gray lg:col-span-3">
        <p className="font-roboto-mono uppercase mb-4">{subtitle}</p>
        <h2 className="text-5xl lg:text-[60px] xl:text-[70px] 2xl:text-[80px] max-w-[1000px]">
          {title}
        </h2>
      </div>

      <ColoredButtonLink variant="dark" text={linkText} href={linkHref} />
    </section>
  );
};

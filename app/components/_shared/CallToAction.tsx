"use client";

import Link from "next/link";

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
    <section className="p-8 xl:p-12 bg-sundance">
      <div>
        <p>{subtitle}</p>
        <h2>{title}</h2>
      </div>

      <Link href={linkHref}>{linkText}</Link>
    </section>
  );
};

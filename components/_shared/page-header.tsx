"use client";

import Link from "next/link";

interface PageHeaderProps {
  smallTitle?: string;
  bigTitle: string;
  description?: string;
  readMore?: string;
  gutter?: "large" | "small";
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  smallTitle,
  bigTitle,
  description,
  readMore,
  gutter,
}) => {
  return (
    <section className="py-16 lg:p-24 grid gap-8 lg:grid-cols-3 lg:gap-16 lg:items-end xl:gap-30">
      <div
        className={`lg:col-span-2  ${gutter !== "small" && "max-w-[800px]"}`}
      >
        {smallTitle ? (
          <div>
            <h1 className="font-roboto-mono mb-4">{smallTitle}</h1>
            <p className="font-chillax text-5xl lg:text-[55px]  xl:text-[70px] 2xl:text-[80px] max-w-[1000px] uppercase">
              {bigTitle}
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-5xl lg:text-[60px] xl:text-[70px] 2xl:text-[80px] max-w-[1000px]">
              {bigTitle}
            </h1>
          </div>
        )}
      </div>

      <div className="lg:mb-2">
        <p>{description}</p>
        {readMore && <Link href={readMore}>Read More</Link>}
      </div>
    </section>
  );
};

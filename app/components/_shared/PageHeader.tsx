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
    <section className="py-16 lg:p-24 grid gap-8 lg:grid-cols-3 lg:gap-30 lg:items-end">
      <div className={`lg:col-span-2 ${gutter !== "small" && "max-w-[650px]"}`}>
        {smallTitle ? (
          <div>
            <h2 className="font-roboto-mono mb-4">{smallTitle}</h2>
            <p className="font-chillax text-5xl lg:text-[60px] xl:text-[80px] max-w-[1000px] uppercase">
              {bigTitle}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-5xl lg:text-[60px] xl:text-[80px] max-w-[1000px]">
              {bigTitle}
            </h2>
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

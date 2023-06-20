import Link from "next/link";

interface PageHeaderProps {
  smallTitle?: string;
  bigTitle: string;
  description?: string;
  readMore?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  smallTitle,
  bigTitle,
  description,
  readMore,
}) => {
  return (
    <section>
      {smallTitle ? (
        <div>
          <h2>{smallTitle}</h2>
          <p>{bigTitle}</p>
        </div>
      ) : (
        <div>
          <h2>{bigTitle}</h2>
        </div>
      )}

      <div>
        <p>{description}</p>
        {readMore && <Link href={readMore}>Read More</Link>}
      </div>
    </section>
  );
};

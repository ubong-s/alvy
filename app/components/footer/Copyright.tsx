import Link from "next/link";

export const Copyright = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-cod-gray-1  p-8 lg:flex-row lg:justify-between xl:p-12">
      <p>
        © {new Date().getFullYear()} Designed by{" "}
        <Link
          href="http://www.gola.io"
          target="_blank"
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          Pawel Gola.
        </Link>{" "}
        Developed by{" "}
        <Link
          href="https://devubong.com/"
          target="_blank"
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          Ubong Sylvester
        </Link>{" "}
        with{" "}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          Nextjs
        </Link>
      </p>
      <div className="flex gap-8">
        <Link href="/privacy">Privacy</Link>
        <Link href="/imprint">Imprint</Link>
      </div>
    </div>
  );
};

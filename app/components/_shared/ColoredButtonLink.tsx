"use client";

import Link from "next/link";

interface ColoredButtonLinkProps {
  variant: "dark" | "yellow";
  text: string;
  href: string;
}

export const ColoredButtonLink: React.FC<ColoredButtonLinkProps> = ({
  text,
  href,
  variant,
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center font-roboto-mono gap-4 p-4 rounded-lg uppercase ${
        variant === "dark"
          ? "bg-cod-gray text-t-light"
          : "bg-sundance text-cod-gray"
      }`}
    >
      <span>{text}</span>
      {variant === "dark" && (
        <span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.92179 0.5V7.8125C9.92179 7.92439 9.87734 8.03169 9.79822 8.11081C9.7191 8.18993 9.6118 8.23438 9.49991 8.23438C9.38802 8.23438 9.28072 8.18993 9.2016 8.11081C9.12248 8.03169 9.07804 7.92439 9.07804 7.8125V1.51953L0.795223 9.79531C0.716901 9.87363 0.610674 9.91763 0.49991 9.91763C0.389147 9.91763 0.28292 9.87363 0.204598 9.79531C0.126276 9.71699 0.0822754 9.61076 0.0822754 9.5C0.0822754 9.38924 0.126276 9.28301 0.204598 9.20469L8.48038 0.921875H2.18741C2.07552 0.921875 1.96822 0.877427 1.8891 0.79831C1.80998 0.719194 1.76554 0.611888 1.76554 0.5C1.76554 0.388112 1.80998 0.280806 1.8891 0.201689C1.96822 0.122572 2.07552 0.078125 2.18741 0.078125H9.49991C9.6118 0.078125 9.7191 0.122572 9.79822 0.201689C9.87734 0.280806 9.92179 0.388112 9.92179 0.5Z"
              fill="#FFFEF6"
            />
          </svg>
        </span>
      )}
    </Link>
  );
};

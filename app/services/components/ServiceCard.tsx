import { ButtonLink } from "@/app/components/_shared/ButtonLink";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  image: string;
  descriptionOne: string;
  descriptionTwo: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  image,
  descriptionOne,
  descriptionTwo,
}) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:even:flex-row-reverse">
      <div className="overflow-hidden flex-1">
        <Image
          src={image}
          alt="name"
          width={960}
          height={920}
          className="object-cover md:h-full"
        />
      </div>

      <div className="bg-cod-gray-1 text-t-light flex-1 ">
        <div className="grid p-4 lg:p-12 h-full">
          <h2 className="font-roboto-mono text-base mb-12">{title}</h2>

          <div className="self-end">
            <p className="text-2xl lg:text-3xl xl:text-5xl uppercase font-chillax mb-4">
              {subtitle}
            </p>
            <div className="grid gap-4 xl:grid-cols-2 xl:gap-8 text-t-gray mb-8">
              <p>{descriptionOne}</p>
              <p>{descriptionTwo}</p>
            </div>
            <ButtonLink text="Get In Touch" href="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

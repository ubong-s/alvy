import Image from "next/image";
import { projects } from "@/mockdata/projects";
import { Badge, SectionHeader } from "../_shared";
import { ButtonLink } from "../_shared/ButtonLink";

export const SelectedBrands = () => {
  return (
    <section>
      <SectionHeader
        title="Selected Brands"
        link={{ href: "/projects", text: "See All" }}
      />

      <div className="grid gap-4">
        {projects.map(({ id, first_image, name, category }) => (
          <div key={id} className="overflow-hidden rounded-lg relative">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] z-[1]"></div>
              <Image
                src={first_image}
                alt={name}
                width={1880}
                height={930}
                className="w-full lg:max-h-screen object-cover"
              />
            </div>

            <div className="absolute left-0 top-0 w-full h-full p-4 md:p-8 lg:p-16 xl:p-[90px] flex flex-col justify-between z-[2]">
              <Image
                src="/icons/behance.svg"
                alt={name}
                width={60}
                height={60}
              />

              <div className="flex items-end justify-between">
                <div className="grid gap-4">
                  <h3 className="text-5xl lg:text-[60px] xl:text-[70px] 2xl:text-[80px]">
                    {name}
                  </h3>
                  <ButtonLink text="Discover Project" href="#" />
                </div>
                <Badge text={category} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

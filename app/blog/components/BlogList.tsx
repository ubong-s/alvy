import { ButtonLink } from "@/app/components/_shared/ButtonLink";
import { posts } from "@/mockdata/posts";
import Image from "next/image";
import Link from "next/link";

export const BlogList = () => {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          href={post.slug}
          key={post.slug}
          className="p-4 bg-cod-gray-1 rounded-lg "
        >
          <div className="relative">
            <Image
              src={"/images/noise.png"}
              alt={post.title}
              width={580}
              height={590}
              className="rounded-lg w-full"
            />
            <span className="absolute bottom-8 left-8 border border-t-gray rounded-[5px] bg-[rgba(255,255,255,.05)] backdrop-blur-[0.25rem] p-2 uppercase font-roboto-mono text-sm">
              {post.category}
            </span>
          </div>
          <div className="p-4 pt-8 grid gap-1  md:h-[225px]">
            <h3 className="capitalize lg:text-lg ">{post.title}</h3>
            <p className="text-base text-t-gray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              sint atque saepe?
            </p>

            <div className="mt-1 self-end">
              <ButtonLink text="Read More" href={post.slug} />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

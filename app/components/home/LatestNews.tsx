"use client";

import { PostList, SectionHeader } from "../_shared";
import { posts } from "@/mockdata/posts";

export const LatestNews = () => {
  return (
    <section>
      <SectionHeader
        title="latest news"
        link={{ href: "/blog", text: "See All" }}
      />
      <PostList posts={posts.slice(0, 3)} />
    </section>
  );
};

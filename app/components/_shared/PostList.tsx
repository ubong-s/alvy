"use client";

import { PostCard } from "@/app/components";
import { Post } from "@/types";

interface PostListProps {
  posts?: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts = [] }) => {
  if (!posts) {
    return null;
  }

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts && posts.map((post) => <PostCard key={post.slug} {...post} />)}
    </section>
  );
};

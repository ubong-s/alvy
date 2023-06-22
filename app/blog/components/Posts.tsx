import { PostCard } from "@/app/components";
import { posts } from "@/mockdata/posts";

export const Posts = () => {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </section>
  );
};

'use client';

import { Post } from '@/types';

import { PostCard } from './post-card';

interface PostListProps {
  posts?: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts = [] }) => {
  return (
    <section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </section>
  );
};

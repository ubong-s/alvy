'use client';

import { posts_data } from '@/mockdata/posts_data';

import { PostList, SectionHeader } from '@/components/_shared';

export const RelatedPosts = () => {
  return (
    <section>
      <SectionHeader
        title='Related news'
        link={{ href: '/blog', text: 'See All' }}
      />
      {posts_data && <PostList posts={posts_data.slice(0, 3)} />}
    </section>
  );
};

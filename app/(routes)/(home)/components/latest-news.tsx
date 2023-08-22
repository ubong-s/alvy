'use client';

import { posts_data } from '@/mockdata/posts_data';

import { PostList, SectionHeader } from '@/components/_shared';

export const LatestNews = () => {
  return (
    <section>
      <SectionHeader
        title='latest news'
        link={{ href: '/blog', text: 'See All' }}
      />
      {posts_data && <PostList posts={posts_data.slice(0, 3)} />}
    </section>
  );
};

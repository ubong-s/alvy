import { posts_data } from '@/mockdata/posts_data';

import { CallToAction, PostList } from '@/components/_shared';
import { FeaturedPost } from './components/featured-post';

export default function Blog() {
  return (
    <div className='py-4 grid gap-4'>
      <FeaturedPost
        image='/images/noise.png'
        category='branding'
        title='The power of influencer marketing'
        excerpt="At our agency, we firmly believe in putting our clients' success first. We are dedicated to understanding their unique goals, challenges, and vision, and we tailor our services to meet their specific needs. Our collaborative approach ensures that our clients receive personalized attention, exceptional service, and measurable results, fostering long-term partnerships built on trust and mutual success."
        readMore='#'
      />
      <PostList posts={posts_data} />
      <CallToAction />
    </div>
  );
}

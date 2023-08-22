import { SubscriptionForm } from '@/components/_shared';
import { PostIntro } from './components/post-intro';
import { PostContent } from './components/post-content';
import { RelatedPosts } from './components/related-posts';

const SinglePostPage = () => {
  return (
    <div className='grid gap-4 py-4'>
      <PostIntro />
      <PostContent />
      <RelatedPosts />
      <SubscriptionForm />
    </div>
  );
};

export default SinglePostPage;

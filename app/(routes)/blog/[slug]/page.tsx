import { PostList, SubscriptionForm } from '@/components/ui';
import { PostIntro } from './components/post-intro';
import { PostContent } from './components/post-content';

const SinglePostPage = () => {
  return (
    <div className='grid gap-4 py-4'>
      <PostIntro />
      <PostContent />
      <PostList />
      <SubscriptionForm />
    </div>
  );
};

export default SinglePostPage;

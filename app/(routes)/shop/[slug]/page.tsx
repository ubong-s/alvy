import { CallToAction } from '@/components/_shared';
import { ProductInfo } from './components/product-info';
import { FAQ } from './components/faq';

const SingleProductPage = () => {
  return (
    <div className='grid gap-4 py-4'>
      <ProductInfo />
      <FAQ />
      <CallToAction />
    </div>
  );
};

export default SingleProductPage;

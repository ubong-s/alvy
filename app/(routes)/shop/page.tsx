import { CallToAction, PageHeader } from '@/components/ui';
import { ProductList } from './components/product-list';

export default function Shop() {
  return (
    <div className='py-4 grid gap-4'>
      <PageHeader bigTitle='Shop' />
      <ProductList />
      <CallToAction />
    </div>
  );
}

import { CallToAction, PageHeader } from '@/components/_shared';
import { ServicesList } from './components/services-list';

export default function Services() {
  return (
    <div className='py-4 grid gap-4'>
      <PageHeader
        smallTitle='services'
        bigTitle='Tailored Brand Solutions'
        description='Fromconcept to execution, we provide the complete package for your fashion brand'
      />
      <ServicesList />
      <CallToAction />
    </div>
  );
}

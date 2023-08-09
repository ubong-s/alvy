import { CallToAction, PageHeader } from '@/components/ui';
import { JobList } from './components/job-list';

export default function Jobs() {
  return (
    <div className='py-4 grid gap-4'>
      <PageHeader smallTitle='jobs' bigTitle='Shape the future of fashion' />
      <JobList />
      <CallToAction />
    </div>
  );
}

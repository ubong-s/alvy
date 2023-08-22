import { CallToAction, PageHeader } from '@/components/_shared';
import { ProjectsList } from './components/projects-list';

export default function Project() {
  return (
    <div className='py-4 grid gap-4'>
      <PageHeader
        smallTitle='projects'
        bigTitle='From Concept to Creation'
        description='Examining our track record of developing successful and impactful fashion brands.'
      />
      <ProjectsList />
      <CallToAction />
    </div>
  );
}

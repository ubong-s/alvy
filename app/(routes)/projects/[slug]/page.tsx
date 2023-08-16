import { projects_data } from '@/mockdata/projects_data';
import { ProjectHero } from './components/project-hero';
import { ProjectDetails } from './components/project-details';

const SingleProjectPage = () => {
  return (
    <div className='grid gap-4 py-4'>
      <ProjectHero
        image={projects_data[0].first_image}
        name={projects_data[0].name}
        excerpt={projects_data[0].excerpt}
      />
      <ProjectDetails data={projects_data[0].details} />
    </div>
  );
};

export default SingleProjectPage;

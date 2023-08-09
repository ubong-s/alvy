'use client';

import { projects_data } from '@/mockdata/projects_data';

import { ProjectCard } from './project-card';

export const ProjectsList = () => {
  return (
    <section className='grid gap-4'>
      {projects_data.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
};

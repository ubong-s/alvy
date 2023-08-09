'use client';

import { jobs_data } from '@/mockdata/jobs_data';

import { JobCard } from './job-card';

export const JobList = () => {
  return (
    <section className='grid gap-4'>
      {jobs_data.map((job) => (
        <JobCard key={job._id} {...job} />
      ))}
    </section>
  );
};

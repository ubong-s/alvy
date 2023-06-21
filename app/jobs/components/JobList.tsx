"use client";

import { jobs } from "@/mockdata/jobs";
import { Job } from "./Job";

export const JobList = () => {
  return (
    <section className="grid gap-4">
      {jobs.map((job) => (
        <Job key={job._id} {...job} />
      ))}
    </section>
  );
};

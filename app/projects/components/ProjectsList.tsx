import { projects } from "@/mockdata/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsList = () => {
  return (
    <section className="grid gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
};

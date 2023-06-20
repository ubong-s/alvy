import React from "react";
import { CallToAction, PageHeader } from "../components";
import { ProjectsList } from "./components";

export default function Project() {
  return (
    <>
      <PageHeader
        smallTitle="projects"
        bigTitle="From Concept to Creation"
        description="Examining our track record of developing successful and impactful fashion brands."
      />
      <ProjectsList />
      <CallToAction />
    </>
  );
}

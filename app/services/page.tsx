import React from "react";
import { CallToAction, PageHeader } from "../components";
import { ServicesList } from "./components";

export default function Services() {
  return (
    <>
      <PageHeader
        smallTitle="services"
        bigTitle="Tailored Brand Solutions"
        description="Fromconcept to execution, we provide the complete package for your fashion brand"
      />
      <ServicesList />
      <CallToAction />
    </>
  );
}

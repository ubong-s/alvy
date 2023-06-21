"use client";

import { services } from "@/mockdata/services";
import { ServiceCard } from "./ServiceCard";

export const ServicesList = () => {
  return (
    <section className="grid gap-4">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  );
};

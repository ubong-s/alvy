"use client";

import { services } from "@/mockdata/services";
import { ImageText } from "@/app/components";

export const ServicesList = () => {
  return (
    <section className="grid gap-4">
      {services.map((service, i) =>
        i % 2 === 0 ? (
          <ImageText key={service.id} {...service} />
        ) : (
          <ImageText key={service.id} {...service} reverseColumns />
        )
      )}
    </section>
  );
};

import React from "react";
import { CallToAction, PageHeader } from "../components";
import { ProductList } from "./components";

export default function Shop() {
  return (
    <div className="py-4 grid gap-4">
      <PageHeader bigTitle="Shop" />
      <ProductList />
      <CallToAction />
    </div>
  );
}

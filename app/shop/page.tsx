import React from "react";
import { CallToAction, PageHeader } from "../components";
import { ProductList } from "./components";

export default function Shop() {
  return (
    <>
      <PageHeader bigTitle="Shop" />
      <ProductList />
      <CallToAction />
    </>
  );
}

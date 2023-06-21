import { CallToAction, PageHeader } from "../components";
import { JobList } from "./components";

export default function Jobs() {
  return (
    <>
      <PageHeader smallTitle="jobs" bigTitle="Shape the future of fashion" />
      <JobList />
      <CallToAction />
    </>
  );
}

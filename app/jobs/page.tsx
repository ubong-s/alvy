import { CallToAction, PageHeader } from "../components";
import { JobList } from "./components";

export default function Jobs() {
  return (
    <div className="py-4 grid gap-4">
      <PageHeader smallTitle="jobs" bigTitle="Shape the future of fashion" />
      <JobList />
      <CallToAction />
    </div>
  );
}

import { CallToAction, LatestNews, Socials } from "./components";

export default function Home() {
  return (
    <div className="grid gap-4 py-4">
      <CallToAction />
      <LatestNews />
      <Socials />
    </div>
  );
}

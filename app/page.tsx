import {
  CallToAction,
  LatestNews,
  Socials,
  SubscriptionForm,
  SelectedBrands,
} from "./components";

export default function Home() {
  return (
    <div className="grid gap-4 py-4">
      <SelectedBrands />
      <CallToAction />
      <LatestNews />
      <Socials />
      <SubscriptionForm />
    </div>
  );
}

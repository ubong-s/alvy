import {
  CallToAction,
  LatestNews,
  Socials,
  SubscriptionForm,
  SelectedBrands,
  ImageText,
  Hero,
} from "./components";

export default function Home() {
  return (
    <div className="grid gap-4 py-4">
      <Hero />
      <ImageText
        image="/images/noise.png"
        title="About"
        subtitle="Bringing fashion brands to life"
        description="At our agency, we are passionate about bringing fashion brands to life. With a combination of creative vision, strategic thinking, and industry expertise. We help our clients transform their ideas into vibrant realities that resonate with their target audience, leaving a lasting impact in the fashion industry."
      />
      <SelectedBrands />
      <CallToAction />
      <LatestNews />
      <Socials />
      <SubscriptionForm />
    </div>
  );
}

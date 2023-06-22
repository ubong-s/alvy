import { CallToAction, ImageText } from "../components";
import { AboutIntro, AboutStats, OurTeam, StudioCTA } from "./components";

export default function About() {
  return (
    <div className="py-4 grid gap-4">
      <AboutIntro />
      <AboutStats />
      <ImageText
        reverseColumns
        title="Our Philosophy"
        subtitle="Putting our Clients' success first"
        image="/images/noise.png"
        description="At our agency, we firmly believe in putting our clients' success first. We are dedicated to understanding their unique goals, challenges, and vision, and we tailor our services to meet their specific needs. Our collaborative approach ensures that our clients receive personalized attention, exceptional service, and measurable results, fostering long-term partnerships built on trust and mutual success."
      />
      <ImageText
        title="Our vision"
        subtitle="Setting the standard for excellence"
        image="/images/noise.png"
        description="We are committed to setting the standard for excellence in everything we do. With a relentless pursuit of quality, innovation, and results, we strive to exceed expectations and deliver exceptional outcomes for our clients. Our team of industry experts, combined with our unwavering dedication to excellence, positions us as a leader in the fashion agency landscape."
      />
      <OurTeam />
      <StudioCTA />
      <CallToAction />
    </div>
  );
}

import { HeroSection } from "@/components/hero-section";
import { LatestSummaries } from "@/components/latest-summaries";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { MissionSection } from "@/components/mission-section";
import { UpcomingEventsSection } from "@/components/upcoming-events-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <MissionSection />
      <LatestSummaries />
      <UpcomingEventsSection />
    </main>
  );
}

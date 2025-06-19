import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { LatestSummaries } from "@/components/latest-summaries"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <LatestSummaries />
    </main>
  )
}

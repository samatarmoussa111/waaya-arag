import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Changer sa vie, <span className="text-primary">un livre à la fois</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Des résumés de livres puissants sur le développement personnel, la productivité, la discipline, et la
              réussite.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/resumes">Découvrir les résumés</Link>
            </Button>
          </div>
          <div className="animate-slide-up">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center"
                alt="Collection de livres inspirants sur le développement personnel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

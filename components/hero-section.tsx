import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Dot Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Un livre. Une voix. <br />
              <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Une transformation.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Le club de lecture d&apos;APIED rassemble des lectrices et
              lecteurs passionnés autour d&apos;un objectif : transmettre des
              idées qui changent la société, un livre à la fois.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/resumes">Participer au prochain événement</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <Link href="/#about">Découvrir les résumés</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                10+
              </div>
              <div className="text-muted-foreground">Résumés disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                5 min
              </div>
              <div className="text-muted-foreground">Lecture moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-muted-foreground">Gratuit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

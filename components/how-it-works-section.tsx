import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function HowItWorksSection() {
  const steps = [
    {
      icon: "📚",
      title: "Un participant choisit un livre inspirant",
      description:
        "Chaque membre sélectionne un ouvrage qui l'a marqué dans les domaines du développement personnel, de la productivité ou de la réussite.",
    },
    {
      icon: "✍️",
      title: "Il en prépare un résumé clair et percutant",
      description:
        "Le participant extrait les idées clés, les concepts essentiels et les conseils pratiques pour créer un résumé accessible à tous.",
    },
    {
      icon: "🎙️",
      title: "Il le présente lors d'un événement ouvert à tous",
      description:
        "Lors de nos rencontres, chaque résumé est partagé avec la communauté dans une atmosphère conviviale et enrichissante.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            Notre méthode
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comment ça fonctionne ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un processus simple et efficace pour partager la connaissance et
            grandir ensemble
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-slide-up">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-4 z-0" />
              )}

              <div className="relative bg-card border rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 z-10">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à découvrir nos résumés ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Explorez notre collection de résumés soigneusement préparés par
              notre communauté passionnée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/resumes">Voir les résumés</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

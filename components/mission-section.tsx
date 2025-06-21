import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Heart } from "lucide-react";

export function MissionSection() {
  const objectives = [
    {
      icon: BookOpen,
      title: "Promouvoir la lecture et la pensée critique",
      description:
        "Développer l'esprit d'analyse et la capacité de réflexion à travers la découverte d'ouvrages inspirants et transformateurs.",
    },
    {
      icon: Users,
      title: "Rassembler les jeunes autour de messages puissants",
      description:
        "Créer des moments de partage où les idées fortes et les leçons de vie se transmettent dans un esprit de bienveillance.",
    },
    {
      icon: Heart,
      title: "Créer une communauté engagée et positive",
      description:
        "Bâtir un réseau de jeunes motivés, unis par la volonté d'apprendre, de grandir et de contribuer positivement à la société.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            Notre mission
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pourquoi on fait <span className="text-primary">ça</span> ?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              À Djibouti, la jeunesse a besoin de repères, de modèles, de
              savoir.
            </p>
            <p className="text-lg text-foreground font-medium">
              Le club de lecture d&apos;APIED vise à :
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          {objectives.map((objective, index) => (
            <div key={index} className="group">
              <div className="bg-card border rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <objective.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground leading-tight">
                  {objective.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact statement */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">Notre impact</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Chaque livre partagé, chaque idée transmise, chaque jeune inspiré
              contribue à bâtir un avenir meilleur pour Djibouti.
              <br />
              <br />
              <strong className="text-foreground">
                Ensemble, nous semons les graines du changement.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

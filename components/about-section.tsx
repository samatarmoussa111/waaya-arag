import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const milestones = [
    {
      year: "Enfance",
      location: "Djibouti",
      title: "Les débuts difficiles",
      description: "Né dans un quartier pauvre, école de mauvaise qualité, opportunités rares.",
    },
    {
      year: "Adolescence",
      location: "Djibouti",
      title: "Le choix de la différence",
      description: "Pendant que d'autres abandonnaient ou sombraient dans le khat, j'ai choisi la lecture.",
    },
    {
      year: "Université",
      location: "Djibouti",
      title: "Mathématiques",
      description: "Études en mathématiques à l'Université de Djibouti, première étape vers l'excellence.",
    },
    {
      year: "Master",
      location: "Besançon, France",
      title: "Mathématiques fondamentales",
      description: "Master en mathématiques fondamentales à l'Université de Besançon.",
    },
    {
      year: "Enseignement",
      location: "Djibouti",
      title: "Transmission du savoir",
      description: "Enseignant à l'Université et dans les classes préparatoires du lycée d'excellence.",
    },
    {
      year: "Aujourd'hui",
      location: "États-Unis",
      title: "Partage et inspiration",
      description: "Je vis aux États-Unis et partage ce qui m'a sauvé : la lecture, la discipline, l'apprentissage.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              Mon histoire
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              De Djibouti aux <span className="text-primary">États-Unis</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Un parcours fait de détermination, de lecture et de discipline. Voici comment j'ai transformé ma vie, un
              livre à la fois.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative animate-slide-up">
            {/* Ligne verticale */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                  {/* Contenu */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-xs font-medium">
                          {milestone.year}
                        </Badge>
                        <span className="text-sm text-muted-foreground">📍 {milestone.location}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message final */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold mb-4">Ma mission</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ce blog, je l'ai créé pour partager ce qui m'a sauvé : la lecture, la discipline, et l'envie
                d'apprendre.
                <br />
                <br />
                <strong className="text-foreground">Si toi aussi tu veux progresser, tu es au bon endroit.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

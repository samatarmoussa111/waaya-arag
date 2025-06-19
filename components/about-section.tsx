export function AboutSection() {
  const storyPoints = [
    "Je m'appelle Samatar Barkadleh.",
    "Je suis né à Djibouti, dans un quartier pauvre.",
    "L'école n'était pas de bonne qualité. Les opportunités étaient rares.",
    "Autour de moi, beaucoup ont abandonné.",
    "Certains ont sombré dans le khat.",
    "Moi, j'ai choisi une autre voie.",
    "J'ai commencé à lire.",
    "Et à croire qu'une autre vie était possible.",
    "J'ai étudié les mathématiques à l'Université de Djibouti.",
    "J'ai obtenu un master en mathématiques fondamentales à l'Université de Besançon.",
    "J'ai enseigné les mathématiques à l'Université de Djibouti.",
    "J'ai enseigné les mathématiques dans les classes préparatoires du lycée d'excellence.",
    "Je vis aux États-Unis.",
    "Ce blog, je l'ai créé pour partager ce qui m'a sauvé : la lecture, la discipline, et l'envie d'apprendre.",
    "Si toi aussi tu veux progresser, tu es au bon endroit.",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Mon parcours</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="animate-slide-up">
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            {storyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

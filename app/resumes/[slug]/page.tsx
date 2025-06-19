import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, Share2, ExternalLink, Clock, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - in a real app, this would come from a database or CMS
const bookData = {
  "atomic-habits": {
    title: "Atomic Habits",
    subtitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=center",
    tags: ["Habitudes", "Productivité", "Développement personnel"],
    readTime: "8 min",
    publishedDate: "2024-01-15",
    amazonUrl: "https://amazon.com/atomic-habits",
    summary: `
# Les petites habitudes, les grands changements

## Introduction

James Clear nous démontre dans ce livre révolutionnaire que ce ne sont pas les grands changements qui transforment nos vies, mais l'accumulation de petites habitudes quotidiennes.

## Les 4 lois du changement de comportement

### 1. Rendre évident
- Utilisez la formule de l'intention d'implémentation : "Je vais [COMPORTEMENT] à [MOMENT] dans [LIEU]"
- Empilez vos habitudes : après [HABITUDE ACTUELLE], je vais [NOUVELLE HABITUDE]
- Concevez votre environnement pour réussir

### 2. Rendre attrayant
- Utilisez le regroupement de tentations
- Rejoignez une culture où votre comportement désiré est normal
- Créez un rituel de motivation

### 3. Rendre facile
- Réduisez la friction pour les bonnes habitudes
- Maîtrisez le moment décisif
- Utilisez la règle des 2 minutes

### 4. Rendre satisfaisant
- Utilisez le renforcement immédiat
- Rendez "ne rien faire" satisfaisant
- Utilisez un tracker d'habitudes

## Points clés à retenir

1. **Les habitudes sont des intérêts composés de l'amélioration de soi**
2. **Vous ne vous élevez pas au niveau de vos objectifs, vous tombez au niveau de vos systèmes**
3. **Chaque action est un vote pour le type de personne que vous souhaitez devenir**
4. **Le but n'est pas de lire un livre, le but est de devenir un lecteur**

## Application pratique

- Commencez petit : 1% d'amélioration chaque jour
- Concentrez-vous sur l'identité, pas sur les résultats
- Créez un environnement qui favorise vos bonnes habitudes
- Utilisez la règle des 2 minutes pour commencer

Ce livre change véritablement la façon dont nous percevons le changement personnel. Plutôt que de chercher des transformations radicales, James Clear nous montre comment les micro-changements peuvent créer des résultats extraordinaires.
    `,
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function BookSummaryPage({ params }: PageProps) {
  const book = bookData[params.slug as keyof typeof bookData]

  if (!book) {
    return (
      <main className="py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Résumé non trouvé</h1>
          <p className="text-muted-foreground mb-8">Ce résumé n'existe pas ou a été supprimé.</p>
          <Button asChild>
            <Link href="/resumes">Retour aux résumés</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
        {/* Navigation de retour */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/resumes" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux résumés
            </Link>
          </Button>
        </div>

        {/* En-tête amélioré */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            {/* Image du livre */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted to-muted/50">
                <Image
                  src={book.cover || "/placeholder.svg"}
                  alt={`Couverture du livre ${book.title}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Informations du livre */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-3 animate-fade-in">{book.title}</h1>
                {book.subtitle && (
                  <p className="text-xl text-muted-foreground mb-4 leading-relaxed animate-fade-in">{book.subtitle}</p>
                )}
                <p className="text-lg font-medium text-primary animate-fade-in">par {book.author}</p>
              </div>

              {/* Métadonnées */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground animate-slide-up">
                {book.readTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {book.readTime} de lecture
                  </div>
                )}
                {book.publishedDate && (
                  <div>
                    Publié le{" "}
                    {new Date(book.publishedDate).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                )}
              </div>

              {/* Tags */}
              {book.tags && (
                <div className="flex flex-wrap gap-2 animate-slide-up">
                  {book.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Description courte */}
              <div className="p-6 bg-muted/30 rounded-xl border-l-4 border-primary animate-slide-up">
                <p className="text-muted-foreground leading-relaxed">
                  Découvrez les concepts clés de ce livre incontournable à travers notre résumé détaillé et nos analyses
                  pratiques.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Contenu du résumé */}
        <div className="animate-slide-up">
          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: book.summary
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# ")) {
                      return `<h1 class="text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-3">${line.slice(2)}</h1>`
                    } else if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-semibold mt-10 mb-4 text-foreground">${line.slice(3)}</h2>`
                    } else if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-semibold mt-8 mb-3 text-foreground">${line.slice(4)}</h3>`
                    } else if (line.startsWith("- ")) {
                      return `<li class="mb-2 text-muted-foreground leading-relaxed">${line.slice(2)}</li>`
                    } else if (line.trim() === "") {
                      return "<br>"
                    } else if (line.startsWith("**") && line.endsWith("**")) {
                      return `<p class="mb-4 leading-relaxed font-semibold text-foreground bg-muted/30 p-4 rounded-lg border-l-4 border-primary">${line.slice(2, -2)}</p>`
                    } else {
                      return `<p class="mb-6 leading-relaxed text-muted-foreground">${line}</p>`
                    }
                  })
                  .join(""),
              }}
            />
          </div>
        </div>

        <Separator className="my-12" />

        {/* Actions après le contenu */}
        <div className="space-y-8 animate-slide-up">
          {/* Section d'action principale */}
          <div className="text-center p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">Vous avez aimé ce résumé ?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Soutenez l'auteur en achetant le livre complet et découvrez encore plus de détails et d'exemples
              pratiques.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Acheter sur Amazon
              </a>
            </Button>
          </div>

          {/* Actions secondaires */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Ajouter aux favoris
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Partager ce résumé
            </Button>
          </div>
        </div>

        {/* Navigation vers d'autres résumés */}
        <div className="mt-16 pt-8 border-t text-center">
          <h3 className="text-xl font-semibold mb-4">Découvrir d'autres résumés</h3>
          <Button asChild size="lg" variant="outline">
            <Link href="/resumes">Voir tous les résumés</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

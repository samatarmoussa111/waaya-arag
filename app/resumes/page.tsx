"use client"

import { useState, useMemo } from "react"
import { BookListItem } from "@/components/book-list-item"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X, BookOpen } from "lucide-react"

const allBooks = [
  {
    id: "1",
    title: "Atomic Habits",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop&crop=center",
    tags: ["Habitudes", "Productivité", "Développement"],
    slug: "atomic-habits",
  },
  {
    id: "2",
    title: "The 7 Habits of Highly Effective People",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop&crop=center",
    tags: ["Leadership", "Efficacité", "Management"],
    slug: "7-habits-effective-people",
  },
  {
    id: "3",
    title: "Mindset: The New Psychology of Success",
    cover: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop&crop=center",
    tags: ["Psychologie", "Réussite", "Mental"],
    slug: "mindset-psychology-success",
  },
  {
    id: "4",
    title: "Deep Work",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center",
    tags: ["Productivité", "Focus", "Concentration"],
    slug: "deep-work",
  },
  {
    id: "5",
    title: "The Power of Now",
    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop&crop=center",
    tags: ["Spiritualité", "Présence", "Méditation"],
    slug: "power-of-now",
  },
  {
    id: "6",
    title: "Think and Grow Rich",
    cover: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=400&fit=crop&crop=center",
    tags: ["Richesse", "Mindset", "Entrepreneuriat"],
    slug: "think-grow-rich",
  },
  {
    id: "7",
    title: "The Lean Startup",
    cover: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=300&h=400&fit=crop&crop=center",
    tags: ["Entrepreneuriat", "Innovation", "Business"],
    slug: "lean-startup",
  },
  {
    id: "8",
    title: "Sapiens: A Brief History of Humankind",
    cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=300&h=400&fit=crop&crop=center",
    tags: ["Histoire", "Anthropologie", "Société"],
    slug: "sapiens",
  },
  {
    id: "9",
    title: "The 4-Hour Workweek",
    cover: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=400&fit=crop&crop=center",
    tags: ["Productivité", "Lifestyle", "Entrepreneuriat"],
    slug: "4-hour-workweek",
  },
  {
    id: "10",
    title: "How to Win Friends and Influence People",
    cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=400&fit=crop&crop=center",
    tags: ["Communication", "Relations", "Leadership"],
    slug: "win-friends-influence-people",
  },
]

const allTags = Array.from(new Set(allBooks.flatMap((book) => book.tags || [])))

export default function ResumesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredBooks = useMemo(() => {
    return allBooks.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => book.tags?.includes(tag))

      return matchesSearch && matchesTags
    })
  }, [searchTerm, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSelectedTags([])
    setSearchTerm("")
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tous les résumés</h1>
          <p className="text-xl text-muted-foreground">Découvrez notre collection complète de résumés de livres</p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="mb-12 space-y-6">
          {/* Barre de recherche */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Rechercher un livre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Bouton filtres */}
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtres
              {selectedTags.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {selectedTags.length}
                </Badge>
              )}
            </Button>

            {(selectedTags.length > 0 || searchTerm) && (
              <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-2">
                <X className="w-4 h-4" />
                Effacer les filtres
              </Button>
            )}
          </div>

          {/* Filtres par tags */}
          {showFilters && (
            <div className="p-6 border rounded-lg bg-muted/30 animate-slide-up">
              <h3 className="font-semibold mb-4">Filtrer par catégorie</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Tags sélectionnés */}
          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Filtres actifs:</span>
              {selectedTags.map((tag) => (
                <Badge key={tag} variant="default" className="cursor-pointer" onClick={() => toggleTag(tag)}>
                  {tag}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Résultats */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-muted-foreground flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            {filteredBooks.length} résumé{filteredBooks.length > 1 ? "s" : ""} trouvé
            {filteredBooks.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Liste des livres */}
        <div className="space-y-3 animate-slide-up">
          {filteredBooks.map((book) => (
            <BookListItem key={book.id} {...book} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg mb-4">Aucun résumé ne correspond à votre recherche</p>
            <Button onClick={clearFilters}>Effacer les filtres</Button>
          </div>
        )}
      </div>
    </main>
  )
}

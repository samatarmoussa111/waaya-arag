import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"

const latestBooks = [
  {
    id: "1",
    title: "Atomic Habits",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop&crop=center",
    slug: "atomic-habits",
    readTime: "8 min",
  },
  {
    id: "2",
    title: "The 7 Habits of Highly Effective People",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop&crop=center",
    slug: "7-habits-effective-people",
    readTime: "12 min",
  },
  {
    id: "3",
    title: "Mindset: The New Psychology of Success",
    cover: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop&crop=center",
    slug: "mindset-psychology-success",
    readTime: "10 min",
  },
]

export function LatestSummaries() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">📚 Derniers résumés</h2>
          <p className="text-xl text-muted-foreground">Découvrez les derniers livres résumés pour vous</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {latestBooks.map((book) => (
            <Link key={book.id} href={`/resumes/${book.slug}`} className="group block">
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border">
                {/* Image de couverture */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={book.cover || "/placeholder.svg"}
                    alt={`Couverture du livre ${book.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {book.readTime} de lecture
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

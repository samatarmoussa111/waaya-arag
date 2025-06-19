import { BookCard } from "./book-card"

const latestBooks = [
  {
    id: "1",
    title: "Atomic Habits",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop&crop=center",
    tags: ["Habitudes", "Productivité"],
    slug: "atomic-habits",
    description: "Découvrez comment de petits changements quotidiens peuvent transformer votre vie.",
    readTime: "8 min",
  },
  {
    id: "2",
    title: "The 7 Habits of Highly Effective People",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop&crop=center",
    tags: ["Leadership", "Efficacité"],
    slug: "7-habits-effective-people",
    description: "Les 7 principes fondamentaux pour développer votre efficacité personnelle.",
    readTime: "12 min",
  },
  {
    id: "3",
    title: "Mindset: The New Psychology of Success",
    cover: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=400&fit=crop&crop=center",
    tags: ["Psychologie", "Réussite"],
    slug: "mindset-psychology-success",
    description: "Comment adopter un état d'esprit de croissance pour débloquer votre potentiel.",
    readTime: "10 min",
  },
]

export function LatestSummaries() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">📚 Derniers résumés publiés</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {latestBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </section>
  )
}

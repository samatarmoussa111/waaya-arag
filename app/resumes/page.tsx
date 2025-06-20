import { BookListItem } from "@/components/book-list-item";
import { BookOpen } from "lucide-react";
import { getPosts } from "@/lib/posts";

export default async function ResumesPage() {
  const posts = await getPosts();

  return (
    <main className="py-20">
      <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Tous les résumés
          </h1>
          <p className="text-xl text-muted-foreground">
            Découvrez notre collection complète de résumés de livres
          </p>
        </div>

        {/* Liste des livres */}
        <div className="space-y-3 animate-slide-up">
          {posts.map((post) => (
            <BookListItem key={post.slug} post={post} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg mb-4">
              Aucun résumé ne correspond à votre recherche
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { getPosts } from "@/lib/posts";

export async function LatestSummaries() {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 3);
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Derniers résumés
          </h2>
          <p className="text-xl text-muted-foreground">
            Découvrez les derniers livres résumés pour vous
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/resumes/${post.slug}`}
              className="group block"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border">
                {/* Image de couverture */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={post.cover || "/placeholder.svg"}
                    alt={`Couverture du livre ${post.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime} de lecture
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

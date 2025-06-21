import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getPost } from "@/lib/posts";

import { Heart, Share2, ExternalLink, Clock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Mdx } from "@/features/mdx/Mdx";

export default async function BookSummaryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPost(slug);
  if (!post) {
    return (
      <main className="py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Résumé non trouvé</h1>
          <p className="text-muted-foreground mb-8">
            Ce résumé n&apos;existe pas ou a été supprimé.
          </p>
          <Button asChild>
            <Link href="/resumes">Retour aux résumés</Link>
          </Button>
        </div>
      </main>
    );
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
                  src={post.cover || "/placeholder.svg"}
                  alt={`Couverture du livre ${post.title}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Informations du livre */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-3 animate-fade-in">
                  {post.title}
                </h1>
                {post.description && (
                  <p className="text-xl text-muted-foreground mb-4 leading-relaxed animate-fade-in">
                    {post.description}
                  </p>
                )}
                <p className="text-lg font-medium text-primary animate-fade-in">
                  par {post.author}
                </p>
              </div>

              {/* Métadonnées */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground animate-slide-up">
                {post.readTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} de lecture
                  </div>
                )}
                {post.publishedAt && (
                  <div>
                    Publié le{" "}
                    {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.tags && (
                <div className="flex flex-wrap gap-2 animate-slide-up">
                  {post.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-3 py-1 text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Contenu du résumé */}
        <div className="prose prose-sm lg:prose-lg">
          <div className="flex items-center gap-2"></div>
          <h1>{post.title}</h1>
          <Mdx>{post.content}</Mdx>
        </div>

        <Separator className="my-12" />

        {/* Actions après le contenu */}
        <div className="space-y-8 animate-slide-up">
          {/* Section d'action principale */}
          <div className="text-center p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">
              Vous avez aimé ce résumé ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Soutenez l&apos;auteur en achetant le livre complet et découvrez
              encore plus de détails et d&apos;exemples pratiques.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a
                href={post.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Acheter sur Amazon
              </a>
            </Button>
          </div>

          {/* Actions secondaires */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Ajouter aux favoris
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Partager ce résumé
            </Button>
          </div>
        </div>

        {/* Navigation vers d'autres résumés */}
        <div className="mt-16 pt-8 border-t text-center">
          <h3 className="text-xl font-semibold mb-4">
            Découvrir d&apos;autres résumés
          </h3>
          <Button asChild size="lg" variant="outline">
            <Link href="/resumes">Voir tous les résumés</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

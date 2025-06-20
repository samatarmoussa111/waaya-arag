import { Badge } from "@/components/ui/badge";
import { Post } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

interface BookListItemProps {
  post: Post;
}

export function BookListItem({ post }: BookListItemProps) {
  return (
    <Link href={`/resumes/${post.slug}`} className="block group">
      <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-all duration-200 hover:shadow-md">
        {/* Image du livre */}
        <div className="flex-shrink-0">
          <div className="relative w-16 h-20 rounded-md overflow-hidden shadow-sm">
            <Image
              src={post.cover || "/placeholder.svg"}
              alt={`Couverture du livre ${post.title}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>

        {/* Contenu */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {post.title}
          </h3>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs px-2 py-1 bg-primary/10 text-primary border-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Indicateur de clic */}
        <div className="flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
        </div>
      </div>
    </Link>
  );
}

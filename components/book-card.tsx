import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  id: string;
  title: string;
  cover: string;
  tags?: string[];
  slug: string;
  description?: string;
  readTime?: string;
  variant?: "default" | "simple";
}

export function BookCard({
  title,
  cover,
  tags,
  slug,
  description,
  readTime,
  variant = "default",
}: BookCardProps) {
  if (variant === "simple") {
    return (
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
            <Image
              src={cover || "/placeholder.svg"}
              alt={`Couverture du livre ${title}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-base mb-3 line-clamp-2 leading-tight">
              {title}
            </h3>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs px-2 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="pt-0 px-4 pb-4">
          <Button asChild size="sm" className="w-full">
            <Link href={`/resumes/${slug}`}>Lire</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={cover || "/placeholder.svg"}
            alt={`Couverture du livre ${title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-bold text-xl mb-2 line-clamp-2">{title}</h3>
            {description && (
              <p className="text-sm text-white/90 line-clamp-2 mb-3">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="p-6">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between">
            {readTime && (
              <span className="text-sm text-muted-foreground">
                {readTime} de lecture
              </span>
            )}
            <Button asChild>
              <Link href={`/resumes/${slug}`}>Lire le résumé</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

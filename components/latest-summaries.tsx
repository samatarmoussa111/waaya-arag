import { getPosts } from "@/lib/posts";
import PostItem from "./post-item";

export async function LatestSummaries() {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 3);
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Résumés de livres
          </h2>
          <p className="text-xl text-muted-foreground">
            Des résumés détaillés des meilleurs livres de développement
            personnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {latestPosts.map((post, index) => (
            <PostItem key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

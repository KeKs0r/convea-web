import Image from "next/image";
import Link from "next/link";
import { IArticleIndex } from "seobot/dist/types/blog";

export function FeaturedArticles({ articles }: { articles: IArticleIndex[] }) {
  return (
    <div className="grid gap-6">
      {/* Top row with 2 articles */}
      <div className="grid gap-6 md:grid-cols-2">
        {articles.slice(0, 2).map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-lg"
          >
            <div className="aspect-[2/1] w-full">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.headline}
                width={800}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              {article.category && (
                <span className="mb-2 block text-sm text-gray-600">
                  {article.category.title}
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
                {article.headline}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      {/* Bottom row with 3 articles */}
      <div className="grid gap-6 md:grid-cols-3">
        {articles.slice(2, 5).map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-lg"
          >
            <div>
              <div className="aspect-[4/3] w-full">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.headline}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                {article.category && (
                  <span className="mb-2 block text-sm text-gray-600">
                    {article.category.title}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
                  {article.headline}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

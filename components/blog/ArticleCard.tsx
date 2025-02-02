import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IArticleIndex } from "seobot/dist/types/blog";

export function ArticleCard({ article }: { article: IArticleIndex }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative aspect-[16/9]">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.headline}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-6">
        {article.category && (
          <Badge variant="secondary" className="mb-2">
            {article.category.title}
          </Badge>
        )}
        <Link href={`/blog/${article.slug}`}>
          <h3 className="mb-2 text-xl font-semibold text-gray-800 hover:text-primary">
            {article.headline}
          </h3>
        </Link>
        <p className="mb-4 text-sm text-gray-600">{article.metaDescription}</p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag.slug} variant="outline">
              {tag.title}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{article.readingTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={article.createdAt}>
              {formatDistanceToNow(new Date(article.createdAt), {
                addSuffix: true,
              })}
            </time>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

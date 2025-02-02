import Link from "next/link";
import { cn } from "@/lib/utils";

interface Category {
  title: string;
  slug: string;
  count: number;
}

export function CategoryList({
  categories,
  activeCategory,
}: {
  categories: Category[];
  activeCategory: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-4">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/category/${category.slug}`}
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors  text-gray-800",
            category.slug === activeCategory
              ? "bg-primary"
              : "bg-gray-100 hover:bg-gray-200"
          )}
        >
          {category.title}
          <span className="ml-2 rounded-full bg-white bg-opacity-20 px-2 py-0.5 text-xs">
            {category.count}
          </span>
        </Link>
      ))}
    </div>
  );
}

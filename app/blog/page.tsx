import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogHeroSection } from "@/components/blog/BlogHeroSection";
import { CategoryList } from "@/components/blog/CategoryList";
import { FeaturedArticles } from "@/components/blog/FeaturedArticles";
import { categories, mockArticles } from "@/components/blog/mock-articles";
import { Pagination } from "@/components/blog/Pagination";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import { type Metadata } from "next";
import { BlogClient } from "seobot";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Convea.ai Blog";
  const description =
    "Explore the latest insights and strategies in email marketing with Convea.ai - your go-to resource for optimizing email campaigns and boosting engagement.";
  return {
    title,
    description,
    metadataBase: new URL("https://convea.ai"),
    alternates: {
      canonical: "/blog",
    },
    openGraph: {
      type: "website",
      title,
      description,
      // images: [],
      url: "https://convea.ai/blog",
    },
    twitter: {
      title,
      description,
      // card: 'summary_large_image',
      // images: [],
    },
  };
}

async function getPosts(page: number) {
  const key = process.env.SEOBOT_API_KEY;
  if (!key)
    throw Error(
      "SEOBOT_API_KEY enviroment variable must be set. You can use the DEMO key a8c58738-7b98-4597-b20a-0bb1c2fe5772 for testing - please set it in the root .env.local file"
    );

  const client = new BlogClient(key);
  return client.getArticles(page, 10);
}

export const fetchCache = "force-no-store";

export default async function Blog(props: {
  searchParams: Promise<{ page: number }>;
}) {
  const currentPage = Math.max((await props.searchParams).page || 0, 0);
  const { total, articles } = await getPosts(currentPage);
  const posts = [...articles, ...mockArticles];
  const totalPages = Math.ceil(total || posts.length / 10);

  const featuredArticles = posts.slice(0, 5);
  const regularArticles = posts.slice(5);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-[800px] z-0">
        <BlogHeroSection />
      </div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="relative z-10 pt-16">
        <div className="bg-white mt-40">
          <div className="container mx-auto px-4 py-12">
            <FeaturedArticles articles={featuredArticles} />
          </div>
        </div>

        <main className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <CategoryList categories={categories} activeCategory="all" />
          </div>
          <div className="space-y-12">
            <section>
              <div className="grid gap-8 sm:grid-cols-2">
                {regularArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          </div>
          <Pagination
            currentPage={currentPage + 1}
            totalPages={totalPages}
            slug="/blog"
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

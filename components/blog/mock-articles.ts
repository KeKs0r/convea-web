import { IArticleIndex } from "seobot/dist/types/blog";

// This would normally come from your API or CMS
export const mockArticles: IArticleIndex[] = [
  {
    id: "1",
    slug: "increase-klaviyo-revenue",
    headline: "Increase your Klaviyo revenue with no extra work",
    metaDescription:
      "Make your Klaviyo email flows smarter with no development work.",
    image: "/dalle-1.webp",
    readingTime: 5,
    createdAt: "2024-02-02T14:42:05Z",
    updatedAt: "2024-02-02T14:42:05Z",
    category: {
      title: "Email Marketing",
      slug: "email-marketing",
    },
    tags: [
      { title: "Klaviyo", slug: "klaviyo" },
      { title: "Automation", slug: "automation" },
    ],
  },
  {
    id: "2",
    slug: "email-personalization-guide",
    headline: "The Complete Guide to Email Personalization",
    metaDescription:
      "Learn how to create highly personalized email campaigns that convert.",
    image: "/dalle-2.webp",
    readingTime: 8,
    createdAt: "2024-02-01T10:00:00Z",
    updatedAt: "2024-02-01T10:00:00Z",
    category: {
      title: "Best Practices",
      slug: "best-practices",
    },
    tags: [
      { title: "Personalization", slug: "personalization" },
      { title: "Email Marketing", slug: "email-marketing" },
    ],
  },
  {
    id: "3",
    slug: "ai-email-marketing",
    headline: "How AI is Revolutionizing Email Marketing",
    metaDescription:
      "Discover the latest AI trends transforming email marketing strategies.",
    image: "/dalle-3.webp",
    readingTime: 6,
    createdAt: "2024-01-30T15:30:00Z",
    updatedAt: "2024-01-30T15:30:00Z",
    category: {
      title: "AI & Technology",
      slug: "ai-technology",
    },
    tags: [
      { title: "AI", slug: "ai" },
      { title: "Technology", slug: "technology" },
    ],
  },
  {
    id: "4",
    slug: "email-automation-workflows",
    headline: "10 Must-Have Email Automation Workflows",
    metaDescription:
      "Set up these essential automation workflows to boost your email marketing.",
    image: "/dalle-4.webp",
    readingTime: 7,
    createdAt: "2024-01-28T09:15:00Z",
    updatedAt: "2024-01-28T09:15:00Z",
    category: {
      title: "Automation",
      slug: "automation",
    },
    tags: [
      { title: "Automation", slug: "automation" },
      { title: "Workflows", slug: "workflows" },
    ],
  },
  {
    id: "5",
    slug: "email-deliverability-tips",
    headline: "Email Deliverability: Best Practices for 2024",
    metaDescription:
      "Ensure your emails reach the inbox with these proven deliverability tips.",
    image: "/dalle-1.webp",
    readingTime: 6,
    createdAt: "2024-01-25T11:20:00Z",
    updatedAt: "2024-01-25T11:20:00Z",
    category: {
      title: "Best Practices",
      slug: "best-practices",
    },
    tags: [
      { title: "Deliverability", slug: "deliverability" },
      { title: "Best Practices", slug: "best-practices" },
    ],
  },
  {
    id: "6",
    slug: "email-segmentation-strategies",
    headline: "Advanced Email Segmentation Strategies for Higher Conversions",
    metaDescription:
      "Learn how to segment your email list for more targeted and effective campaigns.",
    image: "/dalle-2.webp",
    readingTime: 7,
    createdAt: "2024-01-22T08:30:00Z",
    updatedAt: "2024-01-22T08:30:00Z",
    category: {
      title: "Email Marketing",
      slug: "email-marketing",
    },
    tags: [
      { title: "Segmentation", slug: "segmentation" },
      { title: "Conversion", slug: "conversion" },
    ],
  },
  {
    id: "7",
    slug: "email-design-trends",
    headline: "Email Design Trends to Watch in 2024",
    metaDescription:
      "Stay ahead of the curve with these cutting-edge email design trends for 2024.",
    image: "/dalle-3.webp",
    readingTime: 5,
    createdAt: "2024-01-20T14:00:00Z",
    updatedAt: "2024-01-20T14:00:00Z",
    category: {
      title: "Design",
      slug: "design",
    },
    tags: [
      { title: "Design", slug: "design" },
      { title: "Trends", slug: "trends" },
    ],
  },
  {
    id: "8",
    slug: "email-analytics-guide",
    headline: "The Ultimate Guide to Email Analytics",
    metaDescription:
      "Learn how to interpret and act on your email marketing metrics for better results.",
    image: "/dalle-4.webp",
    readingTime: 9,
    createdAt: "2024-01-18T11:45:00Z",
    updatedAt: "2024-01-18T11:45:00Z",
    category: {
      title: "Analytics",
      slug: "analytics",
    },
    tags: [
      { title: "Analytics", slug: "analytics" },
      { title: "Metrics", slug: "metrics" },
    ],
  },
  {
    id: "9",
    slug: "email-compliance-gdpr",
    headline: "Navigating GDPR and Email Compliance in 2024",
    metaDescription:
      "Ensure your email marketing practices are compliant with the latest regulations.",
    image: "/dalle-1.webp",
    readingTime: 8,
    createdAt: "2024-01-15T09:00:00Z",
    updatedAt: "2024-01-15T09:00:00Z",
    category: {
      title: "Compliance",
      slug: "compliance",
    },
    tags: [
      { title: "GDPR", slug: "gdpr" },
      { title: "Compliance", slug: "compliance" },
    ],
  },
  {
    id: "10",
    slug: "email-subject-line-optimization",
    headline: "Mastering the Art of Email Subject Lines",
    metaDescription:
      "Discover techniques to craft compelling subject lines that boost open rates.",
    image: "/dalle-2.webp",
    readingTime: 6,
    createdAt: "2024-01-12T13:20:00Z",
    updatedAt: "2024-01-12T13:20:00Z",
    category: {
      title: "Copywriting",
      slug: "copywriting",
    },
    tags: [
      { title: "Subject Lines", slug: "subject-lines" },
      { title: "Copywriting", slug: "copywriting" },
    ],
  },
];

export const categories = [
  { title: "All posts", slug: "all", count: 10 },
  { title: "Email Marketing", slug: "email-marketing", count: 8 },
  { title: "Best Practices", slug: "best-practices", count: 6 },
  { title: "AI & Technology", slug: "ai-technology", count: 4 },
  { title: "Automation", slug: "automation", count: 5 },
];

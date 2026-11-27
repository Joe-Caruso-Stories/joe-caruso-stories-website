import { GENERATED_POSTS } from "@/lib/generated-posts";

export type BlogPostMeta = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  excerpt: string;
  coverImage?: string;
};

export type BlogPost = BlogPostMeta & {
  html: string;
};

export function getAllPosts(): BlogPostMeta[] {
  return GENERATED_POSTS.map(({ slug, title, subtitle, date, excerpt, coverImage }) => ({
    slug,
    title,
    subtitle: subtitle ?? undefined,
    date,
    excerpt,
    coverImage: coverImage ?? undefined,
  }));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const post = GENERATED_POSTS.find((p) => p.slug === slug);
  if (!post) return null;

  return {
    ...post,
    subtitle: post.subtitle ?? undefined,
    coverImage: post.coverImage ?? undefined,
  };
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

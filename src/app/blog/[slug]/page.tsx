import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PostMeta } from "@/components/blog/PostMeta";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <PostMeta date={post.date} />
        <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
          {post.title}
        </h1>
        <div
          className="prose prose-lg mt-10 max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-charcoal prose-p:text-charcoal/90 prose-a:text-amber-deep prose-blockquote:border-amber prose-blockquote:text-charcoal prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </article>
  );
}

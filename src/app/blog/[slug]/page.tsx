import { Metadata } from "next";
import Image from "next/image";
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
      <Container className="max-w-3xl lg:w-1/3 lg:max-w-none lg:px-0">
        {post.coverImage && (
          <div className="relative mb-10 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-peach">
            <Image
              src={post.coverImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        )}
        <h1 className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-2">
          <PostMeta date={post.date} author="Joe Caruso" />
        </div>
        <div
          className="prose prose-lg mt-10 max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-charcoal prose-p:text-charcoal/90 prose-a:text-link prose-blockquote:border-amber prose-blockquote:text-charcoal prose-img:mx-auto prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </article>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PostCard } from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Devotional reflections from Joe Caruso.",
};

const PAGE_SIZE = 9;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const page = Math.min(
    Math.max(1, Number(pageParam) || 1),
    totalPages
  );
  const start = (page - 1) * PAGE_SIZE;
  const pagePosts = posts.slice(start, start + PAGE_SIZE);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="The Blog" title="Devotional reflections" />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {pagePosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                href={n === 1 ? "/blog" : `/blog?page=${n}`}
                className={`flex h-10 w-10 items-center justify-center rounded-full font-sans text-sm font-medium ${
                  n === page
                    ? "bg-amber text-ivory"
                    : "text-charcoal hover:bg-peach/60"
                }`}
              >
                {n}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

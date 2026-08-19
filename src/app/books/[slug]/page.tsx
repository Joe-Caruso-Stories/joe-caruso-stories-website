import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookHero } from "@/components/books/BookHero";
import { BookCard } from "@/components/books/BookCard";
import { BOOKS } from "@/lib/site-data";

export function generateStaticParams() {
  return BOOKS.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);
  if (!book) return {};

  return {
    title: book.title,
    description: book.blurb,
    openGraph: {
      title: book.title,
      description: book.blurb,
      images: book.coverImage ? [book.coverImage] : undefined,
    },
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);
  if (!book) notFound();

  const otherBooks = BOOKS.filter((b) => b.slug !== book.slug);

  return (
    <>
      <BookHero
        title={book.title}
        tagline={book.tagline}
        blurb={book.blurb}
        coverImage={book.coverImage}
        story={"story" in book ? book.story : undefined}
        links={[{ label: "Amazon", url: book.amazonUrl }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="More Books" title="Also by Joe Caruso" />
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
            {otherBooks.map((b) => (
              <BookCard
                key={b.slug}
                slug={b.slug}
                title={b.title}
                tagline={b.tagline}
                cardQuote={b.cardQuote}
                coverImage={b.coverImage}
                amazonUrl={b.amazonUrl}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

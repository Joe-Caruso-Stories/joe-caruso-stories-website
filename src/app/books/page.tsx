import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookCard } from "@/components/books/BookCard";
import { BOOKS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Rhyming picture books by Joe Caruso about creation, identity, and purpose.",
};

export default function BooksPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="The Books" title="Rhyming stories, big truths" />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {BOOKS.map((book) => (
            <BookCard
              key={book.slug}
              slug={book.slug}
              title={book.title}
              tagline={book.tagline}
              cardQuote={book.cardQuote}
              coverImage={book.coverImage}
              amazonUrl={book.amazonUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

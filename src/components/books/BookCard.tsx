import Image from "next/image";
import Link from "next/link";

export function BookCard({
  slug,
  title,
  tagline,
  cardQuote,
  coverImage,
  amazonUrl,
}: {
  slug: string;
  title: string;
  tagline: string;
  cardQuote?: string;
  coverImage?: string;
  amazonUrl?: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[22px] border border-sand bg-paper shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link href={`/books/${slug}`} className="relative block aspect-square overflow-hidden bg-peach">
        {coverImage && (
          <Image
            src={coverImage}
            alt={`${title} book cover`}
            fill
            sizes="(max-width: 640px) 90vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/books/${slug}`}>
          <h3 className="font-display text-xl font-bold text-charcoal">{title}</h3>
        </Link>
        <p className="mt-1.5 font-sans text-[13.5px] font-medium text-teal">{tagline}</p>
        {cardQuote && (
          <p className="mt-3 flex-1 whitespace-pre-line font-sans text-[15px] italic leading-relaxed text-taupe">
            {cardQuote}
          </p>
        )}
        {amazonUrl && (
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-full bg-amber px-4.5 py-3 font-display text-sm font-semibold text-on-gold transition-transform hover:-translate-y-0.5 hover:bg-amber-deep"
          >
            Buy on Amazon
          </a>
        )}
      </div>
    </article>
  );
}

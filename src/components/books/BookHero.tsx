import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BuyLinkGroup, RetailerLink } from "@/components/books/BuyLinkGroup";
import { PullQuote } from "@/components/books/PullQuote";

export function BookHero({
  title,
  tagline,
  blurb,
  coverImage,
  story,
  award,
  links,
}: {
  title: string;
  tagline: string;
  blurb: string;
  coverImage?: string;
  story?: readonly (
    | { type: "paragraph"; text: string; lead?: string }
    | { type: "quote"; text: string }
  )[];
  award?: { image: string; label: string };
  links: RetailerLink[];
}) {
  return (
    <section className="bg-peach/50 py-16 sm:py-24">
      <Container className="grid items-start gap-12 sm:grid-cols-2">
        <div className="mx-auto w-full max-w-md">
          <div className="relative aspect-square w-full overflow-hidden shadow-2xl">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={`${title} book cover`}
                fill
                sizes="(max-width: 640px) 90vw, 40vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber/80 to-clay/70 p-6">
                <p className="text-center font-display text-2xl font-bold text-on-gold">
                  {title}
                </p>
              </div>
            )}
          </div>
          {award && (
            <div className="relative mx-auto mt-8 h-40 w-40 drop-shadow-lg">
              <Image src={award.image} alt={award.label} fill sizes="160px" />
            </div>
          )}
        </div>

        <div>
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-teal">
            {tagline}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            {title}
          </h1>
          {story ? (
            <>
              {story.map((block, i) =>
                block.type === "quote" ? (
                  <div key={i} className={i === 0 ? "mt-5" : "mt-6"}>
                    <PullQuote>{block.text}</PullQuote>
                  </div>
                ) : (
                  <p
                    key={i}
                    className={`font-sans leading-relaxed text-taupe ${
                      i === 0 ? "mt-5" : "mt-6"
                    }`}
                  >
                    {block.lead && (
                      <span className="font-bold italic">{block.lead}</span>
                    )}
                    {block.text}
                  </p>
                ),
              )}
            </>
          ) : (
            <p className="mt-5 font-sans leading-relaxed text-taupe">{blurb}</p>
          )}
          <div className="mt-8">
            <BuyLinkGroup links={links} />
          </div>
        </div>
      </Container>
    </section>
  );
}

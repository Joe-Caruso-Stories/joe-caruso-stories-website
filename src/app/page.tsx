import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { BookCard } from "@/components/books/BookCard";
import { PostCard } from "@/components/blog/PostCard";
import { TestimonialStrip } from "@/components/testimonials/TestimonialStrip";
import { BOOKS } from "@/lib/site-data";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-12 sm:py-16"
        style={{
          backgroundColor: "var(--color-peach)",
          backgroundImage: "url('/images/hero/sky-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="mx-auto grid w-full max-w-[1500px] items-center gap-6 sm:grid-cols-[460px_1fr] sm:gap-6"
          style={{
            paddingLeft: "clamp(20px, 3.6vw, 52px)",
            paddingRight: "16px",
          }}
        >
          <div>
            <span className="mb-5 inline-block rounded-full bg-peach px-4 py-1.5 font-display text-[12.5px] font-bold uppercase tracking-[0.16em] text-teal-deep">
              Award-winning children&rsquo;s books
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-charcoal sm:text-6xl">
              Stories inspiring children to{" "}
              <span className="whitespace-nowrap text-amber-deep">aim high.</span>
            </h1>
            <p className="mt-5 font-sans text-lg leading-[1.55] text-taupe">
              Beautifully illustrated picture books that help kids see
              themselves as God sees them — full of wonder, value, and
              endless possibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button href="/books" variant="primary">
                Explore the Books
              </Button>
            </div>
          </div>

          <div className="relative hidden w-full sm:block" style={{ aspectRatio: "3137/1269" }}>
            <Image
              src="/images/hero/books-collage.png"
              alt="In the Beginning… God, In the Image of God, and Freddy Finds God book covers"
              fill
              sizes="(min-width: 640px) 60vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Books */}
      <section className="bg-peach py-24">
        <Container>
          <SectionHeading
            eyebrow="The Books"
            title="Three stories, one big idea: you are God&rsquo;s masterpiece."
            align="left"
          />
          <p className="mt-4 max-w-2xl font-sans text-lg text-taupe">
            Each book pairs Joe&rsquo;s gentle, rhyming words with Alina
            Shabelnyk&rsquo;s radiant illustrations — made to be read aloud,
            again and again.
          </p>
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
                award={"award" in book ? book.award : undefined}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="bg-paper py-24">
        <Container>
          <SectionHeading eyebrow="Reader Reviews" title="Loved by parents, grandparents, and little ones." />
          <div className="mt-12">
            <TestimonialStrip />
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="bg-paper py-24">
        <Container className="flex justify-center">
        <div className="grid items-center gap-6 sm:grid-cols-[304px_auto] sm:gap-24">
          <div className="mx-auto w-full max-w-[304px] sm:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-full ring-8 ring-paper">
              <Image
                src="/images/about/joe-portrait-round.jpg"
                alt="Author Joe Caruso"
                fill
                sizes="(max-width: 640px) 56vw, 304px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="max-w-[720px]">
            <SectionHeading
              eyebrow="Meet Joe"
              title="Award-winning author and grandpa of six."
              align="left"
            />
            <p className="mt-5 border-l-4 border-amber py-1 pl-5 font-display text-lg font-medium leading-snug text-charcoal">
              &ldquo;I hope my books inspire children to see themselves
              through God&rsquo;s eyes. If we see ourselves as God sees us,
              then, through Christ, anything is possible.&rdquo;
            </p>
            <p className="mt-5 font-sans text-[16.5px] leading-relaxed text-taupe">
              Joe Caruso writes thought-provoking, inspirational
              children&rsquo;s books with a gift for rhyme and heart. Born in
              Niagara Falls, New York, he grew up in the Niagara Region of
              Ontario, Canada, where he taught in St. Catharines for over two
              decades.
            </p>
            <Button href="/about" variant="sky" className="mt-6">
              More About Joe
            </Button>
          </div>
        </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section
        id="newsletter"
        className="scroll-mt-20 py-24"
        style={{
          background: "linear-gradient(135deg, #1c3252, #264a72)",
        }}
      >
        <Container className="grid items-center gap-10 sm:grid-cols-2 sm:gap-12">
          <div>
            <p className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-amber">
              The Aim High Newsletter
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              A little lift for your inbox.
            </h2>
            <p className="mt-3.5 font-sans text-[17px] leading-relaxed text-[#d7e4f4]">
              Explore faith in an uplifting, thought-provoking way — and get
              Joe&rsquo;s latest author updates. Here&rsquo;s what lands in
              every issue:
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                "An Aim High spiritual insight",
                "A children's book recommendation",
                "An inspirational Bible verse",
                "A final thought & a question to ponder",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-sans text-base font-semibold text-[#eaf2fc]">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber/20 text-amber">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 6" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[22px] border border-white/20 bg-white/10 p-7 backdrop-blur">
            <h3 className="font-display text-xl font-bold text-white">
              Join the newsletter
            </h3>
            <p className="mt-1.5 font-sans text-sm text-[#cfe0f2]">
              Spiritual Insights to help you Aim High.
            </p>
            <form className="mt-5 flex flex-wrap gap-2.5">
              <input
                type="email"
                placeholder="you@email.com"
                aria-label="Email address"
                className="min-w-[180px] flex-1 rounded-full border-none bg-white px-5 py-3.5 font-sans text-[15px] text-charcoal focus:outline-none"
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
            <p className="mt-3.5 font-sans text-xs text-[#a9c1dc]">
              Unsubscribe at any time. No spam, ever.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog */}
      <section className="bg-ivory py-24">
        <Container>
          <SectionHeading
            eyebrow="From the Blog"
            title="Reflections on faith, family, and finding your focus."
            align="left"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/blog" variant="secondary">
              Visit the Blog
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

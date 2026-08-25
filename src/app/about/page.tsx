import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Joe Caruso, award-winning author of children's picture books about creation, identity, and purpose.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-peach py-16 sm:py-24">
        <Container className="grid items-center gap-12 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/about/joe-portrait.jpg"
              alt="Joe Caruso"
              fill
              sizes="(max-width: 640px) 90vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="mb-2 font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-teal">
              About Joe
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
              Award-winning author and grandpa of six.
            </h1>
            <p className="mt-5 border-l-4 border-amber py-1 pl-5 font-display text-lg font-medium leading-snug text-charcoal">
              &ldquo;I hope my books inspire children to see themselves
              through God&rsquo;s eyes. If we see ourselves as God sees us,
              then, through Christ, anything is possible.&rdquo;
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Life & Family" title="Beyond the books" align="left" />
          <div className="mt-6 flex flex-col gap-6 font-sans leading-relaxed text-charcoal/90 sm:flex-row-reverse sm:gap-10">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm shrink-0 overflow-hidden rounded-2xl shadow-sm sm:mx-0 sm:aspect-auto sm:max-w-md">
              <Image
                src="/images/about/joe-heather.jpg"
                alt="Joe Caruso with his wife Heather"
                fill
                sizes="(max-width: 640px) 90vw, 384px"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 text-[16.5px]">
              <p>
                Joe Caruso is a Christian children&rsquo;s book author who
                writes stories with big truths to help kids see themselves
                the way God sees them. He wrote his first children&rsquo;s
                picture book,{" "}
                <Link href="/books/freddy-finds-god" className="font-semibold text-link hover:underline">
                  Freddy Finds God
                </Link>
                , in 2020, followed by{" "}
                <Link href="/books/in-the-image-of-god" className="font-semibold text-link hover:underline">
                  In the Image of God
                </Link>{" "}
                and{" "}
                <Link href="/books/in-the-beginning-god" className="font-semibold text-link hover:underline">
                  In the Beginning&hellip;God
                </Link>
                .
              </p>
              <p>
                Before he was an author, Joe was a carpenter &mdash; but he
                always had a passion for teaching, and spent years teaching
                Sunday School at his home church. That experience led him on
                an unexpected path: Joe became a high school teacher,
                spending over two decades teaching construction to teenagers
                in St. Catharines, Ontario.
              </p>
              <p>
                Born in Niagara Falls, New York, Joe moved north of the
                border at the age of four with his mother and brother. They
                settled in the beautiful Niagara Region of Ontario, Canada,
                where he still lives today. Joe and his wife Heather raised
                three incredible children and now delight in six
                &ldquo;super incredible&rdquo; grandchildren who they love to
                bits.
              </p>
              <p>
                When Joe isn&rsquo;t writing, you&rsquo;ll find him playing
                guitar, dancing, or planning his next trip.
              </p>
              <p>
                Alongside his picture books, Joe writes the{" "}
                <Link href="/#newsletter" className="font-semibold text-link hover:underline">
                  Aim High newsletter
                </Link>{" "}
                and{" "}
                <Link href="/blog" className="font-semibold text-link hover:underline">
                  blog
                </Link>{" "}
                &mdash; short reflections that combine faith, Scripture, and
                practical living.
              </p>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/images/about/family.jpg"
              alt="The Caruso family"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/books" variant="primary">
              Explore the Books
            </Button>
            <Button href="/blog" variant="secondary">
              Read the Blog
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

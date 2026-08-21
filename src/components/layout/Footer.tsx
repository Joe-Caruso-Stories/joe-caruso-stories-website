import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BOOKS } from "@/lib/site-data";

function SocialIcon({ children, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      {...props}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber hover:text-on-gold"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1F323A]">
      <Container className="flex flex-col gap-10 py-14 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-2xl font-bold text-white">
            Joe Caruso
          </p>
          <p className="mt-0.5 font-display text-xs font-medium uppercase tracking-[0.42em] text-amber">
            Stories
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
            Inspirational children&rsquo;s books that help kids{" "}
            <span className="whitespace-nowrap">aim high.</span>
          </p>
          <div className="mt-4 flex gap-3">
            <SocialIcon
              href="https://www.facebook.com/JoeCarusoStories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
              </svg>
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/JoeCarusoStories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </SocialIcon>
            <SocialIcon href="mailto:joecarusostories@gmail.com" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        <div className="flex gap-14">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.06em] text-white">
              Books
            </p>
            <div className="mt-3.5 flex flex-col gap-2.5">
              {BOOKS.map((book) => (
                <Link
                  key={book.slug}
                  href={`/books/${book.slug}`}
                  className="font-sans text-sm text-white/70 hover:text-amber"
                >
                  {book.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.06em] text-white">
              Explore
            </p>
            <div className="mt-3.5 flex flex-col gap-2.5">
              <Link href="/about" className="font-sans text-sm text-white/70 hover:text-amber">
                About Joe
              </Link>
              <Link href="/blog" className="font-sans text-sm text-white/70 hover:text-amber">
                Blog
              </Link>
              <Link href="/#newsletter" className="font-sans text-sm text-white/70 hover:text-amber">
                Newsletter
              </Link>
              <Link href="/contact" className="font-sans text-sm text-white/70 hover:text-amber">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Container className="flex flex-wrap justify-between gap-3 border-t border-white/15 py-6">
        <span className="font-sans text-xs text-white/50">
          © {year} Joe Caruso Stories. All rights reserved.
        </span>
      </Container>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "./nav-links";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper shadow-[0_5px_14px_0_rgba(36,59,107,0.08)]">
      <Container
        className={`flex items-center justify-between transition-[height] duration-300 ease-in-out ${
          isScrolled ? "h-16 sm:h-18" : "h-24 sm:h-26"
        }`}
      >
        <Link href="/" aria-label="Joe Caruso Stories home">
          <Image
            src="/images/brand/logo-new.png"
            alt="Joe Caruso Stories — Aim High"
            width={1200}
            height={375}
            style={{ width: "auto" }}
            className={`transition-[height] duration-300 ease-in-out ${
              isScrolled ? "h-[52px] sm:h-[60px]" : "h-[80px] sm:h-[92px]"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-bold uppercase tracking-[0.08em] text-charcoal/90 transition-colors hover:text-amber-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}

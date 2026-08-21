"use client";

import { useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/site-data";

const PAGE_SIZE = 3;
const PAGE_COUNT = Math.ceil(TESTIMONIALS.length / PAGE_SIZE);

function getPageItems(pageIndex: number) {
  return TESTIMONIALS.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE);
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "right" ? "Show next reviews" : "Show previous reviews"}
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-paper text-charcoal shadow-md transition-colors duration-150 hover:text-amber-deep"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {direction === "right" ? <path d="M9 6l6 6-6 6" /> : <path d="M15 6l-6 6 6 6" />}
      </svg>
    </button>
  );
}

function ReviewPage({ pageIndex, widthPct }: { pageIndex: number; widthPct: number }) {
  return (
    <div className="grid flex-shrink-0 gap-6 sm:grid-cols-3" style={{ width: `${widthPct}%` }}>
      {getPageItems(pageIndex).map((t, i) => (
        <figure
          key={i}
          className="flex flex-col rounded-[20px] border border-sand bg-paper p-7"
        >
          <div className="font-display text-5xl leading-[0.6] text-amber/70">&ldquo;</div>
          <blockquote className="mt-3 font-sans text-[15.5px] leading-relaxed text-charcoal sm:h-[178px] sm:overflow-hidden sm:[display:-webkit-box] sm:[-webkit-box-orient:vertical] sm:[-webkit-line-clamp:7]">
            {t.quote}
          </blockquote>
          <figcaption className="mt-4 font-display text-[13.5px] font-bold text-taupe-faint">
            — {t.author}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function TestimonialStrip() {
  return (
    <>
      <div className="sm:hidden">
        <MobileSwipeCarousel />
      </div>
      <div className="hidden sm:block">
        {PAGE_COUNT <= 1 ? (
          <div className="grid gap-6 sm:grid-cols-3">
            <ReviewPage pageIndex={0} widthPct={100} />
          </div>
        ) : (
          <LoopingCarousel />
        )}
      </div>
    </>
  );
}

const MOBILE_CARD_HEIGHT = 370;

function MobileSwipeCarousel() {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="flex w-full flex-shrink-0 snap-center flex-col rounded-[20px] border border-sand bg-paper p-7"
            style={{ height: `${MOBILE_CARD_HEIGHT}px` }}
          >
            <div className="font-display text-5xl leading-[0.6] text-amber/70">&ldquo;</div>
            <blockquote className="mt-3 flex-1 overflow-hidden font-sans text-[15.5px] leading-relaxed text-charcoal [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:9]">
              {t.quote}
            </blockquote>
            <figcaption className="mt-4 font-display text-[13.5px] font-bold text-taupe-faint">
              — {t.author}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show review ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              i === active ? "bg-amber" : "bg-sand"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Slots are laid out as [clone-of-last-page, ...real pages, clone-of-first-page].
// Arrows always move the index in one direction; when we land on a clone slot,
// we snap (no transition) back to the matching real slot so the loop is seamless
// and "next" always slides left / "prev" always slides right, with no reversal.
function LoopingCarousel() {
  const slotCount = PAGE_COUNT + 2;
  const widthPct = 100 / slotCount;

  const slotToPageIndex = (slot: number) => {
    if (slot === 0) return PAGE_COUNT - 1;
    if (slot === slotCount - 1) return 0;
    return slot - 1;
  };

  const ANIM_MS = 500;
  const [index, setIndex] = useState(1);
  const [isSliding, setIsSliding] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Timing is driven by an explicit timeout matched to the CSS transition
  // duration rather than the `transitionend` event, since that event isn't
  // guaranteed to fire in every environment — relying on it left clicks
  // permanently stuck after the first slide in some cases.
  const snapBack = (realIndex: number) => {
    setTransitionEnabled(false);
    setIndex(realIndex);
    setTimeout(() => {
      setTransitionEnabled(true);
      setIsSliding(false);
    }, 50);
  };

  const goNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTransitionEnabled(true);
    const next = index + 1;
    setIndex(next);
    if (next === slotCount - 1) {
      setTimeout(() => snapBack(1), ANIM_MS);
    } else {
      setTimeout(() => setIsSliding(false), ANIM_MS);
    }
  };

  const goPrev = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTransitionEnabled(true);
    const prev = index - 1;
    setIndex(prev);
    if (prev === 0) {
      setTimeout(() => snapBack(PAGE_COUNT), ANIM_MS);
    } else {
      setTimeout(() => setIsSliding(false), ANIM_MS);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <ArrowButton direction="left" onClick={goPrev} />

      <div className="flex-1 overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${slotCount * 100}%`,
            transform: `translateX(-${index * widthPct}%)`,
            transition: transitionEnabled ? "transform 500ms ease-in-out" : "none",
          }}
        >
          {Array.from({ length: slotCount }).map((_, slot) => (
            <ReviewPage key={slot} pageIndex={slotToPageIndex(slot)} widthPct={widthPct} />
          ))}
        </div>
      </div>

      <ArrowButton direction="right" onClick={goNext} />
    </div>
  );
}

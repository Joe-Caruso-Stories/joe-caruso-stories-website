export function PullQuote({ children }: { children: string }) {
  return (
    <blockquote className="whitespace-pre-line border-l-4 border-amber py-1 pl-6 font-display text-lg italic leading-relaxed text-charcoal sm:text-xl">
      {children}
    </blockquote>
  );
}

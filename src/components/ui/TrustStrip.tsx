const ITEMS = [
  "Award-winning author",
  "4.7★ from 350+ reader reviews",
  "Read free on Kindle Unlimited",
];

export function TrustStrip() {
  return (
    <div className="border-b border-sand bg-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 py-5">
        {ITEMS.map((item, i) => (
          <div key={item} className="flex items-center gap-4">
            {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-sand sm:block" />}
            <span className="flex items-center gap-2.5 font-sans text-[15px] font-bold text-charcoal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-amber">
                <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 18l-6 3.4 1.4-6.8L2.2 9.1l6.9-.8z" />
              </svg>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

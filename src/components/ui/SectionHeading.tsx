export function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <div
          className={`mb-4 inline-flex flex-col gap-2 ${
            align === "center" ? "items-center" : "items-start"
          }`}
        >
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-teal">
            {eyebrow}
          </p>
          <span
            className="h-1 w-16 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #ef6a5a, #f2a01f, #7bc36b, #3e9bd6, #8f7bd0)",
            }}
          />
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

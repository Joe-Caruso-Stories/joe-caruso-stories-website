import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "sky" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-amber text-on-gold hover:bg-amber-deep shadow-sm shadow-amber/30 hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-charcoal border-2 border-charcoal hover:bg-charcoal hover:text-paper",
  sky: "bg-teal text-paper hover:bg-teal-deep shadow-sm shadow-teal/30 hover:-translate-y-0.5",
  ghost: "bg-transparent text-teal hover:text-charcoal",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-semibold tracking-wide transition-colors duration-150";

export function Button({
  href,
  variant = "primary",
  children,
  type = "button",
  className = "",
  disabled = false,
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${
    disabled ? "opacity-50 pointer-events-none" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

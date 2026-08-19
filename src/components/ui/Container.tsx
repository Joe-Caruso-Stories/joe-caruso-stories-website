import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1500px] px-[clamp(20px,3.6vw,52px)] ${className}`}
    >
      {children}
    </div>
  );
}

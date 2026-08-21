import { formatPostDate } from "@/lib/blog";

export function PostMeta({ date, author }: { date: string; author?: string }) {
  return (
    <p className="font-sans text-sm font-medium text-taupe">
      {author ? `By ${author} · ${formatPostDate(date)}` : formatPostDate(date)}
    </p>
  );
}

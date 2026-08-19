import { formatPostDate } from "@/lib/blog";

export function PostMeta({ date }: { date: string }) {
  return (
    <p className="font-sans text-sm font-medium text-taupe">
      {formatPostDate(date)}
    </p>
  );
}

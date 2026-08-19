import Link from "next/link";
import Image from "next/image";
import { PostMeta } from "@/components/blog/PostMeta";
import type { BlogPostMeta } from "@/lib/blog";

export function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-sand bg-paper p-1 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg"
    >
      {post.coverImage && (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-peach">
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(max-width: 640px) 90vw, 30vw"
            className="object-contain transition-transform duration-200 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <PostMeta date={post.date} />
        <h3 className="mt-2 font-display text-lg font-bold text-charcoal">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-taupe">
          {post.excerpt}
        </p>
        <span className="mt-4 font-sans text-sm font-semibold text-amber-deep">
          Read more →
        </span>
      </div>
    </Link>
  );
}

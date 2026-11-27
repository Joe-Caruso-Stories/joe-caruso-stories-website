import type { MetadataRoute } from "next";
import { BOOKS } from "@/lib/site-data";
import { getAllPosts } from "@/lib/blog";

// Served at /sitemap.xml. Lists every public page so search engines can find
// them, and updates itself: new books (site-data.ts) and new blog posts
// (src/content/blog/) are picked up automatically on the next deploy.
//
// URLs must match the canonical form exactly: https, no "www", no trailing
// slash (www already 301-redirects to the bare domain in middleware.ts).
const SITE_URL = "https://joecarusostories.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts(); // newest first
  const latestPostDate = posts[0] ? new Date(`${posts[0].date}T00:00:00Z`) : undefined;

  return [
    // Home and blog index both change whenever a new post is published.
    { url: SITE_URL, lastModified: latestPostDate },
    { url: `${SITE_URL}/books` },
    ...BOOKS.map((book) => ({ url: `${SITE_URL}/books/${book.slug}` })),
    { url: `${SITE_URL}/about` },
    { url: `${SITE_URL}/blog`, lastModified: latestPostDate },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
    })),
    { url: `${SITE_URL}/contact` },
  ];
}

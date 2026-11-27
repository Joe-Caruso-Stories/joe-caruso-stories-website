import type { MetadataRoute } from "next";

// Served at /robots.txt. Everything public is open to crawlers; only the
// behind-the-scenes form endpoints are off limits. The Sitemap line is how
// search engines discover /sitemap.xml on their own.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://joecarusostories.com/sitemap.xml",
  };
}

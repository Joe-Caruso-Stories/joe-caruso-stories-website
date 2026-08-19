// One-time migration script: pulls blog posts from the live WordPress REST
// API and writes them as Markdown files under src/content/blog/.
// Not part of the app build — run manually with `node scripts/migrate-wp-posts.mjs`.
import TurndownService from "turndown";
import fs from "node:fs";
import path from "node:path";

const turndown = new TurndownService({ headingStyle: "atx" });

function decodeEntities(str) {
  return str
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8212;/g, "—")
    .replace(/&#8211;/g, "–")
    .replace(/&#8230;/g, "…")
    .replace(/&#8243;/g, "″")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, "").trim());
}

function yamlEscape(str) {
  return str.replace(/"/g, '\\"');
}

async function main() {
  const res = await fetch(
    "https://joecarusostories.com/wp-json/wp/v2/posts?per_page=100&_embed"
  );
  const posts = await res.json();

  const outDir = path.join(process.cwd(), "src/content/blog");
  fs.mkdirSync(outDir, { recursive: true });

  for (const post of posts) {
    const title = decodeEntities(post.title.rendered);
    const excerpt = stripTags(post.excerpt.rendered).replace(
      /\s*Continue reading.*$/i,
      ""
    );
    const date = post.date.slice(0, 10);
    const slug = post.slug;
    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
    const coverImage = featuredMedia?.source_url ?? null;

    const markdownBody = turndown.turndown(post.content.rendered);

    const frontmatter = [
      "---",
      `title: "${yamlEscape(title)}"`,
      `date: "${date}"`,
      `excerpt: "${yamlEscape(excerpt)}"`,
      coverImage ? `coverImage: "${coverImage}"` : null,
      "---",
    ]
      .filter(Boolean)
      .join("\n");

    fs.writeFileSync(
      path.join(outDir, `${slug}.md`),
      `${frontmatter}\n\n${markdownBody}\n`
    );
    console.log(`wrote ${slug}.md`);
  }

  console.log(`\nDone. ${posts.length} posts written to ${outDir}`);
}

main();

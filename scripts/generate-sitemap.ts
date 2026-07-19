/**
 * Generates public/sitemap.xml at dev + build time.
 * Includes every static route plus every blog slug from src/data/blogPosts.ts.
 */
import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://drprasannaboddupally.in";

interface Entry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
  lastmod?: string;
}

const today = new Date().toISOString().split("T")[0];

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/treatments", changefreq: "monthly", priority: "0.9" },
  { path: "/protocol", changefreq: "monthly", priority: "0.8" },
  { path: "/pcos-program", changefreq: "monthly", priority: "0.95" },
  { path: "/pcos-pcod-treatment-hyderabad", changefreq: "monthly", priority: "0.95" },
  { path: "/thyrocure-program", changefreq: "monthly", priority: "0.95" },
  { path: "/thyroid-treatment-hyderabad", changefreq: "monthly", priority: "0.95" },
  { path: "/homeopathy-treatments-hyderabad", changefreq: "monthly", priority: "0.9" },
  { path: "/about-dr-prasanna-homeopathy-hyderabad", changefreq: "monthly", priority: "0.8" },
  { path: "/wellness-hub", changefreq: "monthly", priority: "0.7" },
  { path: "/testimonials", changefreq: "monthly", priority: "0.7" },
  { path: "/success-stories", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/health-articles", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.9" },
  { path: "/book-appointment", changefreq: "monthly", priority: "0.9" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/symptom-checker", changefreq: "monthly", priority: "0.6" },
  { path: "/gallery", changefreq: "monthly", priority: "0.5" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
];

// Parse blog slugs from src/data/blogPosts.ts without importing (avoids TS/asset resolution)
function readBlogSlugs(): { slug: string; date?: string }[] {
  const src = readFileSync(resolve("src/data/blogPosts.ts"), "utf-8");
  const slugs: { slug: string; date?: string }[] = [];
  const slugRe = /slug:\s*["']([^"']+)["'][\s\S]*?date:\s*["']([^"']+)["']/g;
  let m: RegExpExecArray | null;
  while ((m = slugRe.exec(src)) !== null) {
    slugs.push({ slug: m[1], date: m[2] });
  }
  return slugs;
}

const blogEntries: Entry[] = readBlogSlugs().map(({ slug, date }) => ({
  path: `/blog/${slug}`,
  changefreq: "monthly",
  priority: "0.7",
  lastmod: date && !Number.isNaN(Date.parse(date))
    ? new Date(date).toISOString().split("T")[0]
    : today,
}));

const entries: Entry[] = [...staticEntries, ...blogEntries];

const urls = entries
  .map((e) =>
    [
      "  <url>",
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${e.lastmod ?? today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n"),
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written with ${entries.length} entries (${blogEntries.length} blog posts)`);
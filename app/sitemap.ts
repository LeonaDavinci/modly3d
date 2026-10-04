import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/how-it-works`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/extensions`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/download`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/marketplace`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/roadmap`, changeFrequency: "monthly", priority: 0.6 },
  ];
}

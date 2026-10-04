import type { MetadataRoute } from "next";
import { issues } from "@/lib/docsTroubleshooting";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/how-it-works`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/download`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/marketplace`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/roadmap`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/extensions`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/docs`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/docs/install`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/docs/requirements`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/docs/troubleshooting`, changeFrequency: "monthly", priority: 0.6 },
    ...issues.map((i) => ({
      url: `${base}/docs/troubleshooting/${i.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    { url: `${base}/docs/faq`, changeFrequency: "monthly", priority: 0.6 },
  ];
}

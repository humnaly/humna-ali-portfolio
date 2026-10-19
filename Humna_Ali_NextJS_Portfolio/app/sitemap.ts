import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  // Avoid Emitting A Made-Up Production URL. Add NEXT_PUBLIC_SITE_URL Before Launch.
  return domain ? [{ url: `${domain}/`, changeFrequency: "monthly", priority: 1 }] : [];
}

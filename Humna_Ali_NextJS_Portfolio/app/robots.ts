import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(domain ? { sitemap: `${domain}/sitemap.xml` } : {}),
  };
}

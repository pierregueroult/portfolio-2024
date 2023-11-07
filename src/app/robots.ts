import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/admin", "/gallery"],
      },
      {
        userAgent: "googlebot-image",
        disallow: "/",
      },
    ],
    sitemap: "https://pierregueroult.dev/sitemap.xml",
  } as MetadataRoute.Robots;
}

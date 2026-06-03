import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const publicPaths = [
  "/",
  "/services",
  "/about",
  "/financing",
  "/contact",
  "/service-areas",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}

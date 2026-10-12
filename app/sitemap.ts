import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "/",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/products/caseproof",
    "/products/caseproof/security",
    "/contact",
  ];
  return paths.map((p) => ({ url: absoluteUrl(p), lastModified }));
}

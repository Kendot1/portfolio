import type { MetadataRoute } from "next";
import { featuredProjects } from "@/data/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return [{ url: baseUrl, lastModified: new Date() }, ...featuredProjects.map((project) => ({ url: baseUrl + "/work/" + project.id, lastModified: new Date() }))];
}
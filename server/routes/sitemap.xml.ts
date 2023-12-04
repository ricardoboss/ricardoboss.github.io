import { serverQueryContent } from "#content/server"
import { SitemapStream, streamToPromise } from "sitemap"

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({
    hostname: "https://ricardoboss.de",
  })

  sitemap.write({
    url: "/blog",
    changefreq: "monthly",
    priority: 0.7,
  })

  sitemap.write({
    url: "/projects",
    changefreq: "monthly",
    priority: 0.6,
  })

  sitemap.write({
    url: "/uses",
    changefreq: "yearly",
    priority: 0.5,
  })

  sitemap.write({
    url: "/portfolio",
    changefreq: "yearly",
    priority: 0.5,
  })

  sitemap.write({
    url: "/curriculum-vitae",
    changefreq: "yearly",
    priority: 0.5,
  })

  // Fetch all documents
  const entries = await serverQueryContent(event).find()
  for (const entry of entries) {
    sitemap.write({
      url: entry._path,
      changefreq: "yearly",
      priority: 0.5,
      lastmod: entry.createdAt,
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})

import {
  defineEventHandler,
  appendResponseHeaders,
  getRequestProtocol,
  getRequestHost,
} from "h3"
import { dedent } from "ts-dedent"

const dateToday = new Date().toISOString().split("T")[0] // Example: current date

// Example static list of sitemap entries
const sitemapEntriesConfig = [
  { name: "sitemaps/pages.xml", lastmod: dateToday },
  { name: "sitemaps/posts.xml", lastmod: dateToday },
]

export default defineEventHandler(async (event) => {
  const baseUrl = getRequestProtocol(event) + "://" + getRequestHost(event)

  // Generate <sitemap> entries from the static configuration
  const sitemapEntries = sitemapEntriesConfig
    .map(({ name, lastmod }) => {
      const sitemapUrl = `${baseUrl}/${name}`
      return dedent`
            <sitemap>
                <loc>${sitemapUrl}</loc>
                <lastmod>${lastmod}</lastmod>
            </sitemap>
        `
    })
    .join("\n")

  appendResponseHeaders(event, { "Content-Type": "application/xml" })

  // Return the compiled sitemap index
  return dedent`
        <?xml version="1.0" encoding="UTF-8"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${sitemapEntries}
        </sitemapindex>
    `
})

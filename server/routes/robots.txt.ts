import {
  appendResponseHeaders,
  defineEventHandler,
  getRequestHost,
  getRequestProtocol,
} from "h3"
import { dedent } from "ts-dedent"

export default defineEventHandler(async (event) => {
  const baseUrl = getRequestProtocol(event) + "://" + getRequestHost(event)
  appendResponseHeaders(event, { "Content-Type": "text/plain" })
  return dedent`
    User-agent: *
    Allow: /
    
    User-agent: *
    Disallow: /errors/
    
    Sitemap: ${baseUrl}/sitemaps.xml
  `
})

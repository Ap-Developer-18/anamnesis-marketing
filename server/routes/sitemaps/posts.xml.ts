import {
  appendResponseHeaders,
  defineEventHandler,
  getRequestHost,
  getRequestProtocol,
} from "h3"
import toSlug from "slug"
import { dedent } from "ts-dedent"
import type { IPost } from "~/types/dto/IPost"
import type { I18nString } from "~/types/util/I18nString"

type TLang = keyof I18nString
type TIndexable = {
  id: string
  slug?: string
  updated_at?: string
  created_at?: string
}

// const langs: TLang[] = ["en", "de"]
const langs: TLang[] = ["en"]

export default defineEventHandler(async (event) => {
  const baseUrl = getRequestProtocol(event) + "://" + getRequestHost(event)

  const posts: IPost[] = await $fetch(baseUrl + "/api/posts", {
    query: {
      status: "published",
    },
  })

  function toUrl(obj: TIndexable, folder = "", lang: TLang) {
    const code = lang !== langs[0] ? lang : null
    const id = obj.slug ? null : obj.id
    let slug = obj.slug ?? toSlug(obj[Object.keys(obj)[1]][lang])
    if (slug === "home") slug = ""
    return [baseUrl, code, folder, id, slug].filter((x) => x).join("/")
  }

  function toXml(obj: TIndexable, folder = "") {
    const lastmod = obj.updated_at ?? obj.created_at ?? ""
    let xml = ""
    for (const lang of langs) {
      // prettier-ignore
      xml += dedent`
        <url>
          <loc>${toUrl(obj, folder, lang)}</loc>
          <lastmod>${lastmod}</lastmod>
          ${langs.map((l) => dedent`
            <xhtml:link
              rel="alternate"
              hreflang="${l}"
              href="${toUrl(obj, folder, l)}"
            />`).join("\n")}
        </url>\n
      `
    }
    return xml
  }

  appendResponseHeaders(event, { "Content-Type": "text/plain" })
  return dedent`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${posts.map((x) => toXml(x, "posts")).join("\n")}
    </urlset>
  `
})

import { defineEventHandler, getQuery } from "h3"

export default defineEventHandler(async (event) => {
  const bindings = getQuery(event)

  let sql = "SELECT * FROM pages"
  if (bindings.id) sql += " WHERE id = :id"
  if (bindings.slug) sql += " WHERE slug = :slug"

  const rows: any = await $fetch(import.meta.env.ORBITYPE_API_SQL_URL, {
    method: "POST",
    headers: { "X-API-KEY": import.meta.env.ORBITYPE_API_SQL_KEY },
    body: { sql, bindings },
  })

  return bindings.id || bindings.slug ? rows[0] : rows
})

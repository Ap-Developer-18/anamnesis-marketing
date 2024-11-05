import { defineEventHandler, getQuery } from "h3"

export default defineEventHandler(async (event) => {
  const bindings = getQuery(event)

  let sql = "SELECT * FROM posts"
  if (bindings.id) sql += " WHERE id = :id"
  if (bindings.orderBy) sql += " ORDER BY :orderBy:"
  if (bindings.desc === "true") sql += " DESC"
  if (bindings.limit) sql += " LIMIT :limit"
  if (bindings.offset) sql += " OFFSET :offset"

  const rows: any = await $fetch(import.meta.env.ORBITYPE_API_SQL_URL, {
    method: "POST",
    headers: { "X-API-KEY": import.meta.env.ORBITYPE_API_SQL_KEY },
    body: { sql, bindings },
  })
  return bindings.id ? rows[0] : rows
})

import type { I18nString } from "~/types/utils/I18nString"
import type { Section } from "~/types/utils/Section"

export interface IPage {
  id: string
  title: I18nString
  slug: string
  img: string
  keywords: any
  lead: I18nString
  sections: Section[]
  head: Record<any, any>
  created_at: string
  updated_at: string
}

<script setup lang="ts">
  import SafeHtml from "~/components/common/SafeHtml.vue"
  import type { I18nString } from "~/types/util/I18nString"
  import { useTranslate } from "~/composables/useTranslate"

  const p = defineProps<{
    title: I18nString
    content: I18nString
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="m-4 border border-gray-500 p-4">
    <h2 class="mb-2 font-semibold">{{ t(title) }}</h2>
    <SafeHtml :html="t(content)" />
  </section>
</template>

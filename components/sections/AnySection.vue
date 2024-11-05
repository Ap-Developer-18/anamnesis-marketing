<script setup lang="ts">
  import { h } from "vue"
  import type { Section } from "~/types/util/Section"

  const imports = import.meta.glob("~/components/sections/*.vue", { eager: true })
  const components = Object.values(imports).map((x: any) => x.default)

  const p = defineProps<{
    data: Section
  }>()

  const ErrorFallback = h("div", {
    class: "border",
    innerHTML: "section component not found",
  })
</script>

<template>
  <component
    :is="
      components.find((x) => x.__name === data._orbi.component) ?? ErrorFallback
    "
    v-bind="data"
  />
</template>

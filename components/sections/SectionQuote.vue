<script setup lang="ts">
  const p = defineProps<{
    text: string
  }>()
</script>

<template>
  <section class="border-b px-4 py-8">
    <blockquote class="text-center text-2xl font-semibold">
      «{{ text }}»
    </blockquote>
  </section>
</template>

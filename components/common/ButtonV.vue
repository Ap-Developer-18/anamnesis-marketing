<script setup lang="ts">
  const p = defineProps<{
    disabled?: boolean
    submit?: boolean
  }>()
</script>

<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :disabled="disabled"
    class="border text-center"
  >
    <slot />
  </button>
</template>

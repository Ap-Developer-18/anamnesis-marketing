<script setup lang="ts">
  import ButtonV from "./ButtonV.vue"

  defineProps<{
    title: string
    buttonTexts: string[]
  }>()
</script>

<template>
  <div class="bg-congress-blue-mix py-[140px] md:py-40 lg:py-[192px]">
    <div class="container mx-auto px-6">
      <h1
        class="text-center text-custom-5xl font-semibold leading-102 text-white"
      >
        {{ title }}
      </h1>
      <div
        class="flex flex-col items-center justify-center gap-6 pt-10 sm:flex-row"
      >
        <ButtonV
          v-for="(buttonText, index) of buttonTexts"
          :key="index"
          class="rounded-full border-0 bg-white px-8 py-4 text-xl font-semibold text-black duration-300 hover:bg-black hover:text-white"
        >
          {{ buttonText }}
        </ButtonV>
      </div>
    </div>
  </div>
</template>

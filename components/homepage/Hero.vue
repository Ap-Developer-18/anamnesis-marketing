<script setup lang="ts">
  import ButtonV from "~/components/common/ButtonV.vue"
</script>
<template>
  <div
    class="bg-hero bg-cover bg-center bg-no-repeat py-[170px] md:py-52 lg:py-60"
  >
    <div class="container mx-auto px-5 xl:max-w-[1248px] xl:px-0">
      <h1
        class="mx-auto max-w-[346px] break-words text-center text-custom-4xl font-semibold leading-100 sm:mx-0 sm:max-w-[896px] sm:text-start md:text-5xl lg:text-6xl"
      >
        Optimieren Sie Ihre Anamnese- und Zuweisungsprozesse mit Anamnesis®
      </h1>
      <div
        class="mx-auto flex max-w-[366px] flex-col items-center justify-center gap-6 pt-12 sm:mx-0 sm:flex-row sm:justify-normal"
      >
        <ButtonV
          class="rounded-[120px] border-0 bg-white hover:bg-black hover:text-white duration-300 px-8 py-4 text-xl font-semibold text-black"
        >
          Jetzt testen
        </ButtonV>
        <ButtonV
          class="rounded-[120px] border-[2.55px] hover:bg-black hover:border-black duration-300 border-white bg-transparent px-8 py-3.5 text-xl font-semibold text-white"
        >
          Tutorial
        </ButtonV>
      </div>
    </div>
  </div>
</template>

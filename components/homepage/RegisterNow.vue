<script setup lang="ts">
  import ButtonV from "~/components/common/ButtonV.vue"

  // Define the data for the cards
  const CARDS_DATA = [
    {
      src: "/images/png/anamnesis.png",
      alt: "anamnesis",
      title: "Zuweisung",
    },
    {
      src: "/images/png/allocation.png",
      alt: "allocation",
      title: "Zuweisung",
    },
    {
      src: "/images/png/surveys.png",
      alt: "surveys",
      title: "Umfragen",
    },
  ]
</script>

<template>
  <div
    class="-mb-[570px] mt-96 -translate-y-[37%] rounded-lg py-12 md:mb-[-450px] md:mt-52 md:-translate-y-1/2 lg:mb-[-180px] lg:mt-0"
  >
    <div class="container mx-auto px-8 sm:px-6 xl:max-w-[1246px] xl:px-0">
      <div
        class="relative z-10 flex flex-col items-center justify-center gap-12 rounded-lg bg-white p-6 after:pointer-events-none after:-top-12 after:left-[-99.99%] after:-z-10 after:h-full after:w-[200%] after:rounded-lg after:bg-white lg:flex-row lg:justify-between lg:gap-0 lg:bg-transparent lg:p-0 lg:after:absolute"
      >
        <div class="max-w-[314px]">
          <p
            class="text-lg font-semibold leading-155 tracking-[0.45px] text-black"
          >
            Unlimitierte Konsultationsanlässe
          </p>
          <p
            class="pt-4 text-lg font-semibold leading-155 tracking-[0.45px] text-black"
          >
            Individuelle Befragungsalgorithmen
          </p>
          <p
            class="pt-4 text-lg font-semibold leading-155 tracking-[0.45px] text-black"
          >
            Ortsunabhängig
          </p>
          <ButtonV
            class="mt-11 whitespace-nowrap rounded-[120px] border-[2.55px] border-black px-8 py-3 text-base font-bold text-black duration-300 hover:bg-black hover:text-white lg:max-w-[193px]"
          >
            Jetzt Registrieren
          </ButtonV>
        </div>
        <div
          class="flex w-full flex-wrap items-center gap-4 md:flex-nowrap lg:me-4 lg:w-[unset] xl:me-8"
        >
          <div
            v-for="(register, i) of CARDS_DATA"
            :key="i"
            class="flex w-full flex-col items-center justify-center rounded-lg bg-white pb-6 pt-8 shadow-cards duration-300 hover:bg-ice-berg lg:w-[180px] xl:w-[260px]"
          >
            <NuxtImg
              :src="register.src"
              :alt="register.alt"
              class="h-20 w-20"
            />
            <p class="pt-8 text-lg font-semibold leading-155 text-black">
              {{ register.title }}
            </p>
            <ButtonV
              class="mt-8 max-w-[140px] rounded-[120px] border-[2.55px] border-black px-8 py-[13.7px] text-base font-bold leading-125 text-black duration-300 hover:bg-black hover:text-white"
            >
              Entdecken
            </ButtonV>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

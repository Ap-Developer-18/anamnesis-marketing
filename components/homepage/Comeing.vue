<script setup lang="ts">
  import ButtonV from "~/components/common/ButtonV.vue"
</script>
<template>
  <div
    class="mx-auto px-6 py-6 sm:container md:py-10 xl:max-w-[1248px] xl:px-0"
  >
    <div class="rounded-lg border-2 border-soft-peach p-6 md:p-8 lg:p-10">
      <div class="flex items-center justify-between gap-4">
        <h2
          class="custom-xs:text-2xl text-xl font-semibold leading-120 text-black md:text-3xl"
        >
          Bald verfügbar
        </h2>
        <NuxtLink to="#" class="group">
          <NuxtImg
            src="/images/svg/edit-blue.svg"
            alt="edit blue"
            width="40"
            height="40"
            class="size-10 object-cover duration-300 group-hover:scale-95"
          />
        </NuxtLink>
      </div>
      <div
        class="my-6 w-full rounded-lg bg-linear-deep-blue py-[137px] md:my-8"
      >
        <h2
          class="custom-xs:text-3xl text-center text-2xl font-semibold leading-120 text-white"
        >
          Anamnesis® Global
        </h2>
        <ButtonV
          class="mx-auto mt-8 w-max rounded-full border-2 border-white px-7 py-2 text-base font-bold uppercase leading-150 duration-300 hover:bg-white hover:text-black"
        >
          Bald verfügbar
        </ButtonV>
      </div>
      <p
        class="custom-xs:text-lg max-w-[972px] text-base font-bold leading-140 tracking-[0.5px] text-black md:text-xl"
      >
        Es gibt hunderte von Aufgaben, die täglich durch "intercultural" tätige,
        medizinische Fachkräfte auf der ganzen Welt erledigt werden müssen, und
        jede Aufgabe, die nicht vollständig erfüllt wird, kann die
        Patientenversorgung gefährden. Anamnesis® Global hilft Ihnen dabei!
      </p>
    </div>
  </div>
</template>

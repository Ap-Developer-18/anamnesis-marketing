<script setup lang="ts">
  const SPONSERS_DATA_LISTS = [
    {
      title: "Das labor team AG unterstützt das Projekt als Co-Sponsor.",
      sponsors: ["/images/webp/sponsors-team-labor.webp"],
    },
    {
      title: "Unterstützt durch:",
      sponsors: [
        "/images/webp/sponsors-genisuisse.webp",
        "/images/webp/sponsors-department.webp",
      ],
    },
  ]
</script>

<template>
  <div
    class="mx-auto max-sm:mb-12 max-sm:mt-8 px-5 py-6 sm:container sm:py-[60px] xl:max-w-[1248px] xl:px-0"
  >
    <h2 class="pb-2 font-roboto text-3xl font-bold leading-120 text-black">
      Sponsoren
    </h2>
    <div
      v-for="(obj, outerIndex) of SPONSERS_DATA_LISTS"
      :key="outerIndex"
      :class="outerIndex === 0 && 'mb-8 sm:mb-[50px]'"
    >
      <h3
        class="pb-8 font-roboto text-2xl font-normal leading-120 text-black sm:text-custom-2xl"
      >
        {{ obj.title }}
      </h3>
      <div class="flex flex-col gap-5 md:flex-row">
        <div
          v-for="(data, innerIndex) of obj.sponsors"
          :key="innerIndex"
          class="flex h-[191px] w-full items-center justify-center rounded-lg hover:shadow-md duration-300 shadow-custom-sm min-[428px]:w-[380px]"
        >
          <NuxtImg
            :class="
              outerIndex === 0
                ? 'h-[131px] w-[138px]'
                : innerIndex === 0
                  ? 'h-[75px] w-[248px]'
                  : innerIndex === 1
                    ? 'h-[104px] w-[248px]'
                    : ''
            "
            :src="data"
            alt="sponsors img"
            class="mx-auto max-w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

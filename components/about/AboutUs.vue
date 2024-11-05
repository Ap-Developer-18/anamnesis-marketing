<script setup lang="ts">
const paragraphs = [
  "Wir setzen uns Tag für Tag dafür ein, für mehr Gesundheit, für einen besseren Zugang zur Gesundheitsversorgung und für effiziente Prozesse für die Pflegende, Ärzt*innen und Therapeut*innen wie für Klinken zu ermöglichen.",
  "Wir entwickeln übergreifende medizinische Kommunikationsprozesse im Versorgungsalltag zugunsten der Menschen und Gesundheit.",
  "Wir gestalten gemeinsam mit Ihnen einen effizienten Workflow, einen einheitlichen, betriebsinternen und standardisierten Arbeitsvorgang, der die Qualität der Gesundheitsversorgung verbessert.",
  "Wir unterstützen Sie am Point of Care."
];
</script>

<template>
  <div class="mx-auto px-6 sm:container xl:max-w-[1248px]">
    <div
      class="p-6 md:p-8 rounded-lg shadow-cards bg-white max-md:mb-0 max-lg:mb-14 lg:mb-[72px] relative bottom-[58px] lg:bottom-24">
      <NuxtImg src="/images/png/about-responsive.png" width="332" height="221"
        class="h-[221px] w-full rounded-lg object-top object-cover sm:hidden mb-4" alt="about-responsive-image" />
      <h2 class="font-semibold text-3xl leading-120 h-9 text-black ">Über uns</h2>
      <p v-for="(paragraph, index) of paragraphs" :key="index" class="text-lg leading-6 text-black mt-4"
        :class="{ 'md:pr-12': index === 2 }">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>
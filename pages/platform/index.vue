<script setup lang="ts">
  import Commonhero from "~/components/common/CommonHero.vue"
  import AnamnesisPlatform from "~/components/platform/AnamnesisPlatform.vue"
</script>
<template>
  <div>
    <Commonhero
      title="Die Plattform Anamnesis®"
      :buttonTexts="['Jetzt testen']"
    />
    <AnamnesisPlatform />
  </div>
</template>

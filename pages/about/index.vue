<script setup lang="ts">
  import CommonHero from "~/components/common/CommonHero.vue"
  import AboutUs from "~/components/about/AboutUs.vue"
</script>
<template>
  <div>
    <CommonHero title="Über Uns" :buttonTexts="['Jetzt testen']" />
    <AboutUs />
  </div>
</template>

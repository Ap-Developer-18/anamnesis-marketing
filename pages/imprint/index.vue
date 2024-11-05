<script setup lang="ts">
  import CommonHero from "~/components/common/CommonHero.vue"
  import Imprint from "~/components/legal/imprint/Imprint.vue"
</script>
<template>
  <div>
    <CommonHero title="Impressum" :buttonTexts="['Jetzt testen']" />
    <Imprint />
  </div>
</template>

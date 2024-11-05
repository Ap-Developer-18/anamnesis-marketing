<script setup lang="ts">
  import Commonhero from "~/components/common/CommonHero.vue"
  import IndividualPricing from "~/components/pricing/IndividualPricing.vue"
</script>
<template>
  <div>
    <Commonhero
      title="Preise"
      :buttonTexts="['Jetzt testen', 'Qualität & Prozesse']"
    />
    <IndividualPricing />
  </div>
</template>

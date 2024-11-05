<script setup lang="ts">
  import CommonHero from "~/components/common/CommonHero.vue"
  import DataProtection from "~/components/legal/data-protection/DataProtection.vue"
</script>

<template>
  <div>
    <CommonHero title="Datenschutz" :buttonTexts="['Jetzt testen']" />
    <DataProtection />
  </div>
</template>

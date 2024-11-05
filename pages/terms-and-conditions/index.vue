<script setup lang="ts">
  import CommonHero from "~/components/common/CommonHero.vue"
  import TermsConditions from "~/components/legal/terms-and-conditions/TermsConditions.vue"
</script>
<template>
  <div>
    <CommonHero title="AGB" :buttonTexts="['Jetzt testen']" />
    <TermsConditions />
  </div>
</template>

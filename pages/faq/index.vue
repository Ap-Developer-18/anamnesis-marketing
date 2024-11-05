<script setup lang="ts">
  import Commonhero from "~/components/common/CommonHero.vue"
  import Faq from "~/components/frequently-ask-question/Faq.vue"
</script>

<template>
  <div>
    <Commonhero
      title="Häufig gestellte Fragen"
      :buttonTexts="['Jetzt testen']"
    />
    <Faq />
  </div>
</template>

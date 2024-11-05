<script setup lang="ts">
  import Commonhero from "~/components/common/CommonHero.vue"
  import AnamnesisQuality from "~/components/quality/AnamnesisQuality.vue"
</script>
<template>
  <div>
    <Commonhero
      title="Anamnesis® verbindet Ihre 
Expertise mit Ihren Patient:innen 
und mit Ihren Kolleg:innen "
      :buttonTexts="['Jetzt testen']"
    />
    <AnamnesisQuality />
  </div>
</template>

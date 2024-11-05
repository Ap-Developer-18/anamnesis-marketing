<script setup lang="ts">
  import Commonhero from "~/components/common/CommonHero.vue"
  import Blogs from "~/components/blog/Blogs.vue"
</script>
<template>
  <div>
    <Commonhero title="Blog" :buttonTexts="['Jetzt testen']" />
    <Blogs />
  </div>
</template>

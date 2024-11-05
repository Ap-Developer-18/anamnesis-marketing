<script setup lang="ts">
  import Commonhero from "~/components/common/CommonHero.vue"
  import BlogPost from "~/components/blog/BlogPost.vue"
</script>
<template>
  <div>
    <Commonhero title="Blog" :buttonTexts="['Jetzt testen']" />
    <BlogPost />
  </div>
</template>

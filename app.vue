<script setup lang="ts">
  import { useHead } from "#imports"
  import { useI18n } from "#i18n"

  const { locale } = useI18n()

  useHead({
    titleTemplate: (x) => (x ? `${x} | Anamnesis` : "Anamnesis"),
    htmlAttrs: {
      lang: locale.value,
    },
  })
</script>

<template>
  <!--eslint-disable vue/no-multiple-template-root-->
  <Head>
    <Link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
    />
  </Head>

  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

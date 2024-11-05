<script setup lang="ts">
  import { useHead, useRoute, navigateTo, useTranslate } from "#imports"
  import type { IPage } from "~/types/dto/IPage"
  import AnySection from "~/components/sections/AnySection.vue"
  import { fn } from "~/functions/fn"

  const t = useTranslate()

  const route = useRoute()
  const slug = route.params["slug"] || "home"

  const page: IPage = await $fetch("/api/pages", { query: { slug } })

  if (!page) await navigateTo("/errors/404")

  useHead({
    ...page?.head,
    title: `${fn.truncateText(t(page.title), 60)}`,
    link: [
      {
        rel: "canonical",
        href: `https://www.webentertainer.ch/${page.slug === 'home' ? "" : page.slug }`,
      },
    ],
    meta: [
      {
        name: "description",
        content: `${fn.truncateText(fn.removeHtml(t(page.lead)), 160)}`,
      },
      {
        name: "keywords",
        content: `${page.keywords.join(", ")}`,
      },
      {
        property: "og:title",
        content: `${t(page.title)}`,
      },
      {
        property: "og:url",
        content: `https://www.webentertainer.ch/${page.slug === 'home' ? "" : page.slug }`,
      },
      {
        property: "og:site_name",
        content: "Webdesign Schweiz - Corporate Websites, Web-Apps & Apps",
      },
      {
        property: "og:locale",
        content: "de_DE",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:image",
        content: `${page.img}`,
      },
      {
        property: "og:image:secure_url",
        content: `${page.img}`,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: `${t(page.title)}`,
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:site",
        content: "@webentertainer1",
      },
      {
        property: "twitter:creator",
        content: "@webentertainer1",
      },
      {
        property: "twitter:title",
        content: `${t(page.title)}`,
      },
      {
        property: "twitter:description",
        content: `${fn.truncateText(fn.removeHtml(t(page.lead)), 160)}`,
      },
      {
        property: "twitter:image:src",
        content: `${page.img}`,
      },
      {
        name: "DC.title",
        content: `${t(page.title)}`,
      },
      {
        name: "DC.description",
        content: `${fn.truncateText(fn.removeHtml(t(page.lead)), 160)}`,
      },
      {
        name: "DC.identifier",
        content: `https://www.webentertainer.ch/${page.slug === 'home' ? "" : page.slug }`,
      },
      {
        name: "DC.language",
        content: "de_DE",
      },
      {
        name: "DC.publisher",
        content: "Webentertainer GmbH",
      },
      {
        name: "DC.coverage",
        content: "World",
      },
    ],
    script: {
      // @ts-ignore
      type: "application/ld+json",
      innerHTML: {
        "@context": "https://schema.org",
        "@type": "Website",
        headline: `${t(page.title)}`,
        name: `${t(page.title)}`,
        description: `${t(page.lead)}`,
        datePublished: `${page.created_at}`,
        dateModified: `${page.updated_at}`,
        keywords: `${page.keywords.join(", ")}`,
        author: {
          "@type": "Person",
          "@id": "https://www.webentertainer.ch/blog",
          name: "Julian Vorraro",
          url: "https://www.webentertainer.ch/blog",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.webentertainer.ch",
          name: "Webentertainer GmbH",
          logo: {
            "@type": "ImageObject",
            "@id":
              "https://s3.eu-central-1.wasabisys.com/orbitype-webentertainer/media/logotype.png",
            url: "https://s3.eu-central-1.wasabisys.com/orbitype-webentertainer/media/logotype.png",
            width: "600",
            height: "60",
          },
        },
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.webentertainer.ch/blog/",
          name: "Webentertainer GmbH",
          publisher: {
            "@type": "Organization",
            "@id": "https://www.webentertainer.ch/",
            name: "Webentertainer GmbH",
          },
        },
        image: {
          "@type": "ImageObject",
          url: `${page.img}`,
          width: "1200",
          height: "630",
        },
      },
    },
  })
</script>

<template>
  <main v-if="page">
    <span class="sr-only">{{ t(page.title )}}</span>
    <AnySection
      v-for="(section, i) of page.sections"
      :key="i"
      :data="section"
    />
  </main>
</template>

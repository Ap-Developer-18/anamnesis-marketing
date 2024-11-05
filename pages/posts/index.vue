<script setup lang="ts">
  import { ref, watch } from "vue"
  import type { IPost } from "~/types/dto/IPost"
  import ButtonV from "~/components/common/ButtonV.vue"
  import { dt } from "~/functions/dt"
  import { useHead } from "#imports"
  import { useTranslate } from "~/composables/useTranslate"
  import slug from "slug"
  import { useI18n } from "#i18n"
  import { Store } from "~/services/Store"
  import Widget from "./_Widget.vue"

  const t = useTranslate()

  const { locale, availableLocales } = useI18n()

  const posts = ref<IPost[]>([])
  const pagination = ref(0)

  async function load() {
    const limit = 2
    posts.value = await $fetch("/api/posts", {
      query: {
        limit,
        offset: pagination.value * limit,
        orderBy: "created_at",
        desc: false,
      },
    })
  }

  await load()
  watch(pagination, load)

  useHead({ title: "posts" })
</script>

<template>
  <main class="space-y-4 p-4">
    <!-- example pagination -->
    <NuxtLinkLocale
      v-for="p of posts"
      :key="p.id"
      :to="`/posts/${p.id}/${slug(t(p.title))}`"
      class="block border p-2"
    >
      <h2>{{ t(p.title) }}</h2>
      <time class="text-xs">{{ dt.toLocal(p.created_at) }}</time>
    </NuxtLinkLocale>

    <!-- example pagination -->
    <div class="grid grid-cols-3 gap-2">
      <ButtonV @click="pagination--">prev</ButtonV>
      <ButtonV @click="pagination = 0">{{ pagination }}</ButtonV>
      <ButtonV @click="pagination++">next</ButtonV>
    </div>

    <!-- example lang switcher -->
    <div class="flex justify-center divide-x px-2 children:px-2">
      <button
        v-for="l of availableLocales"
        :key="l"
        @click="locale = l"
        :class="locale === l ? 'font-bold' : ''"
      >
        {{ l.toUpperCase() }}
      </button>
    </div>

    <!-- other examples -->
    <hr />
    <button @click="Store.counter++">Store.counter: {{ Store.counter }}</button>
    <Widget />
  </main>
</template>

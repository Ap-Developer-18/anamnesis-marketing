<script setup lang="ts">
  import { useHead, useRoute } from "#imports"
  import { useTranslate } from "~/composables/useTranslate"
  import type { IPost } from "~/types/dto/IPost"
  import type { IComment } from "~/types/dto/IComment"
  import { dt } from "~/functions/dt"
  import InputV from "~/components/common/InputV.vue"
  import ButtonV from "~/components/common/ButtonV.vue"
  import { reactive } from "vue"
  import { showError } from "#app"
  import SafeHtml from "~/components/common/SafeHtml.vue"

  const t = useTranslate()

  const route = useRoute()
  const id = route.params["id"]

  const post: IPost = await $fetch("/api/posts", { query: { id } })
  if (!post) showError({ statusCode: 404 })

  const comments: IComment[] = await $fetch("/api/comments", {
    query: { post_id: id },
  })

  const newComment = reactive<Partial<IComment>>({
    text: "",
    post_id: id,
  })

  async function onSubmit() {
    try {
      const resp: IComment = await $fetch("/api/comments", {
        method: "POST",
        body: newComment,
      })
      newComment.text = ""
      comments.unshift(resp)
    } catch (e) {
      alert(e)
    }
  }

  useHead({ title: t(post.title) })
</script>

<template>
  <main class="space-y-4 p-4">
    <NuxtLinkLocale to="/posts" class="underline">
      ← back
    </NuxtLinkLocale>

    <h1>{{ t(post.title) }}</h1>
    <time class="text-xs">{{ dt.toLocal(post.created_at) }}</time>
    <SafeHtml :html="post.lead" />

    <ul class="list-disc pl-4">
      <li v-for="c of comments" :key="c.id">
        <p>{{ c.text }}</p>
      </li>
    </ul>

    <form @submit.prevent="onSubmit" class="flex gap-2">
      <InputV
        v-model="newComment.text"
        placeholder="new comment"
        required
        class="grow"
      />
      <ButtonV submit>Send</ButtonV>
    </form>
  </main>
</template>

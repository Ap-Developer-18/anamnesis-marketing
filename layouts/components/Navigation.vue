<script setup lang="ts">
  import { ref } from "vue"
  import { useTranslate } from "~/composables/useTranslate"
  import ButtonV from "~/components/common/ButtonV.vue"

  const t = useTranslate()
  const show = ref<boolean>(false)
  const isMobile = ref<boolean>(false)
  const header = {
    title: {
      en: "Anamnesis®",
    },
    data: [
      { title: { en: "home" }, links: "/" },
      { title: { en: "pricing" }, links: "/pricing" },
      { title: { en: "FAQ" }, links: "/faq" },
      { title: { en: "about" }, links: "/about" },
      { title: { en: "platform" }, links: "/platform" },
      { title: { en: "qualitat" }, links: "/quality" },
      { title: { en: "blog" }, links: "/blog" },
    ],
  }

  // Reactive language state
  const selectedLanguage = ref("de")

  // Reactive state to manage the visibility of the navigation menu

  // Update language function
  function updateLanguage(lang: string) {
    selectedLanguage.value = lang
    // Additional logic to handle language change can be added here
  }
  function toggleMenu() {
    console.log("Button clicked")
    console.log(show.value, " show.value")
    show.value = !show.value
    if (show.value && isMobile.value) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  // code to handle responsive behavior
  if (process.client) {
    const mediaQuery = window.matchMedia("(max-width: 1279.98px)")
    const handleResize = () => {
      isMobile.value = mediaQuery.matches
      if (!isMobile.value) {
        show.value = false
      }
    }
    mediaQuery.addListener(handleResize)
    handleResize()
  }
</script>

<template>
  <nav
    class="absolute left-0 top-0 flex w-full items-center justify-between gap-4 bg-smoky-black bg-opacity-10 px-8 py-7"
  >
    <NuxtLink to="#" class="text-2xl font-bold text-white">
      {{ t(header.title) }}
    </NuxtLink>
    <div
      v-if="show || !isMobile"
      class="-right-full flex items-center gap-10 duration-300 max-xl:fixed max-xl:top-0 max-xl:z-50 max-xl:min-h-screen max-xl:w-full max-xl:flex-col max-xl:justify-center max-xl:bg-navo-blue"
    >
      <NuxtLinkLocale
        class="relative text-xl font-bold capitalize tracking-[0.5px] text-white after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
        v-for="l of header.data"
        :key="l.links"
        :to="l.links"
      >
        {{ t(l.title) }}
      </NuxtLinkLocale>
      <div
        class="flex flex-col gap-4 max-xl:w-full max-xl:max-w-[366px] xl:flex-row"
      >
        <ButtonV
          class="rounded-[88px] border-0 bg-white px-6 py-[10px] text-xl font-semibold text-black duration-300 hover:bg-black hover:text-white max-xl:w-full"
        >
          Register
        </ButtonV>
        <ButtonV
          class="rounded-[88px] bg-transparent px-6 py-[10px] text-xl font-semibold text-white duration-300 hover:border-black hover:bg-black max-xl:w-full"
        >
          Login
        </ButtonV>
      </div>
      <div class="flex">
        <select
          v-model="selectedLanguage"
          class="text-xl font-semibold uppercase text-white"
        >
          <option class="bg-black" value="de">DE</option>
          <option class="bg-black" value="en">EN</option>
        </select>
      </div>
    </div>

    <ButtonV
      @click="toggleMenu()"
      class="relative z-[51] flex size-10 flex-col items-center justify-center gap-[3px] border-0 xl:hidden"
    >
      <span class="h-0.5 w-[18px] rounded-lg bg-white"></span>
      <span class="h-0.5 w-[18px] rounded-lg bg-white"></span>
      <span class="h-0.5 w-[18px] rounded-lg bg-white"></span>
    </ButtonV>
  </nav>
</template>

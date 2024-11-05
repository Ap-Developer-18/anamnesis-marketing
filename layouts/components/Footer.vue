<script setup lang="ts">
  const footer = {
    text: { en: "© Webentertainer GmbH" },
  }
  const CURRENT_YEAR = new Date().getFullYear()
  const FOOTER_LINKS = [
    {
      title: "Company Info",
      links: [
        { text: "Pricing", url: "#pricing" },
        { text: "About", url: "#about" },
        { text: "Platform", url: "#platform" },
        { text: "Quality", url: "#quality" },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          text: "Zürcherstrasse 20 4310 Rheinfelden",
          url: "#",
        },
        { text: "info@anamsesis.ch", url: "mailto:info@anamsesis.ch" },
        { text: "Blog", url: "#blog" },
      ],
    },
  ]
  const TEXT_BOTTOM_FOOTER = [
    {
      text: "AGB",
      url: "/terms-and-conditions",
    },
    {
      text: "Impressum",
      url: "/imprint",
    },
    {
      text: "Datenschutz",
      url: "/data-protection",
    },
  ]
</script>
<template>
  <footer class="bg-cerulean-blue pt-6 sm:pt-8 lg:pt-10">
    <div class="mx-auto px-6 sm:container xl:max-w-[1248px] xl:px-0">
      <div class="flex flex-col justify-between md:flex-row">
        <div class="w-full max-w-[400px] lg:max-w-[432px]">
          <NuxtLink to="#" class="flex w-min items-center gap-3">
            <h2 class="text-2xl font-bold leading-133 text-white">Anamnesis</h2>
            <!-- plus icon  -->
            <div
              class="flex size-6 items-center justify-center rounded-full bg-plus-blue shadow-custom-xl"
            >
              <NuxtImg
                src="/images/svg/plus.svg"
                alt="plus"
                width="13"
                height="13"
                class="size-[13px] object-cover"
              />
            </div>
          </NuxtLink>
          <p class="mt-6 text-base font-normal leading-150 text-white">
            Wir unterstützen Sie am Point of Care
          </p>
          <p class="mt-2 text-base font-semibold leading-150 text-white">
            Anamnesis® is born, developed and powered in Switzerland
          </p>
          <div class="mt-6 flex items-center gap-6">
            <NuxtLink
              class="group"
              to="https://www.linkedin.com/"
              target="_blank"
            >
              <NuxtImg
                src="/images/svg/linkdin-icon.svg"
                alt="linkdin"
                width="32"
                height="32"
                class="size-8 object-cover duration-300 group-hover:scale-95"
              />
            </NuxtLink>
            <NuxtLink
              class="group"
              to="https://www.facebook.com/"
              target="_blank"
            >
              <NuxtImg
                src="/images/svg/facebook-icon.svg"
                alt="facebook"
                width="32"
                height="32"
                class="size-8 object-cover duration-300 group-hover:scale-95"
              />
            </NuxtLink>
          </div>
        </div>
        <div
          class="mt-10 flex flex-col gap-10 sm:flex-row sm:gap-10 md:mt-0 lg:gap-[110px]"
        >
          <ul
            v-for="(section, sectionIndex) of FOOTER_LINKS"
            :key="sectionIndex"
          >
            <li class="text-xl font-semibold leading-117 text-white">
              {{ section.title }}
            </li>
            <li
              v-for="(link, linkIndex) of section.links"
              :key="linkIndex"
              class="max-w-[145px]"
            >
              <NuxtLink
                :to="link.url"
                :class="linkIndex === 0 ? 'mt-6' : 'mt-4'"
                class="relative z-10 block w-full text-base font-normal leading-117 text-white text-opacity-80 after:absolute after:-bottom-0.5 after:left-1/2 after:h-[1px] after:w-0 after:bg-white after:bg-opacity-80 after:duration-300 hover:after:left-0 hover:after:w-full"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="mb-4 mt-10 flex items-center gap-6 md:hidden">
        <NuxtLink
          v-for="(link, i) of TEXT_BOTTOM_FOOTER"
          :to="link.url"
          :key="i"
          class="relative z-10 text-sm font-normal leading-117 text-white after:absolute after:-bottom-0.5 after:left-1/2 after:h-[1px] after:w-0 after:bg-white after:bg-opacity-80 after:duration-300 hover:after:left-0 hover:after:w-full"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
      <div
        class="flex flex-wrap justify-center gap-4 border-t border-t-white border-opacity-50 py-4 md:mt-[51px] md:justify-between"
      >
        <div class="flex items-center gap-6 max-md:hidden">
          <NuxtLink
            v-for="(link, i) of TEXT_BOTTOM_FOOTER"
            :to="link.url"
            :key="i"
            class="relative z-10 text-sm font-normal leading-117 text-white after:absolute after:-bottom-0.5 after:left-1/2 after:h-[1px] after:w-0 after:bg-white after:bg-opacity-80 after:duration-300 hover:after:left-0 hover:after:w-full"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
        <p class="text-center text-sm font-normal leading-117 text-white">
          Copyright ©2014-{{ CURRENT_YEAR }} - ADGI - All Rights Reserved - AG
          - Switzerland
        </p>
      </div>
    </div>
  </footer>
</template>

import type { NuxtConfig } from "nuxt/config"
import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-28",
  ssr: true,
  devtools: { enabled: true },
  imports: {
    autoImport: false,
    global: false,
    dirs: [],
  },
  components: {
    global: false,
    dirs: [],
  },
  telemetry: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/i18n"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    domains: ["localhost", "s3.eu-central-1.wasabisys.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  nitro: {
    compressPublicAssets: true,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: "bundler",
      },
    },
  },
  experimental: {
    typedPages: true,
  },
  build: {
    transpile: [],
  },
  hooks: {
    "pages:extend"(pages) {
      // exclude _widget components
      pages = pages.filter((x) => !x.path.includes("_"))
    },
  },
} as NuxtConfig)

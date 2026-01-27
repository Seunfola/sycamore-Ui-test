// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@nuxtjs/google-fonts",
  ],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      "Plus Jakarta Sans": {
        wght: [400, 500, 600, 700, 800],
      },
      Allan: {
        ital: [400, 700],
      },
      "Rethink Sans": {
        wght: [400, 800],
        ital: [400, 800],
      },
      "DM Sans": {
        wght: [400, 500, 700],
      },
    },
    display: "swap", 
    preload: true,
  },
  colorMode: {
    preference: "dark",
  },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      ignore: ["/admin"],
    },
    rollupConfig: {
      external: ["@iconify/utils", "@vue/shared"],
    },
    output: {
      publicDir: ".output/public",
    },
  },
  ssr: true,
});

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
    display: "swap", // Use 'swap' to ensure text is visible during font loading
    preload: true,
  },
  colorMode: {
    preference: "dark",
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            jakarta: ["Plus Jakarta Sans", "sans-serif"],
            sans: ["Rethink Sans", "sans-serif"],
            serif: ["Allan", "serif"],
            dm: ["DM Sans", "sans-serif"],
          },
        },
      },
    },
  },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
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

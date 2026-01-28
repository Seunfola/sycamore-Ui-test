export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/image", "@vueuse/motion/nuxt", "@nuxt/fonts"],

  css: ["~/assets/css/main.css"],

  // Corrected Font handling: 'display' is removed as it's default
  fonts: {
    families: [
      { name: "Plus Jakarta Sans", weights: [400, 500, 600, 700, 800] },
      { name: "Allan", weights: [400, 700], styles: ["italic", "normal"] },
      {
        name: "Rethink Sans",
        weights: [400, 800],
        styles: ["italic", "normal"],
      },
      { name: "DM Sans", weights: [400, 500, 700] },
    ],
  },

  colorMode: {
    preference: "dark",
  },

  nitro: {
    preset: "vercel",
    externals: {
      inline: ["@iconify/utils"],
    },
    vercel: {
      functions: {
        maxDuration: 30,
        memory: 3008,
      },
    },
  },

  icon: {
    serverBundle: "remote",
  },

  compatibilityDate: "2024-11-07",

  experimental: {
    componentIslands: true,
    headNext: true,
  },

  image: {
    provider: "ipx",
    quality: 80,
    format: ["webp", "avif"],
  },
});

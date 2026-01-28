export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/fonts"
  ],
  
  css: ["~/assets/css/main.css"],
  
  googleFonts: {
    families: {
      "Plus Jakarta Sans": [400, 500, 600, 700, 800],
      "Allan": {
        ital: [400, 700],
      },
      "Rethink Sans": {
        wght: [400, 800],
        ital: [400, 800],
      },
      "DM Sans": [400, 500, 700],
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
    preset: 'vercel',
    
    vercel: {
      functions: {
        maxDuration: 30,
        memory: 3008
      }
    }
  },
  
  compatibilityDate: '2024-11-07',
  
  experimental: {
    componentIslands: true,
    headNext: true
  },
  
  image: {
    provider: 'ipx',
    quality: 80,
    format: ['webp', 'avif']
  }
})
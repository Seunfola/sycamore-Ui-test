<script setup lang="ts">
useHead({
  title: 'Staco Finance - The Future of Modern Investing',
  meta: [
    { name: 'description', content: 'Experience the new standard of financial foundation. Secure, fast, and built for the modern investor.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'charset', content: 'utf-8' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/assets/finance-logo.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'bg-black text-white antialiased'
  }
})
</script>

<template>
  <NuxtLayout>
    <div class="selection:bg-blue-500/30">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Staco Finance - The Future of Modern Investing',
  meta: [
    { name: 'description', content: 'Experience the new standard of financial foundation. Secure, fast, and built for the modern investor.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'charset', content: 'utf-8' },
    { property: 'og:title', content: 'Staco Finance - The Future of Modern Investing' },
    { property: 'og:description', content: 'Experience the new standard of financial foundation. Secure, fast, and built for the modern investor.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://staco.finance' },
    { property: 'og:image', content: '/assets/dashboard.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Staco Finance' },
    { name: 'twitter:description', content: 'Experience the new standard of financial foundation.' },
    { name: 'twitter:image', content: '/assets/dashboard.png' },
    { name: 'theme-color', content: '#1F2334' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/assets/finance-logo.svg' },
    { rel: 'apple-touch-icon', href: '/assets/finance-logo.svg' },
    { rel: 'canonical', href: 'https://staco.finance' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Staco Finance',
        description: 'The Future of Modern Investing',
        url: 'https://staco.finance',
        applicationCategory: 'FinanceApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      })
    }
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

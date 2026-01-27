<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useWindowScroll()
const isSticky = computed(() => y.value > 30)

useHead({
  link: [ { rel: 'icon', type: 'image/svg+xml', href: '/assets/finance-logo.svg' } ]
})
</script>

<template>
  <div class="min-h-screen bg-[#06090F] text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden pt-16">

    <header 
      class="fixed top-0 left-0 right-0 z-[1000] flex justify-center pointer-events-none transition-all duration-500"
      :class="[isSticky ? 'pt-0' : 'pt-4']"
    >
      <nav 
        class="flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto glass-effect"
        :class="[isSticky ? 'w-full px-8 py-4 rounded-none border-b border-white/10' : 'w-[94%] max-w-[1100px] px-8 py-4 rounded-full border border-white/10 shadow-lg']"
      >
        <div class="flex items-center gap-3 shrink-0">
          <img src="/assets/finance-logo.svg" alt="Staco Logo" class="w-10 h-10 md:w-9 md:h-9" />
          <span class="font-extrabold text-xl tracking-tighter text-white hidden sm:block font-jakarta">Staco</span>
        </div>
        
        <div class="hidden lg:block">
           <MotionTabs />
        </div>
        
        <div class="flex items-center gap-5">
          <button class="hidden md:flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/5 transition-all glass-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-80">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              <path d="M2 12h20"/>
            </svg>
            <span class="font-bold text-[16px] tracking-widest text-white/90">EN</span>
            <svg width="10" height="10" viewBox="0 0 10 6" fill="none" class="opacity-60">
              <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <NuxtLink to="/#" class="hidden md:block text-[14px] font-bold text-white/70 hover:text-white transition-colors font-jakarta">
            Sign in
          </NuxtLink>

          <button class="bg-[#A7F3D0] hover:bg-white text-[#06090F] font-bold px-7 py-3 rounded-full transition-all text-[14px] font-jakarta shadow-md active:scale-95">
            Start Free
          </button>
        </div>
      </nav>
    </header>

    <main class="-mt-16">
      <FinanceHeroSection />
      <FinanceFeatureCards />
      <FinanceBuildingSection />
      <FinanceWhyChooseUs />
      <FinanceTestimonials />
    </main>

    <FinanceFooter />
  </div>
</template>

<style scoped>




/* Consistent Glassmorphism for both states */
.glass-effect {
  background: rgba(15, 20, 28, 0.6) !important;
  backdrop-filter: blur(12px) saturate(150%) !important;
  -webkit-backdrop-filter: blur(12px) saturate(150%) !important;
}

.glass-btn {
  background: rgba(255, 255, 255, 0.05);
}

nav {
  /* Hardware acceleration for smooth height/width morphing */
  will-change: width, padding, border-radius;
  transform: translateZ(0);
}
</style>
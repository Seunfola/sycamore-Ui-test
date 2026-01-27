<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useWindowScroll()
const isVisible = computed(() => y.value > 500)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="transform translate-y-10 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-10 opacity-0"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-10 right-10 z-[1000] w-14 h-14 bg-[#44C486] text-white rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(68,196,134,0.4)] hover:shadow-[0_20px_45px_rgba(68,196,134,0.6)] transition-all duration-300 group hover:-translate-y-2"
      aria-label="Back to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      
      <div class="absolute inset-0 rounded-full bg-[#44C486] opacity-20 group-hover:animate-ping -z-10" />
    </button>
  </Transition>
</template>

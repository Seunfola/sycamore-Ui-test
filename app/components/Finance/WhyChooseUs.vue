<template>
  <section class="py-[100px] md:py-[140px] bg-white overflow-hidden">
    <div class="container mx-auto px-4 max-w-[1240px]">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[150px] items-center">
        <div class="space-y-10">
          <div class="space-y-6">
            <span 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
              class="text-[#44C486] font-bold text-[15px] uppercase tracking-[0.25em] font-jakarta block"
            >
              Why Choose Us
            </span>
            <h2 
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
              class="text-[44px] md:text-[60px] font-bold text-[#111111] leading-[1.05] font-jakarta tracking-tight"
            >
              Manage team increase 
              <span class="inline-block text-[#44C486] min-w-[200px]">
                <Transition name="fade-up" mode="out-in">
                  <span :key="dynamicWords[currentIndex]">{{ dynamicWords[currentIndex] }}</span>
                </Transition>
              </span>
            </h2>
          </div>
          
          <p 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
            class="text-[#444444] text-[18px] leading-relaxed font-dm opacity-80 max-w-[540px]"
          >
            We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful nor again is there anyone.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 pt-4">
            <div 
              v-for="(benefit, i) in benefits" 
              :key="benefit" 
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 500, delay: 600 + (i * 100) } }"
              class="flex items-center gap-4 group"
            >
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CD196]/10 flex items-center justify-center transition-colors group-hover:bg-[#3CD196]/20">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 6L5.5 10L12.5 1.5" stroke="#3CD196" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="text-[#111111] text-[17px] font-jakarta">{{ benefit }}</span>
            </div>
          </div>
        </div>

        <div class="flex gap-4 md:gap-7 items-center"
             v-motion
             :initial="{ opacity: 0, scale: 0.95 }"
             :visible-once="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 400 } }">
          
          <div class="w-1/3 mt-20">
            <div class="rounded-[14px] overflow-hidden aspect-[1/1.8] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] ring-1 ring-black/5 hover:scale-105 transition-transform duration-700">
              <NuxtImg
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                class="w-full h-full object-cover"
                alt="Professional project lead managing team tasks and deliverables"
                loading="lazy"
                width="400"
                height="720"
              />
            </div>
          </div>

          <div class="w-1/3">
            <div class="rounded-[14px] overflow-hidden aspect-[1/2.2] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.15)] ring-1 ring-black/5 hover:scale-105 transition-transform duration-700">
              <NuxtImg
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                class="w-full h-full object-cover"
                alt="Team members collaborating on project work in modern office"
                loading="lazy"
                width="400"
                height="880"
              />
            </div>
          </div>

          <div class="w-1/3 mt-20">
            <div class="rounded-[14px] overflow-hidden aspect-[1/1.8] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] ring-1 ring-black/5 hover:scale-105 transition-transform duration-700">
              <NuxtImg
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                class="w-full h-full object-cover"
                alt="Client manager discussing project requirements with team"
                loading="lazy"
                width="400"
                height="720"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.font-dm {
  font-family: 'DM Sans', sans-serif;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const dynamicWords = ['productivity', 'efficiency', 'growth']
const currentIndex = ref(0)
let interval: any

const benefits = [
  "99% Survey Report",
  "Trusted by teams",
  "Self-Service"
]

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % dynamicWords.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

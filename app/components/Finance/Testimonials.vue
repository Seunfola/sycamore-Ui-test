

<template>
  <section class="flex flex-col items-center justify-center py-[100px] md:py-[140px] bg-[#F3F7F5] p-6 font-jakarta">
    <div class="w-full max-w-[1100px] bg-white rounded-[50px] shadow-[0_30px_80px_rgba(0,0,0,0.03)] border border-gray-100/50 overflow-hidden flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="relative bg-white min-h-[450px] lg:min-h-[520px] flex items-end justify-center overflow-hidden">
          <div class="absolute inset-0 z-0">
            <svg viewBox="0 0 500 500" class="w-full h-full" preserveAspectRatio="none">
              <path d="M0,80 C120,80 180,450 500,450 L500,500 L0,500 Z" fill="#004D3F" />
            </svg>
          </div>
          
          <div class="relative z-10 w-[280px] h-[360px] lg:w-[320px] lg:h-[420px] bg-[#A2E996] rounded-t-full flex items-end overflow-hidden">
             <Transition name="img-swap" mode="out-in">
               <img 
                 :key="activeIdx"
                 :src="testimonials[activeIdx]?.avatar" 
                 class="w-full h-full object-cover object-top transform translate-y-2" 
                 alt="Client"
               />
             </Transition>
          </div>
        </div>

        <div class="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative">
          <div class="mb-8">
             <div class="bg-[#3CD196] w-14 h-14 rounded-full rounded-br-none flex items-center justify-center shadow-lg">
               <span class="text-[#002D25] text-2xl font-black leading-none mt-1">“</span>
             </div>
          </div>

          <Transition name="slip-text" mode="out-in">
            <div :key="activeIdx" class="space-y-8">
              <p class="text-[#242549] text-[20px] lg:text-[24px] font-medium leading-[1.5] italic decoration-[#3CD196]/30">
                {{ testimonials[activeIdx]?.text }}
              </p>
              
              <div class="flex items-center justify-between pt-4">
                <div>
                  <h4 class="text-2xl font-bold text-[#242549] tracking-tight">
                    {{ testimonials[activeIdx]?.author }}
                  </h4>
                  <p class="text-gray-400 font-medium text-base mt-1">
                    {{ testimonials[activeIdx]?.role }}
                  </p>
                </div>

                <div class="flex gap-2.5">
                  <button 
                    v-for="(_, i) in testimonials" 
                    :key="i"
                    @click="activeIdx = i"
                    class="w-2 h-2 rounded-full transition-all duration-500 ease-in-out"
                    :class="activeIdx === i ? 'bg-[#3CD196] w-8' : 'bg-gray-100 hover:bg-gray-200'"
                  />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      
      <div class="border-t border-gray-100 flex flex-wrap items-center justify-between px-10 py-10 grayscale opacity-40 hover:opacity-100 transition-opacity duration-700">
         <img v-for="partner in partners" 
              :key="partner.name" 
              :src="partner.logo" 
              class="h-6 w-auto hover:grayscale-0 transition-transform hover:scale-110 cursor-pointer" 
              :alt="partner.name" 
         />
      </div>
    </div>
  </section>
</template>

<style scoped>
.slip-text-enter-active, .slip-text-leave-active {
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.slip-text-enter-from { opacity: 0; transform: translateY(20px); }
.slip-text-leave-to { opacity: 0; transform: translateY(-20px); }

.img-swap-enter-active, .img-swap-leave-active {
  transition: all 0.8s ease-in-out;
}
.img-swap-enter-from { opacity: 0; filter: blur(15px) scale(1.1); }
.img-swap-leave-to { opacity: 0; filter: blur(15px) scale(0.9); }


</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const activeIdx = ref(0)
let timer: any

const testimonials = [
  {
    text: "Making this the first true 😍 generator on the Internet. It uses a dictionary of over words, combined with a handful of model sentence structures, to generate 👏👏",
    author: "Dennis Lail",
    role: "Marketer",
    avatar: "https://staco-react.vercel.app/assets/img/finance/testimonial-user.png"
  },
  {
    text: "I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you a complete account.",
    author: "Roe Smith",
    role: "Director, Growth Marketing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    text: "We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pleasure rationally encounter consequences.",
    author: "Aurthoe De",
    role: "CEO - Dorid Co",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
]

const partners = [
  { name: 'jQuery', logo: '/assets/brand1.svg' },
  { name: 'GitHub', logo: '/assets/brand2.svg' },
  { name: 'Portis', logo: '/assets/brand4.svg' },
  { name: 'envato', logo: '/assets/brand5.svg' },
  { name: 'DAOMAK', logo: '/assets/brand6.svg' }
]

onMounted(() => {
  timer = setInterval(() => {
    activeIdx.value = (activeIdx.value + 1) % testimonials.length
  }, 6000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
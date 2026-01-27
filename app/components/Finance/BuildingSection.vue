<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const sectionRef = ref<HTMLElement | null>(null)
const parallaxY = ref(0)
const houseSvg = "data:image/svg+xml,%3csvg%20width='372'%20height='250'%20viewBox='0%200%20372%20250'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M120.81%20137.65L15.7733%20235.304L0%20249.943L46.5404%20250L58.3819%20235.35L137.134%20137.65H120.81Z'%20fill='%2395A196'/%3e%3cpath%20d='M149.295%20137.65L90.2023%20235.304L81.3184%20249.943L127.882%20250L132.822%20235.35L165.618%20137.65H149.295Z'%20fill='%2385A088'/%3e%3cpath%20d='M177.781%20137.65L164.622%20235.304L162.627%20249.943L209.225%20250L207.276%20235.35L194.105%20137.65H177.781Z'%20fill='%235C9F63'/%3e%3cpath%20d='M206.268%20137.65L239.052%20235.304L243.947%20249.943L290.579%20250L281.73%20235.35L222.591%20137.65H206.268Z'%20fill='%23439F4D'/%3e%3cpath%20d='M234.754%20137.65L313.471%20235.304L325.267%20249.943L371.922%20250L356.172%20235.35L251.077%20137.65H234.754Z'%20fill='%23019D12'/%3e%3cpath%20d='M137.134%20105.312H120.811V137.65H137.134V105.312Z'%20fill='%2322675D'/%3e%3cpath%20d='M165.62%2086.6959H149.297V137.65H165.62V86.6959Z'%20fill='%2330766C'/%3e%3cpath%20d='M194.105%2066.1309H177.781V137.65H194.105V66.1309Z'%20fill='%233A8A7F'/%3e%3cpath%20d='M222.591%2045.1879H206.268V137.65H222.591V45.1879Z'%20fill='%236CA88B'/%3e%3cpath%20d='M251.077%2023.8549H234.754V137.65H251.077V23.8549Z'%20fill='%2344C486'/%3e%3cpath%20d='M120.81%20137.65L15.7733%20235.304L0%20249.943L46.5404%20250L58.3819%20235.35L137.134%20137.65H120.81Z'%20fill='white'/%3e%3cpath%20d='M149.295%20137.65L90.2023%20235.304L81.3184%20249.943L127.882%20250L132.822%20235.35L165.618%20137.65H149.295Z'%20fill='white'/%3e%3cpath%20d='M177.781%20137.65L164.622%20235.304L162.627%20249.943L209.225%20250L207.276%20235.35L194.105%20137.65H177.781Z'%20fill='white'/%3e%3cpath%20d='M206.268%20137.65L239.052%20235.304L243.947%20249.943L290.579%20250L281.73%20235.35L222.591%20137.65H206.268Z'%20fill='white'/%3e%3cpath%20d='M234.754%20137.65L313.471%20235.304L325.267%20249.943L371.922%20250L356.172%20235.35L251.077%20137.65H234.754Z'%20fill='white'/%3e%3cpath%20d='M127.919%2087.8536L108.764%20114.609H147.085L127.919%2087.8536Z'%20fill='%2322675D'/%3e%3cpath%20d='M157.596%2065.168L138.43%2091.9115H176.751L157.596%2065.168Z'%20fill='%2330766C'/%3e%3cpath%20d='M185.52%2043.0557L166.365%2069.7992H204.687L185.52%2043.0557Z'%20fill='%233A8A7F'/%3e%3cpath%20d='M214.419%2022.1124L195.264%2048.856H233.585L214.419%2022.1124Z'%20fill='%236CA88B'/%3e%3cpath%20d='M242.536%200L223.381%2026.7435H261.702L242.536%200Z'%20fill='%2344C486'/%3e%3c/svg%3e"

watch(y, (newY) => {
  if (sectionRef.value) {
    const offset = sectionRef.value.offsetTop - window.innerHeight / 2
    const height = sectionRef.value.clientHeight
    const a = offset
    const d = offset + window.innerHeight / 2
    let c = 250 - ((newY - a) / (d - a)) * 250
    c = Math.max(0, Math.min(250, c))
    parallaxY.value = c
  }
})
</script>

<template>
  <section ref="sectionRef" class="building-section py-[140px] bg-white">
    <div class="container mx-auto px-4 max-w-[1200px]">
      <div v-motion
           :initial="{ opacity: 0, y: 30 }"
           :visible="{ opacity: 1, y: 0 }"
           class="bg-template-olive rounded-[30px] px-[30px] lg:px-[70px] overflow-hidden">
        <div class="grid md:grid-cols-2 items-center">
          <div class="py-[54px] lg:py-[70px]">
            <h2 class="text-white text-4xl lg:text-5xl font-bold mb-[34px] leading-tight font-jakarta">
              We are building <br /> financial foundations
            </h2>
            <NuxtLink to="/contact-us" class="inline-flex items-center gap-2 bg-[#FFDA54] hover:bg-white text-black font-bold px-8 py-4 rounded-full transition-all duration-300">
              Let's Talk
              <UIcon name="i-heroicons-arrow-long-right" class="w-5 h-5" />
            </NuxtLink>
          </div>
          <div class="flex items-end justify-center md:justify-end h-full relative min-h-[300px]">
            <img :src="houseSvg" 
                 class="w-[372px] transition-transform duration-100 ease-out will-change-transform"
                 :style="{ transform: `translateY(${parallaxY}px)` }"
                 alt="Building illustration" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

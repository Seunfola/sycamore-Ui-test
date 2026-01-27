<script setup lang="ts">
import { ref, computed } from 'vue'

const items = [
  { label: 'Home', to: '/', hasDropdown: true },
  { label: 'Pages', to: '#', hasDropdown: true },
  { label: 'Services', to: '#' },
  { label: 'Blogs', to: '#' },
  { label: 'Contact Us', to: '#' }
]

const props = defineProps<{
  initialIndex?: number
}>()

const activeIndex = ref(props.initialIndex ?? 0)
const hoverIndex = ref<number | null>(null)
const itemRefs = ref<HTMLElement[]>([])

const setItemRef = (el: any, index: number) => {
  if (el) itemRefs.value[index] = (el.$el || el)
}

const activeStyle = computed(() => {
  const el = itemRefs.value[activeIndex.value]
  if (!el) return { opacity: 0 }
  return {
    width: `${el.offsetWidth}px`,
    left: `${el.offsetLeft}px`,
    opacity: 1
  }
})

const hoverStyle = computed(() => {
  if (hoverIndex.value === null || hoverIndex.value === activeIndex.value) return { opacity: 0 }
  const el = itemRefs.value[hoverIndex.value]
  if (!el) return { opacity: 0 }
  return {
    width: `${el.offsetWidth}px`,
    left: `${el.offsetLeft}px`,
    opacity: 1
  }
})
</script>

<template>
  <div class="flex items-center">
    <nav 
      class="relative flex items-center px-3"
      @mouseleave="hoverIndex = null"
    >
      <div
        class="absolute top-1/2 -translate-y-1/2 h-10 bg-white/10 border border-white/10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"
        :style="activeStyle"
      />
      
      <div
        class="absolute top-1/2 -translate-y-1/2 h-9 bg-white/5 rounded-full transition-all duration-300 ease-out z-0 pointer-events-none"
        :style="hoverStyle"
      />

      <NuxtLink
        v-for="(item, index) in items"
        :key="item.label"
        :to="item.to"
        :ref="(el) => setItemRef(el as any, index)"
        @mouseenter="hoverIndex = index"
        @click="activeIndex = index"
        class="relative px-5 py-4 text-[14px] font-bold transition-colors duration-300 rounded-full whitespace-nowrap z-10 flex items-center gap-1.5 no-underline font-jakarta"
        :class="activeIndex === index ? 'text-white' : 'text-white/60 hover:text-white'"
      >
        {{ item.label }}

        <svg 
          v-if="item.hasDropdown" 
          width="10" 
          height="6" 
          viewBox="0 0 10 6" 
          fill="none" 
          class="mt-0.5 opacity-60 transition-transform duration-300"
          :class="hoverIndex === index ? 'translate-y-0.5' : ''"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
    </nav>
  </div>
</template>

<style scoped>



.router-link-active {
  color: white !important;
}

nav > div {
  pointer-events: none;
}
</style>
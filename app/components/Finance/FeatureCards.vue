

<template>
  <section class="py-[100px] md:py-[140px] bg-white">
    <div class="container mx-auto px-4 max-w-[1200px]">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <div 
          v-for="(feature, i) in features" 
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: feature.delay } }"
          class="p-[50px_40px] rounded-[35px] bg-[#F1F1F1] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
        >
          <div class="w-16 h-16 mb-[31px]">
            <img :src="feature.icon" :alt="`${feature.title} icon`" class="w-full h-full object-contain" />
          </div>
          <h5 class="text-[22px] font-bold mb-[20px] text-[#111111] font-jakarta leading-tight">{{ feature.title }}</h5>
          <p class="text-[#444444] text-[16px] leading-relaxed mb-[60px] font-dm opacity-80">{{ feature.description }}</p>
          
          <NuxtLink to="#" class="flex items-center justify-between group/link">
            <span class="font-bold text-[#111111] text-[16px] font-jakarta group-hover/link:text-[#44C486] transition-colors duration-300">Learn more</span>
            <div class="w-11 h-11 rounded-full bg-gray-200/80 flex items-center justify-center transition-all duration-500 group-hover/link:bg-[#44C486] group-hover/link:text-white">
              <svg 
                width="18" 
                height="14" 
                viewBox="0 0 18 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                class="transform transition-all duration-500 group-hover/link:rotate-[-45deg] group-hover/link:scale-110"
              >
                <path d="M11 1L17 7L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 7H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.font-dm {
  font-family: 'DM Sans', sans-serif;
}
</style>

<script setup lang="ts">
const features = [
  {
    delay: 200,
    icon: "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='60'%20height='60'%20rx='18'%20fill='%23004D42'%20fill-opacity='0.1'/%3e%3cpath%20d='M42%2042H36C34.8954%2042%2034%2041.1046%2034%2040C34%2038.8954%2034.8954%2038%2036%2038H42C43.1046%2038%2044%2038.8954%2044%2040C44%2041.1046%2043.1046%2042%2042%2042Z'%20fill='%23004D42'/%3e%3cpath%20d='M28%2042H18C16.8954%2042%2016%2041.1046%2016%2040C16%2038.8954%2016.8954%2038%2018%2038H28C29.1046%2038%2030%2038.8954%2030%2040C30%2041.1046%2029.1046%2042%2028%2042Z'%20fill='%23004D42'/%3e%3cpath%20d='M42%2032H28C26.8954%2032%2026%2031.1046%2026%2030C26%2028.8954%2026.8954%2028%2028%2028H42C43.1046%2028%2044%2029.1046%2044%2030C44%2031.1046%2043.1046%2032%2042%2032Z'%20fill='%23004D42'/%3e%3cpath%20d='M22%2032H18C16.8954%2032%2016%2031.1046%2016%2030C16%2028.8954%2016.8954%2028%2018%2028H22C23.1046%2028%2024%2028.8954%2024%2030C24%2031.1046%23.1046%2032%2022%2032Z'%20fill='%23004D42'/%3e%3crect%20x='16'%20y='16'%20width='28'%20height='8'%20rx='4'%20fill='%23004D42'%20fill-opacity='0.4'/%3e%3c/svg%3e",
    title: "Used advanced technologies",
    description: "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born"
  },
  {
    delay: 250,
    icon: "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20d='M50%2025C50%2037.6%2040.6499%2048.025%2028.5249%2049.75C27.3749%2049.925%2026.2%2050%2025%2050C18.1%2050%2011.85%2047.2%207.32498%2042.675C2.79998%2038.15%200%2031.9%200%2025C0%2011.2%2011.2%200%2025%200C31.9%200%2038.15%202.8%2042.675%207.325C47.2%2011.85%2050%2018.1%2050%2025Z'%20fill='%2344C486'/%3e%3cpath%20d='M32.0759%2020.5748L25.8758%2026.7748L42.2008%2043.0998C41.3008%2043.9748%2040.3258%2044.7748%2039.3008%2045.4998L23.2258%2029.4248L17.0508%2035.5998L29.8508%2048.4248C30.1258%2048.6998%2030.3009%2049.0498%2030.3759%2049.3998C30.3759%2049.3998%2030.3759%2049.3998%2030.3759%2049.4248C29.7759%2049.5498%2029.1508%2049.6748%2028.5258%2049.7498C27.7258%2049.8748%2026.9258%2049.9498%2026.1008%2049.9748L14.4008%2038.2498L8.70078%2043.9498C8.22578%2043.5498%207.77581%2043.1248%207.32581%2042.6748C6.87581%2042.2248%206.45078%2041.7748%206.05078%2041.2998L41.3009%206.0498C41.7759%206.4498%2042.2258%206.8748%2042.6758%207.3248C43.1258%207.7748%2043.5509%208.2248%2043.9509%208.6998L34.7259%2017.9248L48.9509%2032.1498C48.5509%2033.4748%2048.0508%2034.7248%2047.4508%2035.9498L32.0759%2020.5748Z'%20fill='%2344C486'/%3e%3c/svg%3e",
    title: "Clean design & Typography",
    description: "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born"
  },
  {
    delay: 300,
    icon: "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='60'%20height='60'%20rx='18'%20fill='%23433968'%20fill-opacity='0.1'/%3e%3cpath%20d='M20%2015V45C20%2047.7614%2022.2386%2050%2025%2050H45C47.7614%2050%2050%2047.7614%2050%2045V15C50%2012.2386%2047.7614%2010%2045%2010H25C22.2386%2010%2020%2012.2386%2020%2015Z'%20fill='%23433968'%20fill-opacity='0.4'/%3e%3cpath%20d='M25%2010H35V25L30%2022L25%2025V10Z'%20fill='%23433968'/%3e%3cpath%20d='M42%2032H36C34.8954%2032%2034%2031.1046%2034%2030C34%2028.8954%2034.8954%2028%2036%2028H42C43.1046%2028%2044%2028.8954%2044%2030C44%2031.1046%2043.1046%2032%2042%2032Z'%20fill='%23433968'/%3e%3c/svg%3e",
    title: "Best customer support",
    description: "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born"
  }
]
</script>
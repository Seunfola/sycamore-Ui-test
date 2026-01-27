<script setup lang="ts">
const words = ['Easier', 'Accountable', 'Unbeatable']
const currentIndex = ref(0)
const isPlaying = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)
let interval: any

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % words.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const toggleVideo = () => {
  if (videoRef.value) {
    if (isPlaying.value) {
      videoRef.value.pause()
    } else {
      videoRef.value.play()
    }
    isPlaying.value = !isPlaying.value
  }
}

// Vector Assets from Source Audit
const line1 = "data:image/svg+xml,%3csvg%20width='299'%20height='353'%20viewBox='0%200%20299%20353'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M82.8994%20299.957C1.6656%20202.325%20-35.6931%20344.357%2074.3868%20347.838C184.467%20351.319%20385.434%20265.915%20246.722%200.984375'%20stroke='%23B2EDA1'%20stroke-width='10'%20stroke-miterlimit='10'/%3e%3c/svg%3e"
const line2 = "data:image/svg+xml,%3csvg%20width='275'%20height='605'%20viewBox='0%200%20275%20605'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.71289%20599.989C1.71289%20599.989%20468.069%20436.813%20169.913%202.97119'%20stroke='%23B2EDA1'%20stroke-width='10'%20stroke-miterlimit='10'/%3e%3c/svg%3e"

const shapes = [
  "data:image/svg+xml,%3csvg%20width='39'%20height='45'%20viewBox='0%200%2039%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.35993%208.12197C-0.593748%2013.8731%20-1.08911%2028.1803%202.52242%2035.9656C7.8417%2047.1326%2027.7987%2047.1679%2033.3327%2036.604C37.5794%2028.3821%2036.4727%2017.5359%2038.6821%200.572389C22.3362%203.68367%209.16665%202.37763%204.35993%208.12197Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e",
  "data:image/svg+xml,%3csvg%20width='52'%20height='41'%20viewBox='0%200%2052%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.6144%200.0465448C13.3054%20-0.784969%201.64645%209.71291%200.397269%2016.469C-1.99699%2029.5653%206.64316%2041.5183%2020.5923%2040.8947C28.816%2040.4789%2036.6234%2031.2283%2051.9258%2021.2502C36.4152%2010.7523%2028.0873%201.81351%2018.6144%200.0465448Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e",
  "data:image/svg+xml,%3csvg%20width='46'%20height='36'%20viewBox='0%200%2046%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.4394%203.70549C-0.531861%2010.5655%20-4.38354%2021.3752%206.75495%2035.7188C18.3098%2031.2494%2030.3852%2026.5721%2046%2020.5437C36.3188%202.66613%2026.3254%20-5.0254%2011.4394%203.70549Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e",
  "data:image/svg+xml,%3csvg%20width='43'%20height='42'%20viewBox='0%200%2043%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.8398%200C-0.443787%2011.5373%20-4.19132%2022.8667%205.48979%2033.5724C16.7324%2045.9412%2029.0159%2042.8229%2042.2364%2027.4399C30.6815%2017.046%2021.5209%208.73089%2011.8398%200Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e",
  "data:image/svg+xml,%3csvg%20width='22'%20height='12'%20viewBox='0%200%2022%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.87043%2011.9367C9.11631%2010.5855%2015.5704%209.1303%2021.8163%207.77909C21.3999%205.28455%2021.0876%202.89395%2020.6712%200.399414C14.0089%201.02305%207.34665%201.64669%200.892578%202.27032C1.51717%205.59638%202.24584%208.71455%202.87043%2011.9367Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e",
  "data:image/svg+xml,%3csvg%20width='49'%20height='47'%20viewBox='0%200%2049%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.82762%207.31652C-2.25929%2015.2616%20-1.57861%2029.3022%208.24752%2039.1752C17.8521%2048.9776%2031.6961%2050.2641%2039.7268%2038.9026C45.4458%2031.1026%2044.49%2018.684%2048.0973%200.246201C29.4497%203.29007%2016.6336%201.84265%208.82762%207.31652Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e"
]
</script>

<template>
  <section class="hero-section6 relative bg-hero-navy text-white overflow-hidden pt-[247px] pb-[212px] flex items-center min-h-[900px]">
    
    <div class="absolute inset-0 z-0 pointer-events-none select-none">
       <img v-for="(shape, i) in shapes" :key="i" :src="shape" loading="lazy" alt="decorative shape"
         :class="`absolute banner-vector banner-vector${i+1}`" 
         :style="{ 
             right: i === 0 ? '30%' : i === 3 ? '40%' : 'auto',
             left: i === 1 ? '44%' : i === 2 ? '45%' : i === 4 ? '25%' : i === 5 ? '25%' : 'auto',
             top: i === 0 ? '20%' : i === 1 ? '35%' : i === 3 ? '56%' : i === 5 ? '18%' : 'auto',
             bottom: i === 2 ? '18%' : i === 4 ? '13%' : 'auto'
           }" />
      
      <img :src="line1" loading="lazy" alt="decorative line" class="absolute top-[-32px] right-[22.2%] h-[40%]" />
      <img :src="line2" loading="lazy" alt="decorative line" class="absolute bottom-[3px] right-[31%] h-[70%]" />
    </div>

    <div class="container mx-auto px-4 max-w-[1200px] relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-20">
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 1000, ease: 'easeOut' } }"
          class="flex-1 space-y-10"
        >
          <div class="space-y-6">
            <div class="cd-intro m-0 loading-bar uig-animate-style">
              <h1 class="cd-headline banner-title text-5xl text-white lg:text-6xl font-bold font-jakarta leading-[1.2] mb-2 tracking-tight text-left">
                Financial Security Made
                <span class="cd-words-wrapper relative inline-block text-primary-6 mt-[-11px] ml-[10px] min-w-[200px]">
                  <Transition name="fade-up" mode="out-in">
                    <b :key="words[currentIndex]">{{ words[currentIndex] }}</b>
                  </Transition>
                </span>
              </h1>
            </div>
            <p class="text-[18px] text-white max-w-xl leading-[36px] font-medium font-dm">
              Staco is the dedicated platform for human management that helps to grow your startup business quickly
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-[30px] pt-6">
            <NuxtLink to="/3" class="group relative overflow-hidden bg-primary-6-deep text-black font-jakarta font-bold text-[16px] px-[35px] py-[18px] rounded-full transition-all duration-300">
               <span class="relative z-10 text-white ">Get Start for Free</span>
               <div class="absolute inset-0 bg-[#FFDA54] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </NuxtLink>
            
            <NuxtLink to="/contact-us" class="flex items-center gap-2 text-white text-[16px] font-bold font-jakarta hover:text-primary-6 transition-all group">
              Let's talk
              <span class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-6/20 transition-colors">
                <UIcon name="i-heroicons-chevron-right-20-solid" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </NuxtLink>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, x: 50, scale: 0.9 }"
          :enter="{ opacity: 1, x: 0, scale: 1, transition: { duration: 1000, delay: 300, ease: 'easeOut' } }"
          class="flex-1 relative w-full lg:max-w-[470px] mt-12 lg:mt-0"
        >
          <div class="relative rounded-[40px] overflow-hidden shadow-2xl aspect-video bg-gray-950 group">
            <video 
              ref="videoRef"
              preload="none"
              loop 
              muted 
              playsinline 
              poster="/assets/hero-finance.png"
              class="w-full h-full object-cover"
            >
               <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
            
            <button 
              @click="toggleVideo"
              class="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 active:scale-95 transition-all z-20"
              aria-label="Toggle Video"
            >
              <UIcon :name="isPlaying ? 'i-heroicons-pause-20-solid' : 'i-heroicons-play-20-solid'" class="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.6s ease-out;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.banner-vector {
  animation: pulse-vector 8s infinite ease-in-out;
}
</style>


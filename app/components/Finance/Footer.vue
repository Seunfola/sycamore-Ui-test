

<template>
  <footer class="bg-white font-jakarta pt-10 relative">
    
    <div class="bg-[#1C1E2A] text-white rounded-[40px] md:rounded-[60px] mx-4 md:mx-10 py-16 md:py-24">
      <div class="container mx-auto px-6 max-w-[1200px]">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          <div class="lg:col-span-4 space-y-8">
            <div class="flex items-center gap-3">
               <div class="w-10 h-10 bg-gradient-to-br from-[#44C486] to-[#86efac] rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <div class="w-6 h-6 bg-white/40 rounded-full blur-[1px]"></div>
               </div>
               <span class="font-bold text-3xl text-white uppercase tracking-tighter">Staco</span>
            </div>

            <p class="text-gray-400 text-[16px] leading-relaxed max-w-[300px]">
              Staco is the dedicated platform for performance management that helps to grow your startup quickly
            </p>
            
            <div class="flex gap-3">
               <a v-for="social in socialIcons" :key="social.name" :href="social.link"
                  class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#44C486] hover:border-[#44C486] transition-all duration-300 text-gray-400 hover:text-white"
               >
                 <i :class="social.name" class="text-[13px]"></i>
               </a>
            </div>
          </div>
          
          <div class="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="group in footerLinks" :key="group.title">
              <h4 class="font-bold text-white text-[14px] uppercase tracking-widest mb-8 flex items-center gap-2">
                {{ group.title }} <span class="text-[12px] opacity-80">{{ group.icon }}</span>
              </h4>
              <ul class="space-y-4">
                <li v-for="link in group.items" :key="link">
                  <NuxtLink to="#" class="text-gray-400 hover:text-white transition-colors text-[15px]">{{ link }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="h-px w-full bg-white/5 mb-10"></div>

        <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-gray-500">
          <p>© 2023 Staco. All rights reserved.</p>
          <div class="flex gap-8">
            <NuxtLink to="#" class="hover:text-white transition-colors">Terms and conditions</NuxtLink>
            <NuxtLink to="#" class="hover:text-white transition-colors">Cookies</NuxtLink>
            <NuxtLink to="#" class="hover:text-white transition-colors">Privacy policy</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-20 px-4 md:px-10">
      <div class="max-w-[1200px] mx-auto text-[14px] text-black leading-relaxed">
        <h6 class="font-bold mb-4 text-black text-[13px] uppercase tracking-wider">Disclaimer:</h6>
        <p class="mb-4">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>
        <p>
          Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined handful of model sentence structures, to generate which looks reasonable. The generated Lorem Ipsum is therefore always
        </p>
      </div>
    </div>

    <button 
      @click="scrollToTop"
      class="absolute bottom-20 right-10 w-12 h-12 rounded-full border border-[#44C486] flex items-center justify-center text-[#44C486] hover:bg-[#44C486] hover:text-white transition-all duration-300"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </footer>
</template>

<style scoped>


.font-jakarta {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>

<script setup lang="ts">
const footerLinks = [
  {
    title: 'Products',
    icon: '🔥',
    items: ['HR Management', 'Invoice System', 'Email Marketing', 'Web Services', 'Digital Marketing']
  },
  {
    title: 'Why choose',
    icon: '☀️',
    items: ['Customers', 'Why Staco ?', 'Book a demo']
  },
  {
    title: 'Resources',
    icon: '💠',
    items: ['Latest Blog', 'Supports', 'Knowledgebase', 'FAQs']
  },
  {
    title: 'Company',
    icon: '💎',
    items: ['About', 'What we do', 'Contact us', 'Careers']
  }
]

const socialIcons = [
  { name: 'fab fa-facebook-f', link: '#' },
  { name: 'fab fa-x', link: '#' }, // Updated to 'x' icon per screenshot
  { name: 'fab fa-linkedin-in', link: '#' },
  { name: 'fab fa-instagram', link: '#' },
  { name: 'fab fa-youtube', link: '#' }
]

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' }
  ]
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
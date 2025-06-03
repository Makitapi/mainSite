<template>
  <NavBar />
  <main class="page-wrapper">
    <Hero />

    <Services />

    <Partners />

    <Skills />
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Footer from '@/views/pages/services/ServicesV3/components/Footer.vue'
import Hero from '@/views/pages/services/ServicesV3/components/Hero.vue'
import Services from '@/views/pages/services/ServicesV3/components/Services.vue'
import Partners from '@/views/pages/services/ServicesV3/components/Partners.vue'
import Skills from '@/views/pages/services/ServicesV3/components/Skills.vue'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.querySelector('.navbar')?.classList.add('bg-light')
})

onUnmounted(() => {
  document.querySelector('.navbar')?.classList.remove('bg-light')
})
</script>

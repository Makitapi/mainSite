<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <Features />

    <Classes />

    <Trainers />

    <Schedule />

    <CTA />

    <Pricing />

    <SocialMedia />
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/YogaStudio/components/Hero.vue'
import Features from '@/views/landings/YogaStudio/components/Features.vue'
import Classes from '@/views/landings/YogaStudio/components/Classes.vue'
import Trainers from '@/views/landings/YogaStudio/components/Trainers.vue'
import Schedule from '@/views/landings/YogaStudio/components/Schedule.vue'
import CTA from '@/views/landings/YogaStudio/components/CTA.vue'
import Pricing from '@/views/landings/YogaStudio/components/Pricing.vue'
import SocialMedia from '@/views/landings/YogaStudio/components/SocialMedia.vue'
import Footer from '@/views/landings/YogaStudio/components/Footer.vue'

onMounted(() => {
  const navbar = document.querySelector('.navbar') as HTMLElement
  navbar.setAttribute('data-bs-theme', 'light')
})

onUnmounted(() => {
  const navbar = document.querySelector('.navbar') as HTMLElement
  navbar.removeAttribute('data-bs-theme')
})
</script>

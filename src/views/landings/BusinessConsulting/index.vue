<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <Stats />

    <ServicesGrid />

    <Industries />

    <Clients />

    <Quote />

    <Testimonials />

    <CaseStudies />

    <CTA />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/BusinessConsulting/components/Hero.vue'
import Stats from '@/views/landings/BusinessConsulting/components/Stats.vue'
import ServicesGrid from '@/views/landings/BusinessConsulting/components/ServicesGrid.vue'
import Industries from '@/views/landings/BusinessConsulting/components/Industries.vue'
import Clients from '@/views/landings/BusinessConsulting/components/Clients.vue'
import Quote from '@/views/landings/BusinessConsulting/components/Quote.vue'
import Testimonials from '@/views/landings/BusinessConsulting/components/Testimonials.vue'
import CaseStudies from '@/views/landings/BusinessConsulting/components/CaseStudies.vue'
import CTA from '@/views/landings/BusinessConsulting/components/CTA.vue'
import Footer from '@/views/landings/BusinessConsulting/components/Footer.vue'

onMounted(() => {
  document.body.classList.add('bg-secondary')
})

onUnmounted(() => {
  document.body.classList.remove('bg-secondary')
})
</script>

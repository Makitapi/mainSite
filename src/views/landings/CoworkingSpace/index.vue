<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <About />

    <Gallery />

    <Features />

    <Atmosphere />

    <Testimonials />

    <Pricing />

    <Address />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/CoworkingSpace/components/Hero.vue'
import About from '@/views/landings/CoworkingSpace/components/About.vue'
import Gallery from '@/views/landings/CoworkingSpace/components/Gallery.vue'
import Features from '@/views/landings/CoworkingSpace/components/Features.vue'
import Atmosphere from '@/views/landings/CoworkingSpace/components/Atmosphere.vue'
import Testimonials from '@/views/landings/CoworkingSpace/components/Testimonials.vue'
import Pricing from '@/views/landings/CoworkingSpace/components/Pricing.vue'
import Address from '@/views/landings/CoworkingSpace/components/Address.vue'
import Footer from '@/views/landings/CoworkingSpace/components/Footer.vue'
</script>

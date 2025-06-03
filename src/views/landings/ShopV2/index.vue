<template>
  <main class="page-wrapper">
    <NavBar3 />

    <Hero />

    <NewArrival />

    <About />

    <Awards />

    <CTA />

    <Benefits />

    <Popular />

    <SocialMedia />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar3 from '@/components/NavBar/NavBar3.vue'
import Hero from '@/views/landings/ShopV2/components/Hero.vue'
import NewArrival from '@/views/landings/ShopV2/components/NewArrival.vue'
import About from '@/views/landings/ShopV2/components/About.vue'
import Awards from '@/views/landings/ShopV2/components/Awards.vue'
import CTA from '@/views/landings/ShopV2/components/CTA.vue'
import Benefits from '@/views/landings/ShopV2/components/Benefits.vue'
import Popular from '@/views/landings/ShopV2/components/Popular.vue'
import SocialMedia from '@/views/landings/ShopV2/components/SocialMedia.vue'
import Footer from '@/views/landings/ShopV2/components/Footer.vue'
</script>

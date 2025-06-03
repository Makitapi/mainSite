<template>
  <main class="page-wrapper">
    <NavBar theme="dark" button-class="rounded-pill" />

    <Hero />

    <Categories />

    <UseCases />

    <Map />

    <ShortVideo />

    <Testimonials />

    <Pricing />
  </main>

  <Footer />
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/SaasV4/components/Hero.vue'
import Categories from '@/views/landings/SaasV4/components/Categories.vue'
import UseCases from '@/views/landings/SaasV4/components/UseCases.vue'
import Map from '@/views/landings/SaasV4/components/Map.vue'
import ShortVideo from '@/views/landings/SaasV4/components/ShortVideo.vue'
import Testimonials from '@/views/landings/SaasV4/components/Testimonials.vue'
import Pricing from '@/views/landings/SaasV4/components/Pricing.vue'
import Footer from '@/views/landings/SaasV4/components/Footer.vue'
</script>

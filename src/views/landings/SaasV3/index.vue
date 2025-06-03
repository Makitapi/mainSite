<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <Features />

    <Comparison />

    <Testimonials />

    <MobileApp />

    <Pricing />

    <Tools />

    <CTA />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/SaasV3/components/Hero.vue'
import Features from '@/views/landings/SaasV3/components/Features.vue'
import Comparison from '@/views/landings/SaasV3/components/Comparison.vue'
import Testimonials from '@/views/landings/SaasV3/components/Testimonials.vue'
import Pricing from '@/views/landings/SaasV3/components/Pricing.vue'
import Tools from '@/views/landings/SaasV3/components/Tools.vue'
import CTA from '@/views/landings/SaasV3/components/CTA.vue'
import MobileApp from '@/views/landings/SaasV3/components/MobileApp.vue'
import Footer from '@/views/landings/SaasV3/components/Footer.vue'
</script>

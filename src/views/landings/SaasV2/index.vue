<template>
  <main class="page-wrapper">
    <NavBar theme="dark" />

    <Hero />

    <Features />

    <Steps />

    <Testimonial />

    <Benefits />

    <Tools />

    <Resources />

    <CTA />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/SaasV2/components/Hero.vue'
import Features from '@/views/landings/SaasV2/components/Features.vue'
import Steps from '@/views/landings/SaasV2/components/Steps.vue'
import Testimonial from '@/views/landings/SaasV2/components/Testimonial.vue'
import Benefits from '@/views/landings/SaasV2/components/Benefits.vue'
import Tools from '@/views/landings/SaasV2/components/Tools.vue'
import Resources from '@/views/landings/SaasV2/components/Resources.vue'
import CTA from '@/views/landings/SaasV2/components/CTA.vue'
import Footer from '@/views/landings/SaasV2/components/Footer.vue'
</script>

<template>
  <main class="page-wrapper">
    <NavBar custom-class="bg-light" />

    <Hero />

    <Reviews />

    <Features />

    <FeaturesList />

    <Industries />

    <Pricing />

    <Testimonials />

    <CTA />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/SaasV1/components/Hero.vue'
import Reviews from '@/views/landings/SaasV1/components/Reviews.vue'
import Features from '@/views/landings/SaasV1/components/Features.vue'
import FeaturesList from '@/views/landings/SaasV1/components/FeaturesList.vue'
import Industries from '@/views/landings/SaasV1/components/Industries.vue'
import Pricing from '@/views/landings/SaasV1/components/Pricing.vue'
import Testimonials from '@/views/landings/SaasV1/components/Testimonial.vue'
import CTA from '@/views/landings/SaasV1/components/CTA.vue'
import Footer from '@/views/landings/SaasV1/components/Footer.vue'
</script>

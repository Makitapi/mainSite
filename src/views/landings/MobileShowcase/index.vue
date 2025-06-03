<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <Stats />

    <FeaturesSlider />

    <Info />

    <Brands />

    <Testimonial />

    <FAQs />

    <CTA />
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/MobileShowcase/components/Hero.vue'
import Stats from '@/views/landings/MobileShowcase/components/Stats.vue'
import FeaturesSlider from '@/views/landings/MobileShowcase/components/FeaturesSlider.vue'
import Info from '@/views/landings/MobileShowcase/components/Info.vue'
import Brands from '@/views/landings/MobileShowcase/components/Brands.vue'
import Testimonial from '@/views/landings/MobileShowcase/components/Testimonial.vue'
import FAQs from '@/views/landings/MobileShowcase/components/FAQs.vue'
import CTA from '@/views/landings/MobileShowcase/components/CTA.vue'
import Footer from '@/views/landings/MobileShowcase/components/Footer.vue'
</script>

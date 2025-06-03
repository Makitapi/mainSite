<template>
  <NavBar />
  <main class="page-wrapper">
    <PricingPlans />

    <Testimonials />

    <Tools />

    <FAQs />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import PricingPlans from '@/views/pages/Pricing/components/PricingPlans.vue'
import Testimonials from '@/views/pages/Pricing/components/Testimonials.vue'
import FAQs from '@/views/pages/Pricing/components/FAQs.vue'
import Tools from '@/views/pages/Pricing/components/Tools.vue'
import Footer from '@/views/pages/Pricing/components/Footer.vue'
</script>

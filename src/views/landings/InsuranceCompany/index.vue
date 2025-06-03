<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <Partners />

    <Benefits />

    <InsuranceType />

    <CTA />

    <FAQ />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/InsuranceCompany/components/Hero.vue'
import Partners from '@/views/landings/InsuranceCompany/components/Partners.vue'
import Benefits from '@/views/landings/InsuranceCompany/components/Benefits.vue'
import InsuranceType from '@/views/landings/InsuranceCompany/components/InsuranceType.vue'
import CTA from '@/views/landings/InsuranceCompany/components/CTA.vue'
import FAQ from '@/views/landings/InsuranceCompany/components/FAQ.vue'
import Footer from '@/views/landings/InsuranceCompany/components/Footer.vue'
</script>

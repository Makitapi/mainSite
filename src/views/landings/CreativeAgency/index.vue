<template>
  <main class="page-wrapper">
    <NavBar button-class="rounded-0" />

    <Hero />

    <Numbers />

    <RFID_Benefits />
    
    <Why_Makitapi />
    
    <HowItWorks />
    
    <!-- <CaseStudies /> -->

    <!-- <Industries /> -->

    <!-- <Reviews /> -->

    <!-- <HWbrands /> -->

  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/CreativeAgency/components/Hero.vue'
import Numbers from '@/views/landings/CreativeAgency/components/Numbers.vue'
import HowItWorks from '@/views/landings/CreativeAgency/components/HowItWorks.vue'
import Footer from '@/views/landings/CreativeAgency/components/Footer.vue'

import CaseStudies from '@/views/landings/CreativeAgency/components/CaseStudies.vue'
import Industries from '@/views/landings/CreativeAgency/components/Industries.vue'
import Reviews from '@/views/landings/SaasV1/components/Testimonial.vue'
import HWbrands from '@/views/landings/MarketingAgency/components/Tools.vue'

</script>

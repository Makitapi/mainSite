<template>
  <main class="page-wrapper">
    <NavBar button-class="rounded-0" />

    <Hero />

    <!-- <Numbers /> -->

    <RFID_Benefits />
    
    <Why_Makitapi />
    
    <HowItWorks />
    
    <!-- <CaseStudies /> -->

    <!-- <Industries /> -->

    <!-- <Reviews /> -->

    <HWbrands />

  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/Makitapi/1Landing/components/Hero.vue'
import Numbers from '@/views/Makitapi/1Landing/components/Numbers.vue'
import RFID_Benefits from '@/views/Makitapi/1Landing/components/Benefits.vue'
import Why_Makitapi from '@/views/Makitapi/1Landing/components/WhyMakitapi.vue'
import HowItWorks from '@/views/Makitapi/1Landing/components/HowItWorks.vue'
import Footer from '@/views/Makitapi/1Landing/components/Footer.vue'

import CaseStudies from '@/views/Makitapi/1Landing/components/CaseStudies.vue'
import Industries from '@/views/Makitapi/1Landing/components/Industries.vue'
import Reviews from '@/views/Makitapi/1Landing/components/Testimonial.vue'
import HWbrands from '@/views/Makitapi/1Landing/components/Tools.vue'

</script>

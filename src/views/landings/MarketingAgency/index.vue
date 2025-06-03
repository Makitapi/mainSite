<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <Services />

    <Tools />

    <Benefits />

    <About />

    <Testimonials />

    <CaseStudies />

    <Team />

    <Resources />

    <Contact />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/MarketingAgency/components/Hero.vue'
import Services from '@/views/landings/MarketingAgency/components/Services.vue'
import Tools from '@/views/landings/MarketingAgency/components/Tools.vue'
import Benefits from '@/views/landings/MarketingAgency/components/Benefits.vue'
import About from '@/views/landings/MarketingAgency/components/About.vue'
import Testimonials from '@/views/landings/MarketingAgency/components/Testimonials.vue'
import CaseStudies from '@/views/landings/MarketingAgency/components/CaseStudies.vue'
import Team from '@/views/landings/MarketingAgency/components/Team.vue'
import Resources from '@/views/landings/MarketingAgency/components/Resources.vue'
import Contact from '@/views/landings/MarketingAgency/components/Contact.vue'
import Footer from '@/views/landings/MarketingAgency/components/Footer.vue'
</script>

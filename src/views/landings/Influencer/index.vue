<template>
  <main class="page-wrapper">
    <NavBar custom-class="bg-light" />

    <Hero />

    <About />

    <Features />

    <Guides />

    <Results />

    <Testimonials />

    <Subscription />

    <CTA />

    <SocialMedia />
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/Influencer/components/Hero.vue'
import About from '@/views/landings/Influencer/components/About.vue'
import Features from '@/views/landings/Influencer/components/Features.vue'
import Guides from '@/views/landings/Influencer/components/Guides.vue'
import Results from '@/views/landings/Influencer/components/Results.vue'
import Testimonials from '@/views/landings/Influencer/components/Testimonials.vue'
import Subscription from '@/views/landings/Influencer/components/Subscription.vue'
import CTA from '@/views/landings/Influencer/components/CTA.vue'
import SocialMedia from '@/views/landings/Influencer/components/SocialMedia.vue'
import Footer from '@/views/landings/Influencer/components/Footer.vue'
</script>

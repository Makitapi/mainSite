<template>
  <main class="page-wrapper">
    <NavBar custom-class="bg-light" />

    <Hero />

    <Services />

    <Partners />

    <Features />

    <Industries />

    <Testimonials />

    <Team />

    <Blog />

    <Contact />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/Corporate/components/Hero.vue'
import Services from '@/views/landings/Corporate/components/Services.vue'
import Partners from '@/views/landings/Corporate/components/Partners.vue'
import Features from '@/views/landings/Corporate/components/Features.vue'
import Industries from '@/views/landings/Corporate/components/Industries.vue'
import Testimonials from '@/views/landings/Corporate/components/Testimonials.vue'
import Team from '@/views/landings/Corporate/components/Team.vue'
import Blog from '@/views/landings/Corporate/components/Blog.vue'
import Contact from '@/views/landings/Corporate/components/Contact.vue'
import Footer from '@/views/landings/Corporate/components/Footer.vue'
</script>

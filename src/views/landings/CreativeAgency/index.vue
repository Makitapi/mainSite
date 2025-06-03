<template>
  <main class="page-wrapper">
    <NavBar button-class="rounded-0" />

    <Hero />

    <About />

    <Projects />

    <Clients />

    <Testimonials />

    <Team />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/CreativeAgency/components/Hero.vue'
import About from '@/views/landings/CreativeAgency/components/About.vue'
import Projects from '@/views/landings/CreativeAgency/components/Projects.vue'
import Clients from '@/views/landings/CreativeAgency/components/Clients.vue'
import Testimonials from '@/views/landings/CreativeAgency/components/Testimonials.vue'
import Team from '@/views/landings/CreativeAgency/components/Team.vue'
import Footer from '@/views/landings/CreativeAgency/components/Footer.vue'
</script>

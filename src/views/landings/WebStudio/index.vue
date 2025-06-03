<template>
  <main class="page-wrapper">
    <NavBar button-class="rounded-pill" />

    <Hero />

    <Awards />

    <Services />

    <Industries />

    <Skills />

    <Portfolio />

    <Contact />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/WebStudio/components/Hero.vue'
import Awards from '@/views/landings/WebStudio/components/Awards.vue'
import Services from '@/views/landings/WebStudio/components/Services.vue'
import Industries from '@/views/landings/WebStudio/components/Industries.vue'
import Skills from '@/views/landings/WebStudio/components/Skills.vue'
import Portfolio from '@/views/landings/WebStudio/components/Portfolio.vue'
import Contact from '@/views/landings/WebStudio/components/Contact.vue'
import Footer from '@/views/landings/WebStudio/components/Footer.vue'
</script>

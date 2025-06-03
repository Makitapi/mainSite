<template>
  <main class="page-wrapper">
    <NavBar />

    <b-container class="py-5 mt-5 mb-2 mb-sm-3 mb-lg-4 mb-xxl-5">
      <Hero />

      <Overview />

      <Content />

      <Testimonial />

      <CaseStudy />
    </b-container>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import Hero from '@/views/pages/Portfolio/Single-1/components/Hero.vue'
import Overview from '@/views/pages/Portfolio/Single-1/components/Overview.vue'
import Content from '@/views/pages/Portfolio/Single-1/components/Content.vue'
import Testimonial from '@/views/pages/Portfolio/Single-1/components/Testimonial.vue'
import CaseStudy from '@/views/pages/Portfolio/Single-1/components/CaseStudies.vue'
import Footer from '@/views/pages/Portfolio/Single-1/components/Footer.vue'
import NavBar from '@/components/NavBar/NavBar.vue'
</script>

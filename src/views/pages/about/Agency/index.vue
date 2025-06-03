<template>
  <main class="page-wrapper">
    <Navbar theme="dark" />

    <Hero />

    <About />

    <Mission />

    <Steps />

    <Team />

    <Testimonials />

    <Gallery />

    <Services />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Navbar from '@/components/NavBar/NavBar.vue'

import Hero from '@/views/pages/about/Agency/components/Hero.vue'
import About from '@/views/pages/about/Agency/components/About.vue'
import Mission from '@/views/pages/about/Agency/components/Mission.vue'
import Steps from '@/views/pages/about/Agency/components/Steps.vue'
import Team from '@/views/pages/about/Agency/components/Team.vue'
import Testimonials from '@/views/pages/about/Agency/components/Testimonials.vue'
import Gallery from '@/views/pages/about/Agency/components/Gallery.vue'
import Services from '@/views/pages/about/Agency/components/Services.vue'
import Footer from '@/views/pages/about/Agency/components/Footer.vue'
</script>

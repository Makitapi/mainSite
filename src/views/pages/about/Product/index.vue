<template>
  <main class="page-wrapper">
    <Navbar />

    <Hero />

    <Clients />

    <steps />

    <Features />

    <Benefits />

    <Tools />

    <CTA />
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import Navbar from '@/components/NavBar/NavBar.vue'

import Clients from '@/views/pages/about/Product/components/Clients.vue'
import Hero from '@/views/pages/about/Product/components/Hero.vue'
import Steps from '@/views/pages/about/Product/components/Steps.vue'
import Features from '@/views/pages/about/Product/components/Features.vue'
import Benefits from '@/views/pages/about/Product/components/Benefits.vue'
import Tools from '@/views/pages/about/Product/components/Tools.vue'
import CTA from '@/views/pages/about/Product/components/CTA.vue'
import Footer from '@/views/pages/about/Product/components/Footer.vue'
</script>

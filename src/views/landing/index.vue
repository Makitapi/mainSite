<template>
  <main class="page-wrapper">
    <NavBar theme="dark" />

    <Hero />

    <Landings />

    <InnerPages />

    <Comparison />

    <Customizer />

    <Features />

    <Subscription />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Landings from '@/views/landing/components/Landings.vue'
import Subscription from '@/views/landing/components/Subscription.vue'
import Features from '@/views/landing/components/features.vue'
import Customizer from '@/views/landing/components/Customizer.vue'
import Comparison from '@/views/landing/components/Comparison.vue'
import InnerPages from '@/views/landing/components/InnerPages.vue'
import Hero from '@/views/landing/components/Hero.vue'
import Footer from '@/views/landing/components/Footer.vue'
</script>

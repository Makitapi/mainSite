<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <Features />

    <ProductColor />

    <CTA />

    <ProductDetails />

    <Gallery />
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/Product/components/Hero.vue'
import Features from '@/views/landings/Product/components/Features.vue'
import ProductColor from '@/views/landings/Product/components/ProductColor.vue'
import CTA from '@/views/landings/Product/components/CTA.vue'
import ProductDetails from '@/views/landings/Product/components/ProductDetails.vue'
import Gallery from '@/views/landings/Product/components/Gallery.vue'
import Footer from '@/views/landings/Product/components/Footer.vue'
</script>

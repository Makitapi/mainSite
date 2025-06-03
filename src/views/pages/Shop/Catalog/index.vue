<template>
  <main class="page-wrapper">
    <NavBar2 />
    <b-container class="py-5 mt-5 mb-lg-4 mb-xl-5">
      <Breadcrumb title="Shop catalog" />

      <Hero />

      <Home />
    </b-container>
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import Hero from '@/views/pages/Shop/Catalog/components/Hero.vue'
import Home from '@/views/pages/Shop/Catalog/components/Home.vue'
import Footer from '@/views/pages/Shop/Catalog/components/Footer.vue'
import NavBar2 from '@/components/NavBar/NavBar2.vue'
</script>

<template>
  <main class="page-wrapper">
    <NavBar2 />
    <b-container class="py-5 mt-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
      <BreadcrumbTwo subtitle="Single product" title="Shop catalog" :class="'pb-2 pb-md-4'" />

      <Gallery />
    </b-container>

    <ProductSwiper />

    <Feature />
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import Gallery from '@/views/pages/Shop/Single/components/Gallery.vue'
import ProductSwiper from '@/views/pages/Shop/Single/components/ProductSwiper.vue'
import Feature from '@/views/pages/Shop/Single/components/Feature.vue'
import Footer from '@/views/pages/Shop/Single/components/Footer.vue'
import BreadcrumbTwo from '@/components/BreadcrumbTwo.vue'
import NavBar2 from '@/components/NavBar/NavBar2.vue'
</script>

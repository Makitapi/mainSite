<template>
  <main class="page-wrapper">
    <NavBar2 />

    <Hero />

    <About />

    <Categories />

    <TrendingProducts />

    <Collections />

    <Features />

    <Gallery />

    <Banner />

    <Blog />

    <SocialMedia />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar2 from '@/components/NavBar/NavBar2.vue'
import Hero from '@/views/landings/ShopV1/components/Hero.vue'
import About from '@/views/landings/ShopV1/components/About.vue'
import Categories from '@/views/landings/ShopV1/components/Categories.vue'
import TrendingProducts from '@/views/landings/ShopV1/components/TrendingProducts.vue'
import Collections from '@/views/landings/ShopV1/components/Collections.vue'
import Features from '@/views/landings/ShopV1/components/Features.vue'
import Gallery from '@/views/landings/ShopV1/components/Gallery.vue'
import Banner from '@/views/landings/ShopV1/components/Banner.vue'
import Blog from '@/views/landings/ShopV1/components/Blog.vue'
import SocialMedia from '@/views/landings/ShopV1/components/SocialMedia.vue'
import Footer from '@/views/landings/ShopV1/components/Footer.vue'
</script>

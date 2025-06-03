<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <BlogSwiper />
  </main>

  <Subscription />

  <Footer />
</template>

<script lang="ts" setup>
import Hero from '@/views/pages/Blog/SingleV3/components/Hero.vue'
import BlogSwiper from '@/views/pages/Blog/SingleV3/components/BlogSwiper.vue'
import Subscription from '@/views/pages/Blog/SingleV3/components/Subscription.vue'
import Footer from '@/views/pages/Blog/SingleV3/components/Footer.vue'
import NavBar from '@/components/NavBar/NavBar.vue'
</script>

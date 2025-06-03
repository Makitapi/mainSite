<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <PostContent />

    <Comments />

    <BlogSwiper />
  </main>
  <Subscription />

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/pages/Blog/SingleV1/components/Hero.vue'
import PostContent from '@/views/pages/Blog/SingleV1/components/PostContent.vue'
import Comments from '@/views/pages/Blog/SingleV1/components/Comments.vue'
import BlogSwiper from '@/views/pages/Blog/SingleV1/components/BlogSwiper.vue'
import Footer from '@/views/pages/Blog/SingleV1/components/Footer.vue'
import Subscription from '@/views/pages/Blog/SingleV1/components/Subscription.vue'
</script>

<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <PostContent />

    <!-- <Comments /> -->

    <!-- <BlogSwiper /> -->
  </main>
  <!-- <subscription /> -->

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/pages/Blog/SingleV2/components/Hero.vue'
import PostContent from '@/views/pages/Blog/SingleV2/components/PostContent.vue'
import Comments from '@/views/pages/Blog/SingleV2/components/Comments.vue'
import Subscription from '@/views/pages/Blog/SingleV2/components/Subscription.vue'
import Footer from '@/views/landings/CreativeAgency/components/Footer.vue'
import BlogSwiper from '@/views/pages/Blog/SingleV2/components/BlogSwiper.vue'
</script>

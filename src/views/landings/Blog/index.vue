<template>
  <main class="page-wrapper">
    <NavBar />

    <BlogTitle />

    <FeaturePosts />

    <PopularArticles />

    <LatestPosts />

    <TopAuthors />

    <EditorsPick />
  </main>

  <Subscription />

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import BlogTitle from '@/views/landings/Blog/components/BlogTitle.vue'
import FeaturePosts from '@/views/landings/Blog/components/FeaturePosts.vue'
import PopularArticles from '@/views/landings/Blog/components/PopularArticles.vue'
import LatestPosts from '@/views/landings/Blog/components/LatestPosts.vue'
import TopAuthors from '@/views/landings/Blog/components/TopAuthors.vue'
import EditorsPick from '@/views/landings/Blog/components/EditorsPick.vue'
import Subscription from '@/views/landings/Blog/components/Subscription.vue'
import Footer from '@/views/landings/Blog/components/Footer.vue'
</script>

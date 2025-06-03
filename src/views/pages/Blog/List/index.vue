<template>
  <main class="page-wrapper">
    <NavBar />
    <b-container class="pt-5 pb-lg-5 pb-md-4 pb-2 my-5">
      <Breadcrumb title="Blog list no sidebar" :class="'pb-lg-4'" />

      <Filter />

      <BlogPost />
    </b-container>
  </main>
  <Subscription />

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Subscription from '@/views/pages/Blog/List/components/Subscription.vue'
import Footer from '@/views/pages/Blog/List/components/Footer.vue'
import Filter from '@/views/pages/Blog/List/components/Filter.vue'
import BlogPost from '@/views/pages/Blog/List/components/BlogPost.vue'
</script>

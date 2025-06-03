<template>
  <main class="page-wrapper">
    <NavBar />
    <b-container class="pt-5 pb-lg-5 pb-md-4 pb-2 my-5">
      <Breadcrumb :class="'pb-lg-4'" title="Blog grid with sidebar" />

      <BlogPost />
    </b-container>
  </main>

  <Subscription />

  <Footer />
</template>

<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import NavBar from '@/components/NavBar/NavBar.vue'
import Subscription from '@/views/pages/Blog/GridSidebar/components/Subscription.vue'
import Footer from '@/views/pages/Blog/GridSidebar/components/Footer.vue'
import BlogPost from '@/views/pages/Blog/GridSidebar/components/BlogPost.vue'
</script>

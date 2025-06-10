<template>
  <main class="page-wrapper">
    <NavBar />
    <b-container class="pt-5 pb-lg-5 pb-md-4 pb-2 my-5">
      <Breadcrumb title="Blog" :class="'pb-lg-4'" />

      <!-- <Filter /> -->

      <BlogPost />
      
    </b-container>
  </main>
  <!-- <Subscription /> -->

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Footer from '@/views/Makitapi/1Landing/components/Footer.vue'
import BlogPost from '@/views/Makitapi/3Blog/components/BlogPost.vue'

import Filter from '@/views/Makitapi/3Blog/components/Filter.vue'
import Subscription from '@/views/Makitapi/3Blog/components/Subscription.vue'

</script>

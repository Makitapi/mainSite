<template>
  <main class="page-wrapper">
    <NavBar />
    <b-container class="pt-5 pb-lg-5 pb-md-4 pb-2 my-5">
      <Breadcrumb title="Blog list with sidebar" :class="'pb-lg-4'" />

      <b-row class="mb-md-2 mb-xl-4">
        <BlogPost />

        <Sidebar />
      </b-row>
    </b-container>
  </main>
  <Subscription />

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Subscription from '@/views/pages/Blog/ListSidebar/components/Subscription.vue'
import Footer from '@/views/pages/Blog/ListSidebar/components/Footer.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from '@/views/pages/Blog/ListSidebar/components/Sidebar.vue'
import BlogPost from '@/views/pages/Blog/ListSidebar/components/BlogPost.vue'
</script>

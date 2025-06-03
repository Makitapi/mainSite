<template>
  <main class="page-wrapper">
    <NavBar />

    <b-container class="overflow-hidden py-5 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
      <Breadcrumb :class="'pb-lg-4'" title="Portfolio grid v.1" />

      <Filter />
    </b-container>
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Filter from '@/views/pages/Portfolio/Grid1/components/Filter.vue'
import Footer from '@/views/pages/Portfolio/Grid1/components/Footer.vue'
</script>

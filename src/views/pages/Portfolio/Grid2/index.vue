<template>
  <main class="page-wrapper">
    <NavBar />
    <b-container class="overflow-hidden py-5 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
      <Breadcrumb :class="'pb-lg-4'" title="Portfolio grid v.2" />

      <PortfolioGrid />
    </b-container>
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/NavBar/NavBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Footer from '@/views/pages/Portfolio/Grid2/components/Footer.vue'
import PortfolioGrid from '@/views/pages/Portfolio/Grid2/components/PortfolioGrid.vue'

onMounted(() => {
  document.querySelector('a.btn')?.classList.add('rounded-0')
})

onUnmounted(() => {
  document.querySelector('a.btn')?.classList.remove('rounded-0')
})
</script>

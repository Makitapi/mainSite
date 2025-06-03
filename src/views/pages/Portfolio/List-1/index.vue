<template>
  <main class="page-wrapper">
    <NavBar />

    <section class="overflow-hidden">
      <b-container class="pt-5 pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
        <Breadcrumb class="pb-lg-4" title="Portfolio list v.1" />

        <CaseStudies />
      </b-container>
    </section>
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import CaseStudies from '@/views/pages/Portfolio/List-1/components/CaseStudies.vue'
import Footer from '@/views/pages/Portfolio/List-1/components/Footer.vue'
</script>

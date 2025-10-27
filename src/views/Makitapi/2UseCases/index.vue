<template>
  <main class="page-wrapper">
    <NavBar button-class="rounded-pill" />

    <b-container class="pt-5 pb-lg-2 pb-xl-2 py-xxl-3 my-5">
    <Breadcrumb :title="$t('useCases.breadcrumbTitle')" :class="'pb-lg-4 pb-2'" />
    </b-container>

    <Hero />

    <Industries />

  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Hero from '@/views/Makitapi/2UseCases/components/Hero.vue'
import Industries from '@/views/Makitapi/2UseCases/components/Industries.vue'
import Footer from '@/views/Makitapi/1Landing/components/Footer.vue'
</script>

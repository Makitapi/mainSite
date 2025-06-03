<template>
  <NavBar />
  <main class="page-wrapper">
    <b-container class="pt-5 pb-xxl-3 mt-5">
      <Breadcrumb title="Services v.2" :class="'pb-lg-4 pb-2'" />
      <OurServices />
    </b-container>

    <Features />

    <Testimonials />

    <CTA />
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import OurServices from '@/views/pages/services/ServicesV2/components/OurServices.vue'
import Features from '@/views/pages/services/ServicesV2/components/Features.vue'
import Testimonials from '@/views/pages/services/ServicesV2/components/Testimonials.vue'
import CTA from '@/views/pages/services/ServicesV2/components/CTA.vue'
import Footer from '@/views/pages/services/ServicesV2/components/Footer.vue'
</script>

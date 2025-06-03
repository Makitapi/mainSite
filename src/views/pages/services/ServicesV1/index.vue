<template>
  <NavBar />
  <main class="page-wrapper">
    <b-container class="py-5 mt-5 mb-md-3 mb-lg-4 mb-xxl-5">
      <Breadcrumb title="Services v.1" class="pt-lg-3 pb-lg-4 pb-2" />
      <Services />
    </b-container>

    <Benefits />

    <Testimonials />

    <CTA />
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import Services from '@/views/pages/services/ServicesV1/components/Services.vue'
import Benefits from '@/views/pages/services/ServicesV1/components/Benefits.vue'
import Testimonials from '@/views/pages/services/ServicesV1/components/Testimonials.vue'
import CTA from '@/views/pages/services/ServicesV1/components/CTA.vue'
import NavBar from '@/components/NavBar/NavBar.vue'
import Footer from '@/views/pages/services/ServicesV1/components/Footer.vue'
</script>

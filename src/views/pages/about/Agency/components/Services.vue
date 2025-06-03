<template>
  <section class="bg-secondary py-5">
    <b-container class="py-3 py-sm-4 py-lg-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
      <div class="fs-sm text-uppercase mb-3 mt-xl-2 mt-xxl-3">Work with us</div>
      <h2 class="h1 pb-3 mb-lg-4">Our services</h2>
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 pb-xl-2 pb-xxl-3">
        <b-col v-for="(service, idx) in services" :key="idx">
          <ServiceCard :service="service" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { services } from '@/views/pages/about/Agency/data'
import ServiceCard from '@/views/pages/about/Agency/components/ServiceCard.vue'
</script>

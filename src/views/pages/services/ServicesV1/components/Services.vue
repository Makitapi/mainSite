<template>
  <h1 class="text-center">Our services</h1>
  <p class="text-center pb-4 mb-2 mb-lg-3">We provide a wide range of consulting services</p>
  <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 pb-sm-3 pb-md-4 pb-xl-5">
    <b-col v-for="(service, idx) in serviceGrid" :key="idx">
      <ServiceCard :service="service" />
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import ServiceCard from '@/views/pages/services/ServicesV1/components/ServiceCard.vue'
import { serviceGrid } from '@/views/pages/services/ServicesV1/data'
</script>

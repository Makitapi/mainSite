<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <h2 class="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">Our services</h2>
    <p class="text-center pb-3 mb-3 mb-lg-4">With the support of independent referents, you can solve many challenges</p>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      <b-col v-for="(service, idx) in services" :key="idx">
        <ServiceCard :service="service" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { services } from '@/views/landings/Corporate/data'
import ServiceCard from '@/views/landings/Corporate/components/ServiceCard.vue'
</script>

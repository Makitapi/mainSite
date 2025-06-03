<template>
  <b-container class="py-5">
    <h2 class="h1 text-center">Our services</h2>
    <p class="text-center pb-4 mb-2 mb-lg-3">We provide a wide range of consulting services</p>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      <b-col v-for="(service, idx) in services" :key="idx">
        <ServiceCard :service="service" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import ServiceCard from '@/views/landings/BusinessConsulting/components/ServiceCard.vue'
import { services } from '@/views/landings/BusinessConsulting/data'
</script>

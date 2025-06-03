<template>
  <b-row>
    <b-col lg="4" class="pb-3 mb-3">
      <h2 class="h1">Our services</h2>
      <p class="pe-5 mb-0">With the support of our result driven team you can solve many challenges.</p>
    </b-col>
    <b-col lg="8">
      <b-row class="row-cols-1 row-cols-sm-2 g-4">
        <b-col v-for="(serviceChunk, idx) in allServices" :key="idx">
          <ServiceCard v-for="(service, idx) in serviceChunk" :key="idx" :class="{ 'mb-4': idx === 0 }" :service="service" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script lang="ts" setup>
import { services } from '@/views/pages/services/ServicesV2/data'
import { splitArray } from '@/helpers/array'
import ServiceCard from '@/views/pages/services/ServicesV2/components/ServiceCard.vue'

const allServices = splitArray(services, 2)
</script>

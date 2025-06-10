<template>
  <b-container class="py-5">
    <h2 class="h1 text-center">Why Makitapi</h2>
    <p class="text-center pb-4 mb-2 mb-lg-3">What to expect when working with our solutions</p>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      <b-col v-for="(WhyMakitapi, idx) in WhyMakitapi" :key="idx">
        <ServiceCard :service="WhyMakitapi" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import ServiceCard from '@/views/Makitapi/1Landing/components/ServiceCard.vue'
import { WhyMakitapi } from '@/views/Makitapi/1Landing/data'
</script>

<template>
  <b-container class="py-5 my-lg-3 my-xl-4 my-xxl-5">
    <h2 class="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">We partner with more than 60 brands</h2>
    <p class="text-center pb-2 pb-sm-3">Clients who have become our friends for many years</p>
    <b-row class="row-cols-3 row-cols-md-4 g-2 g-md-4 pb-2 pb-sm-3 pb-md-4 pb-xl-5">
      <b-col v-for="(partner, idx) in partners" :key="idx">
        <img class="d-block d-dark-mode-none mx-auto" :src="partner.image.dark" width="220" :alt="partner.name" />
        <img class="d-none d-dark-mode-block mx-auto" :src="partner.image.light" width="220" :alt="partner.name" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { partners } from '@/views/landings/Corporate/data'
</script>

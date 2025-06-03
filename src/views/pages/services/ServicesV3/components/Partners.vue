<template>
  <b-container class="pt-2 pt-sm-0">
    <h2 class="h1 text-center">We partner with more than 60 brands</h2>
    <p class="text-center pb-2 pb-sm-3">Clients who have become our friends for many years</p>
    <b-row class="row-cols-3 row-cols-md-4 g-2 g-md-4">
      <b-col v-for="(partner, idx) in partners" :key="idx">
        <img class="d-block d-dark-mode-none mx-auto" :src="partner.image.dark" width="220" :alt="partner.name" />
        <img class="d-none d-dark-mode-block mx-auto" :src="partner.image.light" width="220" :alt="partner.name" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { partners } from '@/views/pages/services/ServicesV3/data'
</script>

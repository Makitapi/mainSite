<template>
  <b-container class="pt-5 mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5">
    <h2 class="h1 text-center pt-3 pt-sm-4 pt-lg-5 pb-3 mb-3 mb-lg-4 mt-xl-3">Our benefits</h2>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <b-col v-for="(benefit, idx) in benefits" :key="idx">
        <BenefitCard :benefit="benefit" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { benefits } from '@/views/pages/about/Product/data'
import BenefitCard from '@/views/pages/about/Product/components/BenefitCard.vue'
</script>

<template>
  <b-container class="pb-2 pb-sm-3 pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <h2 class="h1 text-center pt-2 pt-sm-4 pt-lg-5 pb-2 mb-3 mb-lg-4 mt-md-3 mt-lg-0">We employ the best trainers</h2>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <b-col class="text-center pt-2" v-for="(trainer, idx) in trainers" :key="idx">
        <TrainerCard :trainer="trainer" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import TrainerCard from '@/views/landings/YogaStudio/components/TrainerCard.vue'
import { trainers } from '@/views/landings/YogaStudio/data'
</script>

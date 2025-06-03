<template>
  <b-container class="py-5 my-sm-2 my-md-4 my-lg-5">
    <h2 class="h1 text-center pt-sm-3 mt-xxl-3 mx-auto" style="max-width: 40rem">What do you get with our tool?</h2>
    <p class="fs-lg text-center pb-3 mb-lg-4 mx-auto" style="max-width: 30rem">Make sure all your tasks are organized so you can set the priorities and focus on important.</p>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-3 gy-sm-4 gy-xl-5 gx-4 gx-md-5 pb-xxl-4 mb-sm-2 mb-lg-0 mb-xl-2">
      <b-col v-for="(feature, idx) in features" :key="idx">
        <div class="text-center px-xxl-4">
          <span v-html="feature.svg" />
          <h3 class="h4 mb-2">{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { features } from '@/views/landings/SaasV3/data'
</script>

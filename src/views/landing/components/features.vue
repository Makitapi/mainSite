<template>
  <b-container class="py-5 mt-n3 mt-sm-n2 mt-md-0 my-lg-3 my-xl-4 my-xxl-5">
    <h2 class="display-5 text-center pt-md-3 pt-lg-4 pb-xxl-2 mt-xl-3 mb-4 mb-sm-5">More Around features</h2>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4 gy-sm-5 pb-md-4 pb-lg-5 mb-2 mb-lg-0 mb-xxl-2">
      <b-col class="text-center text-sm-start pt-2 pt-sm-0" v-for="(feature, idx) in features" :key="idx">
        <div class="pe-md-3 pe-lg-3 pe-xl-5">
          <img class="d-inline-block mb-3 mb-lg-4" :src="feature.image" width="56" alt="Bootstrap" />
          <h3 class="h5 mb-2">{{ feature.title }}</h3>
          <p class="mb-0">{{ feature.description }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { features } from '@/views/landing/data'
</script>

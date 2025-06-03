<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <div class="text-center pb-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mx-auto mb-sm-2 mb-md-3 mb-lg-4" style="max-width: 525px">
      <h2 class="h1">About Around</h2>
      <p class="mb-0">Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus.</p>
    </div>
    <b-row class="row-cols-2 row-cols-sm-3 gy-sm-2 g-md-4">
      <b-col class="card border-0 bg-transparent p-xxl-2" v-for="(about, idx) in abouts" :key="idx">
        <b-card-body class="text-center p-3 p-sm-4">
          <i class="display-1 fw-normal text-primary mb-3 mb-sm-4" :class="about.icon"></i>
          <div class="h2 fw-normal mb-0">{{ about.title }}</div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { abouts } from '@/views/landings/CoworkingSpace/data'
</script>

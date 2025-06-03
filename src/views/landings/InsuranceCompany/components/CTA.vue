<template>
  <b-container class="pt-lg-4 pt-xl-5 mt-lg-2 mt-xxl-4">
    <div class="position-relative bg-size-cover bg-position-center rounded-3 py-5" :style="`background-image: url(${ctaBg})`">
      <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
      <b-row class="position-relative z-2 py-md-4 py-lg-5 my-2">
        <b-col cols="8" sm="6" md="5" lg="4" xxl="3" class="offset-1">
          <h2 class="h1 text-white pb-2 pb-sm-3">See how much you can save</h2>
          <a class="btn btn-primary" href="#">Get a quote now</a>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script setup lang="ts">
import ctaBg from '@/assets/img/landing/insurance/cta-bg.jpg'
</script>

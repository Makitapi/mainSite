<template>
  <section class="bg-dark py-5" data-bs-theme="dark">
    <b-container class="pt-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
      <b-row class="pt-md-2 pt-lg-3 pt-xl-4 pb-lg-2 pb-xl-3">
        <b-col md="6">
          <h2 class="h1 pe-xxl-5 me-xl-4 mb-md-0">Our <span class="text-warning">data centers</span> spread all over the world. Get access to the API from anywhere</h2>
        </b-col>
        <b-col md="6" xl="5" class="offset-xl-1">
          <p class="text-body fs-xl mb-0">Our data centers are a key component of our global infrastructure, providing reliable and scalable computing resources to customers around the world. We offer a highly distributed and resilient platform that can support the most demanding workloads.</p>
        </b-col>
      </b-row>
      <div class="pt-5 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5">
        <img :src="mapImg" alt="Map" />
      </div>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import mapImg from '@/assets/img/landing/saas-4/map.png'
</script>

<template>
  <section class="rounded-1 overflow-hidden mb-5" style="background-color: #e3e5e9" data-bs-theme="light">
    <b-row class="align-items-center g-0">
      <b-col md="6" offset-xl="1" class="text-center text-md-start">
        <div class="py-4 px-4 px-sm-5 pe-md-0 ps-xl-4">
          <p class="text-body fs-xs text-uppercase pt-3 pt-md-0 mb-3 mb-lg-4">Best selling</p>
          <h2 class="h1 pb-2 pb-xl-3">Cozy corner for the living room at a <span class="text-primary">discount up to 40%</span></h2>
          <a class="btn btn-sm btn-outline-dark" href="#" data-bs-theme="light">Explore</a>
        </div>
      </b-col>
      <b-col md="6" xl="5" class="d-flex justify-content-end">
        <img :src="banner" width="491" alt="Banner" />
      </b-col>
    </b-row>
  </section>
</template>

<script setup lang="ts">
import banner from '@/assets/img/shop/banner.jpg'
</script>

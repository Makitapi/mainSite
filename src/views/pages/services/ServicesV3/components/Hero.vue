<template>
  <Jarallax custom-class="jarallax bg-dark py-5" :options="{ speed: 0.6 }" data-bs-theme="dark">
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-60"></div>
    <div class="jarallax-img" :style="`background-image: url(${heroBackground});`"></div>
    <b-container class="position-relative z-2 pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
      <nav aria-label="breadcrumb">
        <ol class="pt-lg-3 mb-0 breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'landing' }">Home</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Services v.3</li>
        </ol>
      </nav>

      <div class="d-none d-xxl-block" style="height: 170px"></div>
      <div class="d-none d-lg-block d-xxl-none" style="height: 120px"></div>
      <div class="d-none d-md-block d-lg-none" style="height: 80px"></div>
      <div class="d-md-none" style="height: 40px"></div>
      <h1 class="display-2 mb-4">Our services</h1>
      <p class="text-body mb-0" style="max-width: 480px">Web studio Around is a team that creates effective websites and applications that will help you grow your business.</p>

      <div class="d-none d-xxl-block" style="height: 220px"></div>
      <div class="d-none d-lg-block d-xxl-none" style="height: 160px"></div>
      <div class="d-none d-md-block d-lg-none" style="height: 100px"></div>
      <div class="d-md-none" style="height: 50px"></div>
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pb-1 pb-md-3">
        <b-col v-for="(service, idx) in services" :key="idx">
          <div class="d-flex align-items-center">
            <div class="position-relative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div class="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              <img class="d-block m-1" :src="service.image" width="32" alt="Icon" />
            </div>
            <h3 class="h5 ps-3 mb-0">{{ service.title }}</h3>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </Jarallax>
</template>
<script lang="ts" setup>
import { services } from '@/views/pages/services/ServicesV3/data'
import Jarallax from '@/components/Jarallax.vue'
import heroBackground from '@/assets/img/services/v3/hero-bg.jpg'
</script>

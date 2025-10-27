<template>
  <section class="position-relative pt-5 mb-5">
    <div class="bg-secondary position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block"></div>
    <div class="bg-secondary position-absolute top-0 end-0 w-100 h-100 d-lg-none"></div>
    <b-container class="position-relative z-2 py-5 pb-lg-0">

      <b-breadcrumb class="pt-lg-3" aria-label="breadcrumb">
        <b-breadcrumb-item :to="{ name: 'landing' }">{{ $t('projects.breadcrumb.home') }}</b-breadcrumb-item>
        <b-breadcrumb-item :to="{ name: 'Projects' }">{{ $t('projects.breadcrumb.projects') }}</b-breadcrumb-item>
        <b-breadcrumb-item>{{ $t('projects.project2.title') }}</b-breadcrumb-item>
      </b-breadcrumb>

      <div class="d-lg-flex align-items-center pt-3 pb-xxl-5">
        <img class="d-block order-lg-2 me-auto me-lg-0 ms-auto" :src="single2Img" width="480" alt="Img" data-aos="fade-down-left" data-aos-duration="500" data-aos-offset="50" />

        <div class="order-lg-1 text-center text-lg-start pe-lg-4 py-4 py-md-5">
          <h1 class="display-2 text-uppercase pb-3 pb-lg-4">{{ $t('projects.project2.title') }}</h1>
          <p class="fs-lg mx-auto mx-lg-0 mb-0" style="max-width: 530px">{{ $t('projects.project2.description') }}</p>
        </div>
      </div>
      
      
      <!-- Social links -->
      <!-- <ul class="nav justify-content-center justify-content-lg-start mx-n2 pt-lg-5 mb-0">
        <li class="nav-item me-3">
          <a class="nav-link p-2" href="#">instagram</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link p-2" href="#">dribbble</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-2" href="#">behance</a>
        </li>
      </ul> -->
    </b-container>
  </section>
</template>

<script setup lang="ts">
import single2Img from '@/assets/img/portfolio/Project2/p3.png'

import { ref } from 'vue'
const index = ref(1)
import { listData } from '@/views/Makitapi/4Projects/data'
</script>

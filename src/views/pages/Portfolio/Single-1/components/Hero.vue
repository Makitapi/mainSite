<template>
  <b-breadcrumb class="pt-lg-2 pb-lg-3 pb-1" aria-label="breadcrumb">
    <b-breadcrumb-item>Home </b-breadcrumb-item>
    <b-breadcrumb-item>Portfolio</b-breadcrumb-item>
    <b-breadcrumb-item active aria-current="page">Single project v.1</b-breadcrumb-item>
  </b-breadcrumb>

  <b-row>
    <b-col lg="11" xl="10">
      <img class="d-block d-dark-mode-none mb-2 mb-sm-3" :src="vintageDark" alt="Vintage" />
      <img class="d-none d-dark-mode-block mb-2 mb-sm-3" :src="vintageLight" alt="Vintage" />
      <h1 class="display-2 pb-3 pb-md-4 pb-lg-5">Business strategy for a brand of vintage bags</h1>
    </b-col>
  </b-row>

  <img class="d-block rounded-5 mb-3 mb-xl-4 mb-xxl-5" :src="v1Img" alt="Img" />
  <div></div>
</template>

<script setup lang="ts">
import vintageDark from '@/assets/img/portfolio/brands/vintage-dark.svg'
import vintageLight from '@/assets/img/portfolio/brands/vintage-light.svg'
import v1Img from '@/assets/img/portfolio/single/v1/01.jpg'
</script>

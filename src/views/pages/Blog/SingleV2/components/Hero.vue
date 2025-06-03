<template>
  <b-container class="py-5 mt-5 mb-md-2 mb-lg-3 mb-xl-4">
    <BreadcrumbTwo title="Blog" subtitle="Single post v.2" :class="'pb-lg-4 pb-2'" />

    <!-- Post title + post meta -->
    <h1 class="display-4 text-center pb-2 pb-lg-3">How to look for inspiration for new goals in life and remember to give yourself a break?</h1>
    <div class="d-flex flex-wrap align-items-center justify-content-center mt-n2">
      <span class="text-body-secondary fs-sm fw-normal p-0 mt-2 me-3">
        12
        <i class="ai-share fs-lg ms-1"></i>
      </span>
      <a class="nav-link position-relative text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="#comments" data-scroll data-scroll-offset="60">
        <span class="position-absolute w-100 h-100 top-0 start-0" data-bs-toggle="collapse" data-bs-target="#commentsCollapse"></span>
        4
        <i class="ai-message fs-lg ms-1"></i>
      </a>
      <span class="fs-xs opacity-20 mt-2 mx-3">|</span>
      <span class="fs-sm text-body-secondary mt-2">16 hours ago</span>
      <span class="fs-xs opacity-20 mt-2 mx-3">|</span>
      <a class="badge text-nav fs-xs border mt-2" href="#">Inspiration</a>
    </div>
  </b-container>
  <Jarallax custom-class="jarallax" :options="{ speed: 0.65 }">
    <div class="jarallax-img bg-position-center-y" :style="{ backgroundImage: `url('${coverImg}')` }"></div>
    <div class="d-none d-xxl-block" style="height: 760px"></div>
    <div class="d-none d-xl-block d-xxl-none" style="height: 650px"></div>
    <div class="d-none d-lg-block d-xl-none" style="height: 500px"></div>
    <div class="d-none d-md-block d-lg-none" style="height: 400px"></div>
    <div class="d-md-none" style="height: 300px"></div>
  </Jarallax>
</template>

<script lang="ts" setup>
import BreadcrumbTwo from '@/components/BreadcrumbTwo.vue'
import Jarallax from '@/components/Jarallax.vue'
import coverImg from '@/assets/img/blog/single/cover.jpg'
</script>

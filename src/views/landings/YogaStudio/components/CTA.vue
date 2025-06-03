<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <div class="bg-primary rounded-5 overflow-hidden mt-2 mt-sm-4 mt-lg-5">
      <img class="position-absolute top-50 start-0 translate-middle-y d-none d-md-block" :src="ctaBg" width="186" alt="Background flower" />
      <b-row class="position-relative z-2 align-items-center">
        <b-col md="6" lg="5" class="offset-lg-1">
          <div class="text-center text-md-start py-5 px-4 px-sm-5 pe-md-0 ps-lg-4 ps-xl-5">
            <div class="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <span class="bg-white opacity-70 me-2 d-none d-md-block" style="width: 40px; height: 1px; margin-top: -1px"></span>
              <span class="fs-xs fw-semibold text-white opacity-70 text-uppercase">Special offer</span>
            </div>
            <h2 class="h1 text-white pb-2 pb-sm-3">Get 30% off when you buy an annual pass</h2>
            <a class="btn btn-outline-light fs-base" href="#">Buy an annual pass</a>
          </div>
        </b-col>
        <b-col md="6">
          <img class="d-block mx-auto mx-md-0 mt-n4 mt-md-0" :src="ctaImage" width="534" alt="Img" />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import ctaBg from '@/assets/img/landing/yoga-studio/cta/bg.svg'
import ctaImage from '@/assets/img/landing/yoga-studio/cta/image.png'
</script>

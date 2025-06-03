<template>
  <b-container class="pb-5 mb-xl-3 mb-xxl-5" data-aos="fade-up" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="lg">
    <b-row class="align-items-center pb-3 pb-md-4 pb-lg-5">
      <b-col md="6" lg="7" class="pb-3 pb-sm-4 pb-md-0">
        <img class="d-dark-mode-none" :src="mobileAppLight" width="636" alt="Mobile screens" />
        <img class="d-none d-dark-mode-block" :src="mobileAppDark" width="636" alt="Mobile screens" />
      </b-col>
      <b-col md="6" lg="5" data-aos="fade-up" data-aos-duration="850" data-aos-offset="150" data-disable-parallax-down="lg">
        <h2 class="h1 text-center text-md-start pb-4 pb-lg-5 mb-1 mb-md-2 mb-lg-0 mb-xxl-2">
          Download our app<br class="d-none d-md-inline" />
          for any devices
        </h2>
        <div class="d-flex justify-content-between mx-auto mx-md-0" style="max-width: 450px">
          <div class="pe-3">
            <p class="text-body-secondary mb-2">App Store</p>
            <div class="d-flex mb-3">
              <i class="ai-star-filled text-warning me-1"></i>
              <i class="ai-star-filled text-warning me-1"></i>
              <i class="ai-star-filled text-warning me-1"></i>
              <i class="ai-star-filled text-warning me-1"></i>
              <i class="ai-star-filled text-warning"></i>
            </div>
            <h3 class="h4 mb-1">Editor's Choice</h3>
            <p class="pb-2 pb-sm-3 pb-md-4 pb-xl-5">rating 4.7, 187K+ reviews</p>
            <a class="btn btn-dark btn-lg px-3 py-2" href="#">
              <img class="d-dark-mode-none mx-1" :src="appStoreLight" width="136" alt="App Store" />
              <img class="d-none d-dark-mode-block mx-1" :src="appStoreDark" width="136" alt="App Store" />
            </a>
          </div>
          <div class="border-end"></div>
          <div class="ps-3">
            <p class="text-body-secondary mb-2">Google Play</p>
            <div class="d-flex mb-3">
              <i class="ai-star-filled text-warning me-1"></i>
              <i class="ai-star-filled text-warning me-1"></i>
              <i class="ai-star-filled text-warning me-1"></i>
              <i class="ai-star-filled text-warning me-1"></i>
              <i class="ai-star-filled text-warning"></i>
            </div>
            <h3 class="h4 mb-1">Editor's Choice</h3>
            <p class="pb-2 pb-sm-3 pb-md-4 pb-xl-5">rating 4.7, 187K+ reviews</p>
            <a class="btn btn-dark btn-lg px-3 py-2" href="#">
              <img class="d-dark-mode-none mx-1" :src="googleplayLight" width="135" alt="Google Play" />
              <img class="d-none d-dark-mode-block mx-1" :src="googleplayDark" width="135" alt="Google Play" />
            </a>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import mobileAppLight from '@/assets/img/landing/saas-3/mobile-app-light.jpg'
import mobileAppDark from '@/assets/img/landing/saas-3/mobile-app-dark.jpg'
import appStoreLight from '@/assets/img/market/appstore-light.svg'
import appStoreDark from '@/assets/img/market/appstore-dark.svg'
import googleplayLight from '@/assets/img/market/googleplay-light.svg'
import googleplayDark from '@/assets/img/market/googleplay-dark.svg'
</script>

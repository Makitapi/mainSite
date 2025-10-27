<template>
  <section class="overflow-hidden py-5 my-md-2 my-xl-4 my-xxl-5">
    <b-container class="py-2 py-sm-4 py-lg-5">
      <h2 class="h1 text-center pb-1 mb-1 mt-xxl-2">{{ $t('howItWorks.title') }}</h2>
      <p class="text-center pb-4 mb-2 mb-lg-3">{{ $t('howItWorks.subtitle') }}</p>

      <b-row class="align-items-center position-relative pb-5 pb-lg-0 mb-1 mb-sm-2 mb-md-4 mb-lg-0">
        <b-col md="6" lg="5" xl="4" class="offset-xl-1 order-md-1" data-aos="fade-right" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
          <div class="pe-md-4 pe-lg-0">
            <span class="badge fs-sm bg-primary bg-opacity-10 text-primary mb-3 mb-lg-4">Step 01</span>
            <h3 class="h2 mb-3 mb-lg-4">{{ $t('howItWorks.step1.title') }}</h3>
            <p class="pb-1 pb-lg-0 mb-4 mb-lg-5">{{ $t('howItWorks.step1.description') }}</p>
            <!-- <router-link class="btn btn-outline-primary rounded-pill" to="#">Schedule a Demo</router-link> -->
          </div>
        </b-col>
        <b-col md="6" xl="5" class="offset-lg-1 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0" data-aos="fade-left" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
          <ul class="list-unstyled mb-0">
            <li v-for="(bullet, index) in step1Bullets" :key="index" class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              {{ bullet }}
            </li>
          </ul>
        </b-col>
      </b-row>

      <div class="d-none d-lg-flex justify-content-center" data-aos="fade-in" data-aos-duration="500" data-aos-offset="250">
        <svg class="d-block text-primary" width="339" height="365" viewBox="100 20 339 365" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: -150px; margin-top: -140px; margin-bottom: -108px">
          <path d="M324 291.371C120.111 291.37 240.756 58.7225 1.00032 73.2606" stroke="url(#arrow1)" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 6"></path>
          <path d="M337.375 290.62C338.074 290.998 338.074 292.001 337.375 292.379L328.476 297.196C327.81 297.557 327 297.074 327 296.317L327 286.683C327 285.925 327.81 285.443 328.476 285.803L337.375 290.62Z" fill="currentColor"></path>
          <defs>
            <linearGradient id="arrow1" x1="324" y1="291.5" x2="-2.99974" y2="72.4997" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="currentColor"></stop>
              <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <b-row class="align-items-center position-relative pb-5 pb-lg-0 mb-1 mb-sm-2 mb-md-4 mb-lg-0">
        <b-col md="6" lg="5" xl="4" class="offset-lg-1 order-2 order-md-1" data-aos="fade-left" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
          <ul class="list-unstyled mb-0">
            <li v-for="(bullet, index) in step2Bullets" :key="index" class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              {{ bullet }}
            </li>
          </ul>
        </b-col>
        <b-col md="6" xl="5" class="offset-xl-1 pb-2 pb-md-0 mb-4 mb-md-0 order-1 order-md-2" data-aos="fade-right" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
          <div class="ps-md-4 ps-lg-0">
            <span class="badge fs-sm bg-primary bg-opacity-10 text-primary mb-3 mb-lg-4">Step 02</span>
            <h3 class="h2 mb-3 mb-lg-4">{{ $t('howItWorks.step2.title') }}</h3>
            <p class="pb-1 pb-lg-0 mb-4 mb-lg-5">{{ $t('howItWorks.step2.description') }}</p>
          </div>
        </b-col>
      </b-row>

      <div class="d-none d-lg-flex justify-content-center" data-aos="fade-in" data-aos-duration="500" data-aos-offset="250">
        <svg class="d-block text-primary" width="263" height="275" viewBox="0 0 263 275" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top: -60px; margin-left: -120px; margin-bottom: -80px">
          <path d="M8.13678 249.647C7.47108 250.081 6.59001 249.602 6.59106 248.808L6.60444 238.689C6.60544 237.931 7.4158 237.45 8.08162 237.811L16.5478 242.408C17.2136 242.77 17.2512 243.712 16.6163 244.125L8.13678 249.647Z" fill="currentColor"></path>
          <path d="M261.961 37.8891C216.908 65.6243 128.226 135.486 133.916 193.05C141.029 265.005 265.134 173.468 173.666 148.634C89.2542 125.715 30.9125 210.547 13.9796 236.702" stroke="url(#arrow2)" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 6"></path>
          <defs>
            <linearGradient id="arrow2" x1="13.9797" y1="234.5" x2="276.704" y2="60.1939" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="currentColor"></stop>
              <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <b-row class="align-items-center position-relative">
        <b-col md="6" lg="5" xl="4" class="offset-xl-1 order-md-1" data-aos="fade-right" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
          <div class="pe-md-4 pe-lg-0">
            <span class="badge fs-sm bg-primary bg-opacity-10 text-primary mb-3 mb-lg-4">Step 03</span>
            <h3 class="h2 mb-3 mb-lg-4">{{ $t('howItWorks.step3.title') }}</h3>
            <p class="pb-1 pb-lg-0 mb-4 mb-lg-5">{{ $t('howItWorks.step3.description') }}</p>
            <!-- <router-link class="btn btn-outline-primary rounded-pill" to="#">Reachout to us</router-link> -->
          </div>
        </b-col>
        <b-col md="6" xl="5" class="offset-lg-1 order-md-2 d-md-flex justify-content-end pb-2 pb-md-0 mb-4 mb-md-0" data-aos="fade-left" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
          <ul class="list-unstyled mb-0">
            <li v-for="(bullet, index) in step3Bullets" :key="index" class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              {{ bullet }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const step1Bullets = computed(() => [
  t('howItWorks.step1.bullets.0'),
  t('howItWorks.step1.bullets.1'),
  t('howItWorks.step1.bullets.2'),
  t('howItWorks.step1.bullets.3')
])

const step2Bullets = computed(() => [
  t('howItWorks.step2.bullets.0'),
  t('howItWorks.step2.bullets.1'),
  t('howItWorks.step2.bullets.2'),
  t('howItWorks.step2.bullets.3')
])

const step3Bullets = computed(() => [
  t('howItWorks.step3.bullets.0'),
  t('howItWorks.step3.bullets.1'),
  t('howItWorks.step3.bullets.2'),
  t('howItWorks.step3.bullets.3')
])
</script>

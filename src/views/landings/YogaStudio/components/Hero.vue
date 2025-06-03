<template>
  <section class="position-relative min-vh-100 py-5" data-bs-theme="light">
    <!-- Background image slider -->
    <Swiper
      class="swiper-scale-effect position-absolute top-0 start-0 w-100 h-100"
      :modules="[Pagination, EffectFade, Autoplay]"
      :effect="'fade'"
      :speed="800"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide v-for="(image, idx) in swiperImages" :key="idx">
        <div class="swiper-slide-cover bg-position-top-center" :style="`background-image: url(${image});`" />
      </SwiperSlide>
      <div class="swiper-pagination mb-4" />
    </Swiper>

    <!-- Content -->
    <b-container class="position-relative z-2 py-lg-3 py-xl-5 my-5">
      <b-row class="pt-md-3 py-xxl-5 my-5">
        <b-col class="py-5 mb-md-4 mb-lg-5">
          <h1 class="display-1 text-uppercase mb-4">Yoga Studio</h1>
          <p class="d-block text-body fs-xl pb-2 mb-4 mb-md-5" style="max-width: 500px">The best yoga and meditation practices, adapted at a high level to the needs of the modern pace of life.</p>
          <div class="position-relative d-inline-flex align-items-center">
            <LightGallery custom-class="gallery">
              <a class="btn btn-icon btn-lg btn-primary rounded-circle stretched-link gallery-item" href="https://www.youtube.com/watch?v=SZCxKjgReQ4" data-bs-toggle="video" aria-label="Play video">
                <i class="ai-play-filled"></i>
              </a>
              <span class="text-body fs-lg fw-semibold ms-3">Watch Video</span>
            </LightGallery>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, EffectFade, Autoplay } from 'swiper/modules'
import LightGallery from '@/components/LightGallery.vue'

import heroImg1 from '@/assets/img/landing/yoga-studio/hero/01.jpg'
import heroImg2 from '@/assets/img/landing/yoga-studio/hero/02.jpg'
import heroImg3 from '@/assets/img/landing/yoga-studio/hero/03.jpg'

const swiperImages = [heroImg1, heroImg2, heroImg3]
</script>

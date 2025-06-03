<template>
  z
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <h2 class="h1 text-center pt-2 pt-sm-3 pt-md-4 pb-sm-2 pb-lg-3 mt-lg-2 mx-auto" style="max-width: 740px">Customers have consistently rated Around 4.7/5 stars</h2>
    <Swiper
      :modules="[Pagination]"
      :spaceBetween="24"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
      }"
    >
      <SwiperSlide v-for="(slide, idx) in swiperSlides" :key="idx">
        <div class="text-center p-3 p-sm-4 m-lg-2">
          <div class="d-flex justify-content-center fs-lg mb-4">
            <i v-for="(_star, idx) in new Array(Math.floor(slide.stars))" :key="idx" class="ai-star-filled text-warning mx-2"></i>
            <template v-if="slide.stars < 5">
              <i v-for="(_val, idx) in new Array(5 - Math.ceil(slide.stars))" :key="idx" class="ai-star-filled text-body-secondary opacity-40 mx-2"></i>
            </template>
          </div>
          <p class="mb-3">{{ slide.quote }}</p>
          <img class="d-inline-block d-dark-mode-none" v-if="slide.image.dark" :src="slide.image.dark" width="196" alt="Clutch" />
          <img class="d-none d-dark-mode-inline-block" v-if="slide.image.light && slide.image.dark" :src="slide.image.light" width="196" alt="Clutch" />
          <img class="d-inline-block" v-if="!slide.image.dark" :src="slide.image.light" width="196" alt="Product Hunt" />
        </div>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 d-lg-none"></div>
    </Swiper>
  </b-container>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { swiperSlides } from '@/views/landings/SaasV1/data'
</script>

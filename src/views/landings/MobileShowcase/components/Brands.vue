<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <swiper
      class="swiper pt-2 pt-sm-4"
      :modules="[Pagination]"
      :slides-per-view="2"
      :space-between="24"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        500: {
          slidesPerView: 3
        },
        750: {
          slidesPerView: 4
        },
        1000: {
          slidesPerView: 5
        },
        1200: {
          slidesPerView: 6
        }
      }"
      wrapper-class="pt-2"
    >
      <swiper-slide v-for="(brand, idx) in brandData" :key="idx">
        <div class="border rounded-4">
          <img class="d-block d-dark-mode-none mx-auto" :src="brand.image.dark" width="196" alt="Logo" />
          <img class="d-none d-dark-mode-block mx-auto" :src="brand.image.light" width="196" alt="Logo" />
        </div>
      </swiper-slide>

      <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-xl-none"></div>
    </swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { brandData } from '@/views/landings/MobileShowcase/data'
</script>

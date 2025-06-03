<template>
  <b-container class="border-top py-5 mb-1 mb-sm-2 mb-md-4 mb-lg-5">
    <Swiper
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="24"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        400: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }"
    >
      <SwiperSlide class="text-center text-sm-start" v-for="(swiper, idx) in featuresData" :key="idx">
        <div class="text-primary mb-3 mb-sm-4">
          <span v-html="swiper.icon" />
        </div>
        <h3 class="h5 mb-2 mb-sm-3">{{ swiper.title }}</h3>
        <p class="fs-sm mb-0">{{ swiper.description }}</p>
      </SwiperSlide>

      <!-- Pagination (Bullets) -->
      <div class="swiper-pagination position-relative bottom-0 pt-1 mt-4 d-lg-none"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { featuresData } from '@/views/pages/Shop/Single/data'
</script>

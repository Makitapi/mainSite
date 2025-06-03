<template>
  <b-container class="py-5 mt-2 mb-3 mt-sm-3 mb-sm-4 my-md-4 my-lg-5">
    <Swiper
      class="pb-xxl-4 mb-xl-2"
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
      <SwiperSlide class="text-center text-sm-start" v-for="(feature, idx) in features" :key="idx">
        <div class="text-primary mb-3 mb-sm-4">
          <span v-html="feature.icon" />
        </div>
        <h3 class="h5 mb-2 mb-sm-3">{{ feature.title }}</h3>
        <p class="fs-sm mb-0">{{ feature.description }}</p>
      </SwiperSlide>

      <div class="swiper-pagination position-relative bottom-0 pt-1 mt-4 d-lg-none"></div>
    </Swiper>
  </b-container>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { features } from '@/views/landings/ShopV1/data'
</script>

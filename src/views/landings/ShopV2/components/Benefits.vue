<template>
  <b-container class="py-5 my-lg-3 my-xl-4 my-xxl-5">
    <Swiper
      class="pt-3 pb-2 py-sm-3 py-md-4 py-xl-5 my-lg-2"
      :modules="[Pagination]"
      :spaceBetween="32"
      :loop="true"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        460: {
          slidesPerView: 2
        },
        700: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        }
      }"
    >
      <SwiperSlide class="text-center" v-for="(item, idx) in benefits" :key="idx">
        <img class="d-block mx-auto mb-4" :src="item.image" width="82" alt="Icon" />
        <h3 class="h4 pb-2 mb-1">{{ item.title }}</h3>
        <p class="fs-sm mb-0">{{ item.description }}</p>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { benefits } from '@/views/landings/ShopV2/data'
</script>

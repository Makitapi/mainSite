<template>
  <b-container class="pt-sm-2 pt-md-3 pt-lg-4 pt-xl-5 mt-xxl-4 pb-lg-2 pb-xl-4 pb-xxl-5">
    <h2 class="h1 text-center pb-3 pb-lg-4">Our services</h2>
    <Swiper
      :modules="[Pagination]"
      :spaceBetween="24"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        576: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }"
    >
      <SwiperSlide class="h-auto" v-for="(service, idx) in services" :key="idx">
        <ServiceCard :service="service" />
      </SwiperSlide>

      <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import ServiceCard from '@/views/landings/WebStudio/components/ServiceCard.vue'
import { services } from '@/views/landings/WebStudio/data'
</script>

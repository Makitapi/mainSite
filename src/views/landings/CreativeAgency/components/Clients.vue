<template>
  <section class="pt-sm-1 pt-lg-3 pt-xl-4">
    <b-container class="text-center">
      <h2 class="h1">We partner with more than 60 brands</h2>
      <p class="pb-1 pb-sm-2 pb-md-3 pb-lg-4 mb-3">Clients who have become our friends for many years</p>
    </b-container>
    <Swiper
      class="pb-3 pb-sm-4 mb-xl-2"
      :modules="[Pagination, Autoplay]"
      :spaceBetween="32"
      :loop="true"
      :grabCursor="false"
      :centeredSlides="true"
      :freeMode="true"
      :speed="10000"
      :freeModeMomentum="false"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false
      }"
      :breakpoints="{
        0: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
        800: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
        1400: { slidesPerView: 6 },
        1600: { slidesPerView: 7 }
      }"
      wrapperClass="swiper-wrapper"
    >
      <SwiperSlide v-for="(client, idx) in clients" :key="idx">
        <img class="d-block d-dark-mode-none mx-auto" :src="client.image.dark" width="196" alt="" />
        <img class="d-none d-dark-mode-block mx-auto" :src="client.image.light" width="196" alt="" />
      </SwiperSlide>
    </Swiper>

    <Swiper
      class="pb-3 pb-sm-4 mb-xl-2"
      :modules="[Pagination, Autoplay]"
      dir="rtl"
      :spaceBetween="32"
      :loop="true"
      :grabCursor="false"
      :centeredSlides="true"
      :freeMode="true"
      :speed="8500"
      :freeModeMomentum="false"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false
      }"
      :breakpoints="{
        0: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
        800: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
        1400: { slidesPerView: 6 },
        1600: { slidesPerView: 7 }
      }"
      wrapperClass="swiper-wrapper"
    >
      <SwiperSlide v-for="(client, index) in clientsRtl" :key="index">
        <img class="d-block d-dark-mode-none mx-auto" :src="client.image.dark" width="196" alt="" />
        <img class="d-none d-dark-mode-block mx-auto" :src="client.image.light" width="196" alt="" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import { clients, clientsRtl } from '@/views/landings/CreativeAgency/data'
</script>

<style lang="css">
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>

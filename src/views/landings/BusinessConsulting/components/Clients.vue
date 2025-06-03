<template>
  <section class="pb-5 pt-2 pt-sm-3 pt-md-4 pt-lg-5 my-xl-3 my-xxl-5">
    <b-container class="pb-4 mb-2 mb-lg-3">
      <h2 class="h1 text-center">Our clients</h2>
      <p class="text-center mb-0">More than 2,000 clients using Around to analyze data</p>
    </b-container>
    <Swiper
      class="pb-4"
      :modules="[Pagination, Autoplay]"
      :spaceBetween="24"
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
        400: { slidesPerView: 3 },
        600: { slidesPerView: 4 },
        800: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
        1400: { slidesPerView: 7 },
        1600: { slidesPerView: 8 }
      }"
      wrapperClass="swiper-wrapper"
    >
      <SwiperSlide v-for="(client, idx) in clients" :key="idx">
        <div class="bg-gray rounded-4">
          <img class="d-block d-dark-mode-none mx-auto" :src="client.image.dark" width="196" alt="Logo" />
          <img class="d-none d-dark-mode-block mx-auto" :src="client.image.light" width="196" alt="Logo" />
        </div>
      </SwiperSlide>
    </Swiper>

    <Swiper
      class="pb-4"
      :modules="[Pagination, Autoplay]"
      :spaceBetween="24"
      dir="rtl"
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
        400: { slidesPerView: 3 },
        600: { slidesPerView: 4 },
        800: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
        1400: { slidesPerView: 7 },
        1600: { slidesPerView: 8 }
      }"
      wrapperClass="swiper-wrapper"
    >
      <SwiperSlide v-for="(client, idx) in clientsRtl" :key="idx">
        <div class="bg-gray rounded-4">
          <img class="d-block d-dark-mode-none mx-auto" :src="client.image.dark" width="196" alt="Logo" />
          <img class="d-none d-dark-mode-block mx-auto" :src="client.image.light" width="196" alt="Logo" />
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import { clients, clientsRtl } from '@/views/landings/BusinessConsulting/data'
</script>

<style lang="css">
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>

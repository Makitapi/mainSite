<template>
  <section class="pt-5 mt-md-2 mt-xl-4 mt-xxl-5">
    <b-container class="pt-2 pt-sm-4 pt-lg-5 mt-xxl-2">
      <div class="fs-sm text-uppercase mb-3">Our Mission</div>
      <h2 class="display-6 pb-3 mb-lg-4">Professional approach</h2>
      <Swiper
        :modules="[Pagination]"
        :spaceBetween="24"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        :breakpoints="{
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide v-for="(mission, idx) in missions" :key="idx" class="h-auto">
          <MissionCard :mission="mission" />
        </SwiperSlide>

        <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { missions } from '@/views/pages/about/Agency/data'
import MissionCard from '@/views/pages/about/Agency/components/MissionCard.vue'
</script>

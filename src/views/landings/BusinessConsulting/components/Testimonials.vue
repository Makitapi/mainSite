<template>
  <b-container class="mt-n3 mt-sm-n2 pb-5 mb-md-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <h2 class="h1 text-center pb-3 pb-lg-4">Testimonials</h2>
    <Swiper
      :modules="[Pagination]"
      :spaceBetween="24"
      :loop="true"
      :autoHeight="true"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
      }"
      class="pb-1 pb-md-2 pb-lg-3 pb-xl-4"
    >
      <SwiperSlide v-for="(item, idx) in testimonialsSlider" :key="idx">
        <template v-for="(testimonial, idx) in item.slides" :key="idx">
          <TestimonialCard :testimonial="testimonial" :class="!idx && 'mb-4'" />
        </template>
      </SwiperSlide>

      <div class="swiper-pagination position-relative bottom-0 mt-2 mt-md-3 mt-lg-4 pt-4"></div>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import TestimonialCard from '@/views/landings/BusinessConsulting/components/TestimonialCard.vue'
import { testimonialsSlider } from '@/views/landings/BusinessConsulting/data'
</script>

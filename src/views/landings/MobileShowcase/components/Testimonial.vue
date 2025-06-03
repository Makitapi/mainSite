<template>
  <b-container class="py-5 mb-1 mb-sm-2 my-lg-3 my-xl-4 my-xxl-5">
    <b-row class="justify-content-center pt-2 pt-sm-4 pb-4 mb-2 mb-lg-3">
      <b-col lg="8" xl="7" xxl="6" class="text-center pt-2">
        <h2 class="h1 mb-1">Testimonials from students who recommend Around</h2>
      </b-col>
    </b-row>
    <swiper
      class="pb-2 pb-sm-4 pt-5"
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="24"
      :loop="true"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        800: {
          slidesPerView: 2
        }
      }"
    >
      <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx" class="h-auto">
        <TestimonialCard :testimonial="testimonial" />
      </SwiperSlide>

      <div class="swiper-pagination position-relative bottom-0 mt-2 mt-lg-3 pt-4" role="button"></div>
    </swiper>
  </b-container>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import TestimonialCard from '@/views/landings/MobileShowcase/components/TestimonialCard.vue'
import { testimonialData } from '@/views/landings/MobileShowcase/data'
</script>

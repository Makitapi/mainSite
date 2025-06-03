<template>
  <section class="bg-secondary py-sm-2 py-lg-3 py-xl-4 py-xxl-5">
    <b-container class="py-5">
      <h2 class="h1 text-center pt-1 pt-sm-2 pt-lg-3 pb-3 pb-lg-4">Testimonials</h2>
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

        <div class="swiper-pagination position-relative bottom-0 mt-2 mt-md-3 mt-lg-4 pt-4" role="button"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import TestimonialCard from '@/views/pages/services/ServicesV1/components/TestimonialCard.vue'
import { testimonialsSlider } from '@/views/pages/services/ServicesV1/data'
</script>

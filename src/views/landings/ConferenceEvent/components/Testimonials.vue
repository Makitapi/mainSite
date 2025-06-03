<template>
  <section class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <h2 class="h1 container text-center pt-2 pt-sm-3 pt-md-4 pb-3 mt-md-2 mt-xxl-3 mb-lg-4">What attendees say</h2>

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
        0: { slidesPerView: 1 },
        500: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1300: { slidesPerView: 4 },
        1600: { slidesPerView: 5 }
      }"
      wrapperClass="swiper-wrapper"
    >
      <SwiperSlide class="h-auto" v-for="(testimonial, idx) in testimonials" :key="idx">
        <TestimonialCard :testimonial="testimonial" />
      </SwiperSlide>
    </Swiper>

    <Swiper
      class="pb-4"
      :modules="[Pagination, Autoplay]"
      dir="rtl"
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
        0: { slidesPerView: 1 },
        500: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1300: { slidesPerView: 4 },
        1600: { slidesPerView: 5 }
      }"
      wrapperClass="swiper-wrapper"
    >
      <SwiperSlide class="h-auto" dir="ltr" v-for="(testimonial, idx) in testimonialsRtl" :key="idx">
        <TestimonialCard :testimonial="testimonial" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import { testimonials, testimonialsRtl } from '@/views/landings/ConferenceEvent/data'
import TestimonialCard from '@/views/landings/ConferenceEvent/components/TestimonialCard.vue'
</script>

<style lang="css">
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>

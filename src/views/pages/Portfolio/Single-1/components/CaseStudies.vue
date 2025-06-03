<template>
  <div class="d-flex align-items-center pb-3 mb-3 mb-lg-4">
    <h2 class="h1 mb-0">More case studies</h2>
    <div class="d-flex ms-auto">
      <button class="btn btn-sm btn-icon btn-outline-primary rounded-circle ms-3" type="button" id="prev-project" aria-label="Prev">
        <i class="ai-arrow-left"></i>
      </button>
      <button class="btn btn-sm btn-icon btn-outline-primary rounded-circle ms-3" type="button" id="next-project" aria-label="Next">
        <i class="ai-arrow-right"></i>
      </button>
    </div>
  </div>
  <Swiper
    class="pb-md-4 pb-xl-5"
    :modules="[Navigation]"
    :spaceBetween="24"
    :loop="true"
    :navigation="{
      prevEl: '#prev-project',
      nextEl: '#next-project'
    }"
    :breakpoints="{
      576: { slidesPerView: 2 }
    }"
  >
    <SwiperSlide v-for="(swiper, idx) in portfolioCaseStudies" :key="idx">
      <a class="d-block position-relative" href="#">
        <div class="rounded-5 position-absolute top-0 start-0 w-100 h-100" :style="[`background-color: ${swiper.backgroundColor}`]"></div>
        <img class="rounded-5 d-block position-relative z-2 mx-auto" :class="`bg-${swiper.variant}`" :src="swiper.image" width="636" alt="Img" />
      </a>
      <div class="pt-4 mt-sm-2">
        <h4>
          <a href="#">{{ swiper.title }}</a>
        </h4>
        <p class="mb-0">{{ swiper.description }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { portfolioCaseStudies } from '@/views/pages/Portfolio/Single-1/data'
</script>

<template>
  <b-container class="pt-2 pt-sm-3 pb-5 mb-md-3 mb-lg-4 mb-xl-5">
    <div class="d-flex align-items-center pb-3 mb-3 mb-lg-4">
      <h2 class="h1 mb-0 me-4">Related articles</h2>
      <div class="d-flex ms-auto">
        <b-button variant="outline-primary" class="btn-prev btn-icon rounded-circle me-3" size="sm" id="prev-post" aria-label="Prev">
          <i class="ai-arrow-left"></i>
        </b-button>
        <b-button variant="outline-primary" class="btn-next btn-icon rounded-circle" size="sm" id="next-post" aria-label="Next">
          <i class="ai-arrow-right"></i>
        </b-button>
      </div>
    </div>
    <Swiper
      class="pb-2 pb-sm-3 pb-md-4"
      :modules="[Navigation]"
      :spaceBetween="24"
      :loop="true"
      :autoHeight="true"
      :navigation="{
        prevEl: '#prev-post',
        nextEl: '#next-post'
      }"
      :breakpoints="{
        576: { slidesPerView: 2 },
        1000: { slidesPerView: 3 }
      }"
    >
      <!-- Post -->
      <SwiperSlide v-for="(swiper, idx) in blogData" :key="idx">
        <div class="position-relative">
          <img class="rounded-5" :src="swiper.image" alt="Post img" />
          <h3 class="h4 mt-4 mb-0">
            <router-link class="stretched-link" :to="{ name: swiper.link.name }">{{ swiper.title }}</router-link>
          </h3>
        </div>
      </SwiperSlide>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { blogData } from '@/views/pages/Blog/SingleV1/data'
</script>

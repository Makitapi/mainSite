<template>
  <b-container class="py-5 mt-sm-2 my-md-4 my-xl-5">
    <div class="d-flex align-items-center pb-3 mb-3 mb-lg-4 mt-2 mt-xxl-3">
      <h2 class="h1 mb-0 me-4">Related articles</h2>
      <div class="d-flex ms-auto">
        <button class="btn btn-prev btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-post" aria-label="Prev">
          <i class="ai-arrow-left"></i>
        </button>
        <button class="btn btn-next btn-icon btn-sm btn-outline-primary rounded-circle" type="button" id="next-post" aria-label="Next">
          <i class="ai-arrow-right"></i>
        </button>
      </div>
    </div>
    <Swiper
      class="pb-2 pb-sm-3 pb-md-4"
      :modules="[Navigation]"
      :spaceBetween="24"
      :loop="true"
      :autoHeight="true"
      :navigation="{
        nextEl: '#next-post',
        prevEl: '#prev-post'
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
import { blogData } from '@/views/pages/Blog/SingleV3/data'
</script>

<template>
  <b-container class="pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
    <h2 class="h1 pb-3 pb-md-4">Our blog</h2>

    <Swiper
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="24"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        560: {
          slidesPerView: 2
        },
        960: {
          slidesPerView: 3
        }
      }"
    >
      <SwiperSlide v-for="(blog, index) in blogs" :key="index">
        <div class="position-relative">
          <img class="rounded-1" :src="blog.image" alt="Post img" />
          <div class="pt-3 mt-3">
            <h3 class="h4 mb-3">
              <a class="stretched-link" href="#">{{ blog.title }}</a>
            </h3>
            <p class="mb-0">{{ blog.caption }}</p>
          </div>
        </div>
      </SwiperSlide>

      <!-- Pagination (Bullets) -->
      <div class="swiper-pagination position-relative bottom-0 pt-1 mt-4 d-lg-none"></div>
    </Swiper>

    <!-- View all button -->
    <div class="text-center mt-2 mb-sm-1 mt-lg-0 pt-4 pt-lg-5 pb-2 pb-md-4">
      <a class="btn btn-outline-primary w-100 w-sm-auto" href="#">More articles</a>
    </div>
  </b-container>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { blogs } from '@/views/landings/ShopV1/data'
</script>

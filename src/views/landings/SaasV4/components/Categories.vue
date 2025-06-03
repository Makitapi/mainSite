<template>
  <b-container class="position-relative z-3">
    <div class="d-none d-lg-block" style="margin-top: -428px"></div>
    <div class="d-lg-none" style="margin-top: -370px"></div>
    <Swiper
      :modules="[Pagination]"
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
      <SwiperSlide v-for="(category, index) in categories" :key="index">
        <a href="#" class="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
          <span class="position-absolute top-0 start-0 w-100 h-100 z-1" style="background: linear-gradient(180deg, rgba(18, 21, 25, 0) 35.56%, #121519 95.3%)"></span>
          <div class="position-absolute bottom-0 w-100 z-2 p-4">
            <div class="px-md-3">
              <h3 class="h4 text-white mb-0">{{ category.title }}</h3>
              <div class="d-flex align-items-center justify-content-between opacity-0">
                <span class="text-white fs-xs text-truncate opacity-70 pe-3">{{ category.subTitle }}</span>
                <i class="ai-circle-arrow-right fs-3 text-primary"></i>
              </div>
            </div>
          </div>
          <div class="zoom-effect-wrapper">
            <div class="zoom-effect-img">
              <img :src="category.image" :alt="category.image" />
            </div>
          </div>
        </a>
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4"></div>
    </Swiper>
  </b-container>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { categories } from '@/views/landings/SaasV4/data'
</script>

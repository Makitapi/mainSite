<template>
  <b-container class="pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
    <div class="d-flex align-items-center justify-content-between pb-4 mb-2 mb-md-3">
      <h2 class="h1 pt-1 mb-0">Trending products</h2>

      <!-- Slider prev/next buttons -->
      <div class="d-flex">
        <button class="btn btn-prev btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="trending-prev" aria-label="Prev">
          <i class="ai-arrow-left"></i>
        </button>
        <button class="btn btn-next btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="trending-next" aria-label="Next">
          <i class="ai-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Slider (popular items) -->
    <Swiper
      :modules="[Navigation]"
      :slidesPerView="1"
      :spaceBetween="24"
      :loop="true"
      :navigation="{
        prevEl: '#trending-prev',
        nextEl: '#trending-next'
      }"
      :breakpoints="{
        500: {
          slidesPerView: 2
        },
        860: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }
      }"
    >
      <SwiperSlide v-for="(product, idx) in trendingProducts" :key="idx">
        <TrendingProductCard :product="product" />
      </SwiperSlide>
    </Swiper>

    <div class="text-center mt-2 mt-md-0 mb-xxl-2 pt-4 pt-md-5 pb-2 pb-sm-3 pb-md-4">
      <router-link :to="{ name: 'shop.catalog' }" class="btn btn-outline-primary w-100 w-sm-auto">View all products </router-link>
    </div>
  </b-container>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import TrendingProductCard from '@/views/landings/ShopV1/components/TrendingProductCard.vue'
import { trendingProducts } from '@/assets/products'
</script>

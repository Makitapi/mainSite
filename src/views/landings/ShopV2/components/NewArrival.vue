<template>
  <b-container class="pt-5 mt-md-2 mt-lg-4 mt-xl-5">
    <!-- Slider prev/next buttons -->
    <div class="position-relative z-2 d-flex justify-content-end pt-4 pb-4 mt-2 mt-sm-3 mt-md-4 mb-n5 mb-lg-4">
      <button class="btn btn-prev btn-icon btn-sm btn-outline-dark rounded-circle ms-3" type="button" id="new-prev" aria-label="Prev">
        <i class="ai-arrow-left"></i>
      </button>
      <button class="btn btn-next btn-icon btn-sm btn-outline-dark rounded-circle ms-3" type="button" id="new-next" aria-label="Next">
        <i class="ai-arrow-right"></i>
      </button>
    </div>

    <b-row>
      <b-col class="pb-3 mb-3 mb-md-4">
        <h2 class="h1 mt-n2 mt-lg-0 mb-2 mb-lg-4">New arrivals</h2>
        <p class="fs-lg mb-4">Explore our new mouthwatering selection that we've recently introduced.</p>
        <a class="btn btn-dark rounded-pill" href="#">Shop boxes</a>
      </b-col>

      <b-col lg="9">
        <Swiper
          :modules="[Navigation]"
          :slidesPerView="1"
          :spaceBetween="24"
          :loop="true"
          :navigation="{
            prevEl: '#new-prev',
            nextEl: '#new-next'
          }"
          :breakpoints="{
            500: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            }
          }"
        >
          <SwiperSlide v-for="(product, idx) in newArrivals" :key="idx">
            <ProductCard :product="product" />
          </SwiperSlide>
        </Swiper>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import ProductCard from '@/views/landings/ShopV2/components/ProductCard.vue'
import { newArrivals } from '@/assets/products'
</script>

<template>
  <section>
    <Jarallax custom-class="jarallax bg-dark min-vh-100 py-5" :options="{ speed: 0.7, type: 'scroll-opacity' }">
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-40"></div>
      <div class="jarallax-img" :style="{ backgroundImage: `url(${heroBg})` }"></div>
      <b-container class="position-relative z-5 py-sm-4 py-lg-5 mt-4">
        <b-row class="pt-lg-2 py-xl-4 py-xxl-5 mb-md-4 mb-lg-5">
          <b-col md="10" lg="9" xl="8" xxl="7" class="pt-5 mb-5">
            <h1 class="display-2 text-light text-uppercase pb-sm-2 pb-md-3">Decor to create comfort at home</h1>
            <p class="text-light opacity-70 pb-3 pb-md-4 mb-3" style="max-width: 520px">On the site you will find all the wonderful decor items from photo frames to tablecloths for the dining table</p>
            <router-link class="btn btn-outline-light" :to="{ name: 'shop.catalog' }">Explore the catalog </router-link>
          </b-col>
        </b-row>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="fw-medium text-light text-uppercase">Most Popular</div>

          <!-- Slider prev/next buttons -->
          <div class="d-flex">
            <button class="btn btn-prev btn-icon btn-sm btn-outline-light rounded-circle ms-3" type="button" id="popular-prev" aria-label="Prev">
              <i class="ai-arrow-left"></i>
            </button>
            <button class="btn btn-next btn-icon btn-sm btn-outline-light rounded-circle ms-3" type="button" id="popular-next" aria-label="Next">
              <i class="ai-arrow-right"></i>
            </button>
          </div>
        </div>

        <Swiper
          :modules="[Navigation]"
          :slidesPerView="1"
          :spaceBetween="24"
          :loop="true"
          :navigation="{
            prevEl: '#popular-prev',
            nextEl: '#popular-next'
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
          <SwiperSlide class="h-auto" v-for="(product, idx) in popularProducts" :key="idx">
            <PopularProductCard :product="product" />
          </SwiperSlide>
        </Swiper>
      </b-container>
    </Jarallax>
  </section>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import Jarallax from '@/components/Jarallax.vue'
import PopularProductCard from '@/views/landings/ShopV1/components/PopularProductCard.vue'
import { popularProducts } from '@/assets/products'

import heroBg from '@/assets/img/landing/shop-1/hero/bg.jpg'
</script>

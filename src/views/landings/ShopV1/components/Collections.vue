<template>
  <section class="position-relative py-5">
    <Swiper
      :modules="[Navigation, Pagination, Thumbs, Controller]"
      :thumbs="{ swiper: controlledSwiper }"
      effect="fade"
      :navigation="{
        prevEl: '#prev-collection',
        nextEl: '#next-collection'
      }"
      class="binded-content position-absolute top-0 start-0 w-100"
    >
      <SwiperSlide class="position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center" id="bg-1" :style="`background: linear-gradient(270deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%), url(${bg01})`"> </SwiperSlide>
      <SwiperSlide class="position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center active" id="bg-2" :style="`backgroundImage: linear-gradient(90deg, rgba(0,0,0,0.5) -0.47%, rgba(0,0,0,0) 100%), url(${bg02})`"> </SwiperSlide>
    </Swiper>

    <div class="binded-content position-absolute top-0 start-0 w-100">
      <div class="binded-item position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center active" id="bg-1" :style="`background: linear-gradient(270deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url(${bg01})`"></div>
      <div class="binded-item position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center" id="bg-2" :style="`background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.5) -0.47%, rgba(0, 0, 0, 0) 100%), url(${bg02})`"></div>
    </div>

    <b-container class="py-2 py-sm-4 py-lg-5 my-md-3 my-lg-0 my-xl-3 my-xxl-4">
      <b-row class="align-items-center my-xxl-2">
        <b-col md="6" class="position-relative z-2 mb-5 mb-md-0">
          <div style="max-width: 580px">
            <!-- Swiper controls (Prev/next buttons) -->
            <div class="d-flex pb-2 mb-3 mb-md-4 mb-xl-5">
              <button class="btn btn-icon btn-sm btn-outline-light rounded-circle me-3" type="button" id="prev-collection" aria-label="Prev">
                <i class="ai-arrow-left"></i>
              </button>
              <button class="btn btn-icon btn-sm btn-outline-light rounded-circle" type="button" id="next-collection" aria-label="Next">
                <i class="ai-arrow-right"></i>
              </button>
            </div>

            <Swiper
              :modules="[Navigation, Pagination, Thumbs, Controller]"
              :thumbs="{ swiper: controlledSwiper }"
              :spaceBetween="40"
              :bindedContent="true"
              :navigation="{
                prevEl: '#prev-collection',
                nextEl: '#next-collection'
              }"
            >
              <SwiperSlide data-swiper-binded="#bg-1">
                <h2 class="display-5 text-white text-uppercase pb-2 mb-md-4 mb-xl-5">Meet the guests with a stunning set for a dinner party</h2>
                <router-link :to="{ name: 'shop.catalog' }" class="btn btn-outline-light"> Explore all sets </router-link>
              </SwiperSlide>
              <SwiperSlide data-swiper-binded="#bg-2">
                <h2 class="display-5 text-white text-uppercase pb-2 mb-md-4 mb-xl-5">Decor for the living room or bedrooms in wood style</h2>
                <router-link :to="{ name: 'shop.catalog' }" class="btn btn-outline-light"> Explore all sets </router-link>
              </SwiperSlide>
            </Swiper>
          </div>
        </b-col>
        <b-col md="6" lg="5" xl="4" class="offset-lg-1 offset-xl-2">
          <div class="ps-md-4 ps-lg-0">
            <b-card no-body class="border-0 rounded-1 z-5" style="max-width: 450px">
              <b-card-body>
                <!-- Controlled swiper slider -->
                <Swiper
                  :modules="[Navigation, Thumbs, FreeMode, Pagination]"
                  @swiper="setControlledSwiper"
                  :allowTouchMove="false"
                  :spaceBetween="40"
                  :navigation="{
                    prevEl: '#prev-collection',
                    nextEl: '#next-collection'
                  }"
                >
                  <SwiperSlide v-for="(product, idx) in collections" :key="idx">
                    <CollectionCard :product="product" />
                  </SwiperSlide>
                </Swiper>
              </b-card-body>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { Swiper as SwiperType } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'

import { collections } from '@/assets/products'
import CollectionCard from '@/views/landings/ShopV1/components/CollectionCard.vue'

import bg01 from '@/assets/img/landing/shop-1/collections/bg01.jpg'
import bg02 from '@/assets/img/landing/shop-1/collections/bg02.jpg'

const controlledSwiper = ref<SwiperType | null>(null)
const setControlledSwiper = (swiper: SwiperType) => {
  controlledSwiper.value = swiper
}
</script>

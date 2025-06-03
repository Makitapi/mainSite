<template>
  <b-container class="pb-4 pb-md-5 mb-lg-4">
    <div class="bg-size-cover bg-repeat-0 bg-position-center rounded-1 mb-md-2 py-xl-4 py-xxl-5" :style="{ backgroundImage: `url('${single1Img}')` }">
      <b-row class="py-lg-5">
        <b-col md="8" offset-md="3" lg="6" offset-lg="5" xl="5" offset-xl="6" class="py-5">
          <div class="bg-light rounded-1 mx-4 p-4 p-md-5">
            <div class="py-3 p-sm-3">
              <h2 class="h3 mb-sm-4">Scented candle</h2>
              <p class="mb-0">Ut sit at orci cursus gravida pretium proin nulla id purus, placerat eget mauris eu ac volutpat facilisi eget morbi ullamcorper turpis nisi aconsequat cursus malesuada leo ultrices nisl dictumst turpis tortor sem amet, euismod aliquam, lacus laoreet dui facilisi morbi ullamcorper turpis nisi aconsequat cursus volutpat facilisi eget.</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>

  <b-container class="pb-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <b-row class="align-items-center pb-md-3">
      <b-col md="6" lg="5" class="mb-4 mb-md-0">
        <img class="rounded-1" :src="single2Img" alt="Img" />
      </b-col>
      <b-col md="6" lg="5" offset-lg="1">
        <div class="ps-md-4 ps-lg-0">
          <h2 class="h3 mb-sm-4">Description</h2>
          <p class="mb-4 mb-lg-5">Ut sit at orci cursus gravida pretium proin nulla id purus, placerat eget mauris eu ac volutpat facilisi eget morbi ullamcorper turpis nisi aconsequat cursus malesuada leo ultrices nisl dictumst turpis tortor sem eu ac volutpat facilisi eget morbi</p>
          <ul class="list-unstyled mb-0">
            <li class="mb-3">Weight:<span class="text-dark fw-semibold ms-2">140 - 440 gramms</span></li>
            <li class="mb-3">Material:<span class="text-dark fw-semibold ms-2">Concrete bowl</span></li>
            <li class="mb-3">Duration:<span class="text-dark fw-semibold ms-2">60 hours of comfort and combustion</span></li>
            <li class="mb-3">Composition:<span class="text-dark fw-semibold ms-2">100% soy wax, cotton wick</span></li>
            <li>Country:<span class="text-dark fw-semibold ms-2">Frances</span></li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-container>

  <hr class="d-md-none mb-5" />
  <b-container class="pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
    <div class="d-flex align-items-center justify-content-between pb-4 mb-2 mb-md-3">
      <h2 class="h1 pt-1 mb-0">You may also like</h2>

      <!-- Slider prev/next buttons-->
      <div class="d-flex">
        <b-button class="btn-prev btn-icon btn-sm rounded-circle ms-3" variant="outline-primary" id="relevant-prev" aria-label="Prev">
          <i class="ai-arrow-left"></i>
        </b-button>
        <b-button class="btn-next btn-icon btn-sm rounded-circle ms-3" variant="outline-primary" id="relevant-next" aria-label="Next">
          <i class="ai-arrow-right"></i>
        </b-button>
      </div>
    </div>

    <Swiper
      class="pb-sm-2 pb-md-3"
      :modules="[Navigation]"
      :slidesPerView="1"
      :spaceBetween="24"
      :loop="true"
      :navigation="{
        prevEl: '#relevant-prev',
        nextEl: '#relevant-next'
      }"
      :breakpoints="{
        500: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 4
        }
      }"
    >
      <SwiperSlide v-for="(swiper, idx) in trendingProducts" :key="idx">
        <TrendingProductCard :product="swiper" />
      </SwiperSlide>
    </Swiper>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { trendingProducts } from '@/assets/products'
import TrendingProductCard from '@/views/pages/Shop/Single/components/TrendingProductCard.vue'

import single1Img from '@/assets/img/shop/single/01.jpg'
import single2Img from '@/assets/img/shop/single/02.jpg'
</script>

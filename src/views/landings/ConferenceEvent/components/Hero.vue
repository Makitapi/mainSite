<template>
  <section class="bg-dark position-relative py-5" data-bs-theme="dark">
    <div class="position-absolute top-0 start-0 w-100 h-100" :style="{ backgroundImage: `url(${noise})`, mixBlendMode: 'soft-light', opacity: '12%' }"></div>
    <b-container class="position-relative z-2 py-md-3 py-lg-4 py-xl-5">
      <b-row class="align-items-center justify-content-center pt-5 pb-2 pb-sm-3 mt-sm-4">
        <b-col cols="10" sm="8" md="6" xl="5" class="offset-lg-1 offset-xl-2 order-md-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
          <Swiper
            :effect="'creative'"
            :modules="[EffectCreative, Autoplay, Thumbs]"
            :loop="true"
            :allowTouchMove="false"
            :speed="450"
            :autoplay="{
              delay: 6000,
              disableOnInteraction: false
            }"
            :thumbs="{ swiper: thumbsSwiper }"
            :creativeEffect="{
              prev: {
                shadow: true,
                translate: ['-20%', 0, -1]
              },
              next: {
                translate: ['100%', 0, 0]
              }
            }"
            style="border-radius: 50%; border-bottom-right-radius: 0"
          >
            <SwiperSlide v-for="(guest, idx) in chiefGuestData" :key="idx">
              <div class="position-relative overflow-hidden" style="border-bottom-left-radius: 50%; border-top-left-radius: 50%">
                <img :src="guest.image" alt="Img" />
                <div class="d-flex align-items-end justify-content-end position-absolute start-0 bottom-0 w-100" style="height: 215px; background: linear-gradient(0deg, rgba(15, 17, 21, 0.8) 0%, rgba(16, 20, 24, 0) 100%)">
                  <div class="text-end pe-4 pb-4">
                    <h3 class="h5 mb-1">{{ guest.name }}</h3>
                    <p class="text-body fs-sm mb-0">{{ guest.designation }}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div class="pt-2">
            <!-- Thumbnails -->
            <Swiper :modules="[Thumbs]" @swiper="setThumbsSwiper" :slides-per-view="3" class="thumb-swiper swiper-thumbnails swiper-thumbnails-circle swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <SwiperSlide v-for="(guest, idx) in chiefGuestData" :key="idx" class="swiper-thumbnail swiper-pagination-bullet" tabindex="0">
                <img :src="guest.thumbnail" alt="Thumbnail" />
              </SwiperSlide>
            </Swiper>
          </div>
        </b-col>

        <b-col sm="10" md="6" lg="5" class="order-md-1">
          <div class="d-flex align-items-center lead pb-3 pb-sm-4 pb-lg-5 mb-2 mb-md-3 mb-lg-0 mb-xl-2">
            <div class="text-light">Nov 15-16, '23</div>
            <div class="text-warning mx-3 mx-sm-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L12.6798 4.12733C13.2879 7.81883 16.1812 10.7121 19.8727 11.3202L24 12L19.8727 12.6798C16.1812 13.2879 13.2879 16.1812 12.6798 19.8727L12 24L11.3202 19.8727C10.7121 16.1812 7.81882 13.2879 4.12733 12.6798L0 12L4.12733 11.3202C7.81883 10.7121 10.7121 7.81882 11.3202 4.12733L12 0Z"></path>
              </svg>
            </div>
            <div class="text-light">Berlin, GE</div>
          </div>
          <h1 class="display-3 text-uppercase d-none d-lg-block pb-3 mb-4">The biggest international conference</h1>
          <h1 class="display-5 text-uppercase d-lg-none pb-1 pb-sm-2">The biggest international conference</h1>
          <p class="text-body fs-lg pb-2 pb-sm-3 pb-md-4 pb-xl-5 mb-xl-2">Mattis aliquet faucibus senectus feugiat sapien mi diam nibh velit nunc purus elementum faucibus lectuset mauris.</p>
          <div class="d-sm-flex">
            <a class="btn btn-lg btn-primary w-100 w-md-auto mb-3 mb-sm-0 me-sm-3 me-lg-4" href="#tickets" data-scroll data-scroll-offset="120">
              Buy access pass
              <i class="ai-arrow-down ms-2 me-n2"></i>
            </a>
            <a class="btn btn-lg btn-outline-light w-100 w-md-auto" href="#">
              <i class="ai-calendar me-2 ms-n2"></i>
              Add to calendar
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCreative, Autoplay, Thumbs } from 'swiper/modules'
import { chiefGuestData } from '@/views/landings/ConferenceEvent/data'

import noise from '@/assets/img/landing/conference/noise.png'

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}
</script>

<style>
.thumb-swiper .swiper-wrapper {
  justify-content: end !important;
}

.thumb-swiper .swiper-wrapper .swiper-slide {
  height: 94px !important;
  width: 94px !important;
  cursor: pointer;
}

@media (max-width: 425px) {
  .thumb-swiper .swiper-wrapper .swiper-slide {
    height: 65px !important;
    width: 65px !important;
  }
}

.thumb-swiper .swiper-wrapper .swiper-slide.swiper-slide-thumb-active img {
  opacity: 1;
}

.thumb-swiper .swiper-wrapper .swiper-slide.swiper-slide-thumb-active {
  border-color: #0051a3;
}
</style>

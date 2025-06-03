<template>
  <section class="w-100 px-sm-4 mx-auto" style="max-width: 1680px" data-bs-theme="dark">
    <div class="position-relative z-2 pt-2 pb-3 py-sm-3 py-md-4 py-lg-5">
      <div class="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-sm-block" style="background-color: #171a1e"></div>
      <div class="position-absolute top-0 start-0 w-100 h-100 d-sm-none" style="background-color: #171a1e"></div>
      <b-container class="position-relative z-2 py-5 my-xl-3 my-xxl-5">
        <b-row class="align-items-center justify-content-center">
          <b-col cols="11" sm="9" md="8" lg="7" class="pb-3">
            <Swiper :modules="[Controller, EffectFade]" :effect="'fade'" :fadeEffect="{ crossFade: true }" :allowTouchMove="false" :loop="true" @swiper="setControlledSwiper" class="binded-content">
              <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx">
                <img :src="testimonial.image" alt="Img" />
              </SwiperSlide>
            </Swiper>
          </b-col>

          <b-col cols="11" sm="9" md="8" lg="5" xl="4" class="offset-xl-1">
            <div class="ps-lg-4 ps-xl-0 mt-lg-n4 mt-xl-n5">
              <Swiper
                :modules="[Navigation, Pagination, Controller]"
                :controller="{ control: controlledSwiper }"
                :spaceBetween="30"
                :loop="true"
                :bindedContent="true"
                :pagination="{
                  el: '.testimonials-count',
                  type: 'fraction'
                }"
                :navigation="{
                  prevEl: '#prev-testimonial',
                  nextEl: '#next-testimonial'
                }"
              >
                <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx">
                  <div class="ai-quotes text-primary display-3 mb-4"></div>
                  <p class="text-body lead pb-1 pb-sm-2">{{ testimonial.comment }}</p>
                  <h3 class="h5 fw-bold mb-0">{{ testimonial.name }}</h3>
                </SwiperSlide>
              </Swiper>
            </div>
          </b-col>
        </b-row>

        <!-- Swiper controls (Prev / Next) -->
        <div class="d-flex align-items-center justify-content-center pt-4 pt-md-5 mt-2 mt-sm-3 mt-md-0 mt-xl-2">
          <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial" aria-label="Prev">
            <i class="ai-arrow-left"></i>
          </button>
          <div class="testimonials-count text-body fw-medium flex-shrink-0 text-center" style="width: 2.5rem"></div>
          <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="next-testimonial" aria-label="Next">
            <i class="ai-arrow-right"></i>
          </button>
        </div>
      </b-container>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller, Pagination, EffectFade, Navigation } from 'swiper/modules'

import { ref } from 'vue'
import { testimonials } from '@/views/landings/Influencer/data'

const controlledSwiper = ref(null)
const setControlledSwiper = (swiper: any) => {
  controlledSwiper.value = swiper
}
</script>

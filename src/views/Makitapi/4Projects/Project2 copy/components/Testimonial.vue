<template>
  <b-container class="position-relative z-2 py-5 mt-n1 mt-sm-0 mb-1 my-md-3 my-lg-3 my-xl-4 my-xxl-5">
    <b-row class="py-md-4 py-lg-5">
      <b-col md="9" lg="7" order-md="2">
        <Swiper
          :modules="[Pagination, Navigation, Controller]"
          :spaceBetween="40"
          :loop="true"
          :autoHeight="true"
          :pagination="{
            el: '.testimonials-count',
            type: 'fraction'
          }"
          :navigation="{
            prevEl: '#prev-testimonial',
            nextEl: '#next-testimonial'
          }"
          :controller="{ control: controlledSwiper }"
        >
          <SwiperSlide v-for="(swiper, idx) in portfolioSingle2" :key="idx">
            <div class="d-flex d-md-none pt-3 mb-3">
              <i class="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
              <div class="ps-3">
                <h3 class="h5 mb-0">{{ swiper.author.name }}</h3>
                <p class="text-body-secondary mb-0">{{ swiper.author.position }}</p>
              </div>
            </div>
            <h2 class="mb-lg-4">{{ swiper.testimonial }}</h2>
            <p class="lead mb-0">{{ swiper.details }}</p>
          </SwiperSlide>
        </Swiper>
      </b-col>
      <b-col md="3" offset-lg="1" order-md="1" class="mt-n3">
        <i class="ai-quotes d-none d-md-block text-primary ms-n2 mb-1" style="font-size: 150px"></i>

        <!-- Contnetn binded to slider (on screens > 768px) -->
        <Swiper :modules="[Controller, EffectFade]" :effect="'fade'" :fadeEffect="{ crossFade: true }" :allowTouchMove="false" :loop="true" @swiper="setControlledSwiper" class="binded-content h-auto d-none d-md-block">
          <SwiperSlide class="h-auto active" id="testimonial-1">
            <h3 class="h5 mb-1">Lilia Bocouse</h3>
            <p class="text-body-secondary mb-0">Head of Marketing</p>
          </SwiperSlide>
          <SwiperSlide class="h-auto" id="testimonial-2">
            <h3 class="h5 mb-1">Robert Fox</h3>
            <p class="text-body-secondary mb-0">Marketing Coordinator</p>
          </SwiperSlide>
          <SwiperSlide class="h-auto" id="testimonial-3">
            <h3 class="h5 mb-1">Jenny Wilson</h3>
            <p class="text-body-secondary mb-0">CEO, Co-Founder</p>
          </SwiperSlide>
        </Swiper>

        <!-- Swiper controls (Prev / Next)-->
        <div class="d-flex align-items-center pt-4 mt-3">
          <b-button size="sm" variant="outline-primary" class="btn btn-icon rounded-circle me-3" id="prev-testimonial" aria-label="Prev">
            <i class="ai-arrow-left"></i>
          </b-button>
          <div class="testimonials-count fw-medium flex-shrink-0 text-center" style="width: 2.5rem"></div>
          <b-button size="sm" variant="outline-primary" class="btn-icon rounded-circle ms-3" id="next-testimonial" aria-label="Next">
            <i class="ai-arrow-right"></i>
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Controller, EffectFade } from 'swiper/modules'
import { portfolioSingle2 } from '@/views/Makitapi/4Projects/Project1/data'

const controlledSwiper = ref(null)
const setControlledSwiper = (swiper: any) => {
  controlledSwiper.value = swiper
}

import 'swiper/css/effect-fade'
</script>

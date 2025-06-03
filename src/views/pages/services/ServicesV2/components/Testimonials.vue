<template>
  <b-container class="pt-xxl-2 pb-5 mb-lg-4 mb-xxl-5">
    <b-row class="pb-2 pb-sm-3 pb-md-4 pb-xl-5 mb-md-2">
      <b-col md="9" lg="7" class="order-md-2">
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
          <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="d-flex d-md-none pt-3 mb-3">
              <i class="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
              <div class="ps-3">
                <h3 class="h5 mb-0">{{ testimonial.author.name }}</h3>
                <p class="text-body-secondary mb-0">{{ testimonial.author.designation }}</p>
              </div>
            </div>
            <h2 class="mb-lg-4">{{ testimonial.title }}</h2>
            <p class="lead mb-0">{{ testimonial.content }}</p>
          </SwiperSlide>
        </Swiper>
      </b-col>
      <b-col md="3" class="offset-lg-1 order-md-1 mt-n3">
        <i class="ai-quotes d-none d-md-block text-primary ms-n2 mb-1" style="font-size: 150px"></i>

        <Swiper :modules="[Controller, EffectFade]" :effect="'fade'" :fadeEffect="{ crossFade: true }" :allowTouchMove="false" :loop="true" @swiper="setControlledSwiper" class="binded-content h-auto d-none d-md-block">
          <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx" class="h-auto">
            <h3 class="h5 mb-1">{{ testimonial.author.name }}</h3>
            <p class="text-body-secondary mb-0">{{ testimonial.author.designation }}</p>
          </SwiperSlide>
        </Swiper>

        <div class="d-flex align-items-center pb-2 pb-md-0 pt-4 mt-3">
          <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial" aria-label="Prev">
            <i class="ai-arrow-left"></i>
          </button>
          <div class="testimonials-count fw-medium flex-shrink-0 text-center" style="width: 2.5rem"></div>
          <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="next-testimonial" aria-label="Next">
            <i class="ai-arrow-right"></i>
          </button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Controller, EffectFade } from 'swiper/modules'
import { testimonials } from '@/views/pages/services/ServicesV2/data'
import { ref } from 'vue'

const controlledSwiper = ref(null)
const setControlledSwiper = (swiper: any) => {
  controlledSwiper.value = swiper
}
</script>

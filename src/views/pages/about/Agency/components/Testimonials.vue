<template>
  <section class="pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5">
    <b-container class="pt-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
      <div class="fs-sm text-uppercase mb-3">Testimonials</div>
      <h2 class="display-6 pb-3 mb-lg-4">What our clients say</h2>
      <b-card no-body class="border-0 bg-secondary overflow-hidden">
        <b-card-body class="position-relative z-2 px-lg-0 py-lg-5">
          <b-row class="py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
            <b-col md="4" lg="3" class="offset-lg-1 mb-3 mb-md-0">
              <Swiper :modules="[Controller, EffectFade]" :effect="'fade'" :fadeEffect="{ crossFade: true }" :allowTouchMove="false" class="binded-content" :loop="true" @swiper="setControlledSwiper">
                <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx">
                  <img class="d-block rounded-circle mb-3" :src="testimonial.author.image" width="86" alt="Lilianna Bocouse" />
                  <h4 class="mb-0">{{ testimonial.author.name }}</h4>
                  <p class="fs-lg text-body-secondary mb-0">{{ testimonial.author.role }}</p>
                </SwiperSlide>
              </Swiper>
            </b-col>
            <b-col md="8" lg="7">
              <Swiper
                :modules="[Pagination, Controller]"
                :controller="{ control: controlledSwiper }"
                :spaceBetween="40"
                :loop="true"
                :autoHeight="true"
                :bindedContent="true"
                :pagination="{
                  el: '#testimonials-bullets',
                  clickable: true
                }"
              >
                <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx">
                  <p class="text-dark lead mb-0">{{ testimonial.comment }}</p>
                </SwiperSlide>
              </Swiper>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <div class="swiper-pagination position-relative bottom-0 pt-4 mt-2 mt-md-3" id="testimonials-bullets" role="button"></div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller, EffectFade, Pagination } from 'swiper/modules'
import { testimonialData } from '@/views/pages/about/Agency/data'
import { ref } from 'vue'

const controlledSwiper = ref(null)
const setControlledSwiper = (swiper: any) => {
  controlledSwiper.value = swiper
}
</script>

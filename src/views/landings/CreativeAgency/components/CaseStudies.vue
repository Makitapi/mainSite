<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <b-row class="align-items-center pt-md-4 mt-2 mt-sm-3">
      <b-col md="6" class="position-relative pb-3 pb-md-0 mb-2 mb-sm-3 mb-md-0">
        <div class="d-none d-xxl-block position-absolute" style="width: 861px; height: 719px; top: 50px; left: -260px" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="400">
          <svg class="text-primary opacity-10" width="861" height="719" viewBox="0 0 861 719" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.1985 361.161C26.6142 363.592 28.4042 365.854 30.3902 367.846L115.89 453.613C117.366 455.093 119.008 456.457 120.69 457.697C220.882 531.542 166.267 694.09 321.314 716.256C481 739.09 730.799 588.084 806.496 453.151C844.188 385.962 885.87 273.92 840.453 199.651C808.854 147.97 742.627 142.437 686.285 142.442C616.832 142.453 556.116 167.459 491.294 135.468C449.5 114.831 426.769 82.5406 392.702 51.7928C206.459 -116.148 -88.0611 166.69 25.1985 361.161Z"></path>
          </svg>
        </div>

        <div class="z-2">
          <Swiper
            :modules="[Navigation, Pagination, Thumbs, Controller]"
            :spaceBetween="40"
            :loop="true"
            :autoHeight="true"
            :bindedContent="true"
            :thumbs="{ swiper: controlledSwiper }"
            :navigation="{
              prevEl: '#prev-case-study',
              nextEl: '#next-case-study'
            }"
          >
            <SwiperSlide v-for="(item, idx) in caseStudies" :key="idx">
              <img class="d-block rounded-5" :src="item.image" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </b-col>

      <b-col md="6" xl="5" class="offset-xl-1">
        <div class="ps-md-4 ps-xl-0">
          <!-- Slider control buttons (Prev / Next) -->
          <div class="d-flex align-items-center ms-n3 pb-3 mb-sm-2 mb-xl-4">
            <button class="btn btn-icon btn-link" type="button" id="prev-case-study" aria-label="Prev">
              <i class="ai-arrow-left"></i>
            </button>
            <div class="text-center text-nowrap mx-3" id="slides-count" style="width: 33px"></div>
            <button class="btn btn-icon btn-link" type="button" id="next-case-study" aria-label="Next">
              <i class="ai-arrow-right"></i>
            </button>
          </div>

          <Swiper
            :modules="[Navigation, Thumbs, FreeMode, Pagination]"
            :spaceBetween="40"
            :autoHeight="true"
            :bindedContent="true"
            :loop="true"
            @swiper="setControlledSwiper"
            :pagination="{
              el: '#slides-count',
              type: 'fraction'
            }"
            :navigation="{
              prevEl: '#prev-case-study',
              nextEl: '#next-case-study'
            }"
          >
            <SwiperSlide class="pb-1" v-for="(item, idx) in caseStudies" :key="idx" :dataSwiperBinded="`#image${idx + 1}`">
              <h3 class="h4">{{ item.title }}</h3>
              <p class="pb-3 mb-3 mb-xl-4">{{ item.description }}</p>
              <div class="d-flex d-md-none d-lg-flex justify-content-between w-100 pb-4 pb-xl-5 mb-2 mb-sm-3 mb-xl-2" style="max-width: 440px">
                <template v-for="(highlight, idx) in item.highlights" :key="idx">
                  <div :class="{ 'pe-4': item.highlights.length - 1 != idx }">
                    <div class="h2 mb-1">{{ highlight.value }}</div>
                    <div class="fs-sm">{{ highlight.label }}</div>
                  </div>
                </template>
              </div>
              <div class="d-sm-flex">
                <a class="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" href="#">Read the full story</a>
                <a class="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex" href="#">All projects</a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { Swiper as SwiperType } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Controller, Thumbs, FreeMode } from 'swiper/modules'
import { caseStudies } from '@/views/landings/MarketingAgency/data'

const controlledSwiper = ref<SwiperType | null>(null)
const setControlledSwiper = (swiper: SwiperType) => {
  controlledSwiper.value = swiper
}
</script>

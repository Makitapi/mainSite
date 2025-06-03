<template>
  <section class="container-start pt-xl-2 pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <b-row class="g-0 pb-md-4 pb-lg-5">
      <b-col xl="2">
        <div class="d-flex flex-xl-column align-items-center align-items-xl-start pe-xl-5 pb-3 pb-lg-4 mb-3">
          <h2 class="h1 mb-0 mb-xl-5">Top authors</h2>

          <!-- Slider control buttons (Prev / Next) -->
          <div class="d-flex ms-auto ms-xl-0 pe-sm-3 pe-xl-0">
            <button class="btn btn-sm btn-icon btn-outline-primary rounded-circle me-3" type="button" id="prev-author" aria-label="Prev">
              <i class="ai-arrow-left"></i>
            </button>
            <button class="btn btn-sm btn-icon btn-outline-primary rounded-circle" type="button" id="next-author" aria-label="Next">
              <i class="ai-arrow-right"></i>
            </button>
          </div>
        </div>
      </b-col>

      <b-col xl="9" class="offset-xl-1">
        <Swiper
          :modules="[Navigation]"
          :slidesPerView="1"
          :spaceBetween="24"
          :loop="true"
          :navigation="{
            prevEl: '#prev-author',
            nextEl: '#next-author'
          }"
          :breakpoints="{
            576: {
              slidesPerView: 2
            },
            1000: {
              slidesPerView: 3
            },
            1400: {
              slidesPerView: 'auto'
            }
          }"
        >
          <SwiperSlide v-for="(author, idx) in topAuthors" :key="idx" class="w-xxl-auto">
            <TopAuthorCard :author="author" />
          </SwiperSlide>
        </Swiper>
      </b-col>
    </b-row>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import TopAuthorCard from '@/views/landings/Blog/components/TopAuthorCard.vue'
import { topAuthors } from '@/views/landings/Blog/data'
</script>

<template>
  <b-container class="pb-5 pt-3 pt-sm-4 pt-lg-5 my-xl-3 my-xxl-5">
    <h2 class="h1 text-center">Industries we work in</h2>
    <p class="text-center pb-4 mb-2 mb-lg-3">We have been helping businesses in the following industries for over a decade</p>

    <Swiper
      :modules="[Pagination]"
      :spaceBetween="24"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :breakpoints="{
        576: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }"
    >
      <SwiperSlide class="h-auto" v-for="(industry, idx) in industries" :key="idx">
        <b-card no-body class="border-0 h-100">
          <div class="card-img-top overflow-hidden">
            <img class="rounded-5 rounded-end-0" :src="industry.image" alt="Img" />
          </div>
          <b-card-body>
            <h3 class="h4 card-title">{{ industry.title }}</h3>
            <ul class="ps-4 mb-n2">
              <li class="mb-2" v-for="(desc, idx) in industry.description" :key="idx">{{ desc }}</li>
            </ul>
          </b-card-body>
        </b-card>
      </SwiperSlide>

      <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
    </Swiper>

    <div class="text-center pt-4 mt-2 mt-lg-0 pt-lg-5">
      <a class="btn btn-primary" href="#">See all industries</a>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { industries } from '@/views/landings/BusinessConsulting/data'
</script>

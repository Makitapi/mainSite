<template>
  <section class="bg-primary bg-opacity-10 py-5">
    <b-container class="py-sm-2 pt-md-3 py-lg-2 py-xl-4 py-xxl-5">
      <h3 class="h1 text-center pt-2 pt-sm-3 pb-3 mb-3 mb-lg-4">Resources for you</h3>
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
        <SwiperSlide class="h-auto" v-for="(resource, idx) in resources" :key="idx">
          <ResourceCard :resource="resource" />
        </SwiperSlide>

        <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
      </Swiper>

      <div class="text-center pt-4 pb-1 pb-sm-2 pb-md-4 py-lg-5 my-2 mt-lg-0">
        <a class="btn btn-outline-primary" href="#">Read all articles</a>
      </div>
    </b-container>
    <div style="height: 380px"></div>
  </section>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import ResourceCard from '@/views/landings/MarketingAgency/components/ResourceCard.vue'
import { resources } from '@/views/landings/MarketingAgency/data'
</script>

<template>
  <section class="position-relative py-2 py-sm-3 py-md-4 py-lg-5">
    <div class="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-none d-xxl-block" style="border-top-left-radius: 8rem; border-bottom-right-radius: 8rem"></div>
    <div class="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block d-xxl-none" style="border-top-left-radius: 4rem; border-bottom-right-radius: 4rem"></div>
    <div class="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-lg-none" style="border-top-left-radius: 2.25rem; border-bottom-right-radius: 2.25rem"></div>
    <b-container class="position-relative z-2 py-5 mt-xl-2 mb-lg-2 mb-xl-3 mb-xxl-5 mt-xxl-4">
      <h2 class="h1 pt-xxl-1 pb-4 mb-2 mb-lg-3">Guides</h2>

      <Swiper
        :modules="[Pagination]"
        :spaceBetween="24"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        :breakpoints="{
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide v-for="(plan, idx) in guidePricingPlans" :key="idx" class="h-auto">
          <GuidePricingCard :plan="plan" />
        </SwiperSlide>

        <!-- Pagination (bullets) -->
        <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import { guidePricingPlans } from '@/views/landings/Influencer/data'
import GuidePricingCard from '@/views/landings/Influencer/components/GuidePricingCard.vue'
</script>

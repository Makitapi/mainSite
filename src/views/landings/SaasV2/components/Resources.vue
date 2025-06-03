<template>
  <b-container class="py-5 my-md-3 my-lg-2 my-xl-4 my-xxl-5">
    <div class="d-md-flex align-items-center pb-3 mb-md-3 mb-lg-4 mt-2 mt-sm-3 pt-2 pt-sm-4 pt-lg-5">
      <h2 class="h1 text-center text-md-start mb-4 mb-md-0 me-md-4">Resources for you</h2>

      <ul class="nav nav-pills flex-nowrap fs-sm text-nowrap overflow-auto w-100 mx-auto me-md-0 mb-0 pb-3 pb-md-0" style="max-width: 408px">
        <li class="nav-item mb-0">
          <a class="nav-link border" href="#">Articles</a>
        </li>
        <li class="nav-item mb-0">
          <a class="nav-link border active" href="#">Case studies</a>
        </li>
        <li class="nav-item mb-0">
          <a class="nav-link border" href="#">Tutorrials</a>
        </li>
      </ul>
    </div>

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
      <SwiperSlide v-for="(resource, idx) in resourceData" :key="idx">
        <ResourceCard :resource="resource" />
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
    </Swiper>

    <div class="text-center pt-4 my-2 mt-lg-0 pt-lg-5 pb-sm-2 pb-md-4">
      <router-link class="btn btn-outline-primary rounded-pill" to="#">Read all case studies</router-link>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { resourceData } from '@/views/landings/SaasV2/data'
import ResourceCard from '@/views/landings/SaasV2/components/ResourceCard.vue'
</script>

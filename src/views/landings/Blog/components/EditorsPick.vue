<template>
  <b-container class="pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <h2 class="h1 pb-3 pb-lg-4">Editor's picks</h2>
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
      <SwiperSlide v-for="(article, idx) in editorsPicks" :key="idx" class="h-auto">
        <EditorsPickCard :article="article" />
      </SwiperSlide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
    </Swiper>

    <!-- Read more button -->
    <div class="text-center pt-4 mt-2 mt-lg-0 pt-lg-5 pb-sm-2 pb-md-4">
      <router-link class="btn btn-primary" :to="{ name: 'blog.list-sidebar' }">Read all articles</router-link>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import EditorsPickCard from '@/views/landings/Blog/components/EditorsPickCard.vue'
import { editorsPicks } from '@/views/landings/Blog/data'
</script>

<template>
  <section class="bg-secondary py-5">
    <b-container class="d-flex align-items-center pt-lg-2 pt-xl-4 pt-xxl-5 pb-3 mt-1 mt-sm-3 mb-3 my-md-4">
      <h2 class="h1 mb-0">Most popular</h2>

      <!-- Slider control buttons (Prev / Next) -->
      <div class="d-flex ms-auto">
        <button class="btn btn-sm btn-icon btn-outline-primary rounded-circle ms-3" type="button" id="prev-popular" aria-label="Prev">
          <i class="ai-arrow-left"></i>
        </button>
        <button class="btn btn-sm btn-icon btn-outline-primary rounded-circle ms-3" type="button" id="next-popular" aria-label="Next">
          <i class="ai-arrow-right"></i>
        </button>
      </div>
    </b-container>

    <div class="container-start">
      <Swiper
        :modules="[Navigation]"
        :slidesPerView="1"
        :spaceBetween="24"
        :loop="true"
        :navigation="{
          prevEl: '#prev-popular',
          nextEl: '#next-popular'
        }"
        :breakpoints="{
          576: { slidesPerView: 'auto' }
        }"
      >
        <SwiperSlide v-for="(article, idx) in popularArticles" :key="idx" class="w-sm-auto h-auto">
          <PopularArticleCard :article="article" />
        </SwiperSlide>
      </Swiper>
    </div>

    <b-container class="text-center pt-4 pb-1 pb-sm-3 pb-md-4 py-lg-5 mb-xl-1 mb-xxl-4 mt-2 mt-lg-0">
      <router-link :to="{ name: 'blog.grid-sidebar' }" class="btn btn-primary mb-1">Read all articles </router-link>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import PopularArticleCard from '@/views/landings/Blog/components/PopularArticleCard.vue'
import { popularArticles } from '@/views/landings/Blog/data'
</script>

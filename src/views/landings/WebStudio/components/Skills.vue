<template>
  <section class="pt-2 py-md-4 py-lg-5 mt-2 mt-xl-4 mt-xxl-5">
    <b-container class="d-flex align-items-center justify-content-between pb-4 mb-sm-2 mb-md-3">
      <h2 class="h1 mb-0">Our skills</h2>

      <!-- Slider control buttons (Prev / Next) -->
      <div class="d-flex">
        <button class="btn btn-sm btn-icon btn-outline-primary rounded-circle" type="button" id="prev-skill" aria-label="Prev">
          <i class="ai-arrow-left"></i>
        </button>
        <button class="btn btn-sm btn-icon btn-outline-primary rounded-circle ms-3" type="button" id="next-skill" aria-label="Next">
          <i class="ai-arrow-right"></i>
        </button>
      </div>
    </b-container>

    <div class="container-start">
      <Swiper
        :modules="[Navigation, Pagination]"
        :spaceBetween="24"
        slidesPerView="auto"
        :loop="true"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        :navigation="{
          prevEl: '#prev-skill',
          nextEl: '#next-skill'
        }"
        wrapperclass="text-center"
      >
        <SwiperSlide class="w-sm-auto h-auto" v-for="(item, idx) in skills" :key="idx">
          <SkillCard2 :item="item" v-if="item.canFlip" />
          <SkillCard1 :item="item" v-else />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import SkillCard1 from '@/views/landings/WebStudio/components/SkillCard1.vue'
import SkillCard2 from '@/views/landings/WebStudio/components/SkillCard2.vue'
import { skills } from '@/views/landings/WebStudio/data'
</script>

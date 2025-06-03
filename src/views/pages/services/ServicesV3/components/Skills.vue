<template>
  <section class="py-5 my-2 my-lg-3 my-xl-4 my-xxl-5">
    <b-container class="d-flex align-items-center justify-content-between pt-sm-3 pt-md-4 pt-xl-5 pb-4 mb-sm-2 mb-md-3">
      <h2 class="h1 mb-0">Our skills</h2>

      <!-- Slaider control button (Prev / Next) -->
      <div class="d-flex gap-3">
        <button class="btn btn-sm btn-icon btn-outline-primary rounded-circle" type="button" id="prev-skill" aria-label="Prev">
          <i class="ai-arrow-left"></i>
        </button>
        <button class="btn btn-sm btn-icon btn-outline-primary rounded-circle" type="button" id="next-skill" aria-label="Next">
          <i class="ai-arrow-right"></i>
        </button>
      </div>
    </b-container>

    <!-- Swiper slider -->
    <div class="container-start pb-2 pb-sm-3 pb-md-4 pb-lg-5">
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
        wrapperClass="text-center"
      >
        <SwiperSlide class="w-sm-auto h-auto" v-for="(item, idx) in skills" :key="idx">
          <SkillCard2 :item="item" v-if="item.canFlip" />
          <SkillCard1 :item="item" v-else />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import SkillCard2 from '@/views/pages/services/ServicesV3/components/SkillCard2.vue'
import SkillCard1 from '@/views/pages/services/ServicesV3/components/SkillCard1.vue'
import { skills } from '@/views/pages/services/ServicesV3/data'
</script>

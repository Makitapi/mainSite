<template>
  <section class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <b-container class="pt-2 pt-sm-4 pt-lg-5 mt-md-3 mt-lg-0">
      <b-row class="pb-3 mb-3 mb-lg-4">
        <b-col lg="11" class="d-sm-flex justify-content-between text-center text-sm-start">
          <h2 class="h1 mb-sm-0 mx-auto me-sm-4" style="max-width: 440px">Advantages that make us a unique place</h2>
          <p class="pt-2 mb-0 mx-auto" style="max-width: 420px">The best yoga and meditation practices, adapted a ta high level to the needs of the modern pace of life.</p>
        </b-col>
      </b-row>
    </b-container>
    <div class="container-start pe-0">
      <Swiper
        :modules="[Navigation]"
        :slidesPerView="'auto'"
        :spaceBetween="24"
        :loop="true"
        :navigation="{
          prevEl: '#prev-feature',
          nextEl: '#next-feature'
        }"
      >
        <SwiperSlide v-for="(feature, idx) in features" :key="idx" class="w-auto h-auto">
          <FeatureCard :feature="feature" />
        </SwiperSlide>

        <SwiperSlide class="w-auto h-auto">
          <b-card no-body class="border-0 bg-primary card-hover h-100 py-4" style="max-width: 306px"
            ><img class="position-absolute top-0 start-0" :src="flowerImg" width="306" alt="Decor" />
            <b-card-body class="position-relative z-2 text-center">
              <h3 class="text-white">Get started a free trial</h3>
              <p class="text-white fs-sm">The best yoga practices, adapted at a high level to the needs of the modern pace of life.</p>
              <a class="btn btn-light text-primary" href="#">Try a free lesson</a>
            </b-card-body>
          </b-card>
        </SwiperSlide>
      </Swiper>

      <!-- Slider controls (Prev / Next buttons) -->
      <b-container class="d-flex justify-content-center justify-content-sm-end pt-3 mt-3 mt-lg-4">
        <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-feature" aria-label="Prev">
          <i class="ai-arrow-left"></i>
        </button>
        <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle" type="button" id="next-feature" aria-label="Next">
          <i class="ai-arrow-right"></i>
        </button>
      </b-container>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { features } from '@/views/landings/YogaStudio/data'
import FeatureCard from '@/views/landings/YogaStudio/components/FeatureCard.vue'
import flowerImg from '@/assets/img/landing/yoga-studio/features/flower.svg'
</script>

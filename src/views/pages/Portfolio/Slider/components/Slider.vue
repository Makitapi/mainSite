<template>
  <Swiper class="h-100" :modules="[Mousewheel]" :direction="'vertical'" :mousewheel="{ thresholdDelta: 20 }">
    <SwiperSlide v-for="(slider, idx) in swiperData" :key="idx">
      <div class="position-relative h-100">
        <div class="position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block" :class="slider.variant" :style="`background-color: ${slider.bgColor};`"></div>
        <div class="d-flex flex-column flex-lg-row align-items-center h-100 position-relative z-2">
          <div class="position-relative w-100 order-lg-2">
            <div class="position-absolute top-0 end-0 w-100 h-100 d-lg-none" :class="slider.variant" :style="`background-color: ${slider.bgColor};`"></div>
            <router-link :to="{ name: slider.link.name }">
              <img class="d-block position-relative z-2 mx-auto scale-up" :src="slider.image" width="748" alt="Img" />
            </router-link>
          </div>
          <div class="w-100 order-lg-1 px-3 px-lg-4 py-4 pt-lg-0">
            <div class="text-center text-sm-start mx-auto" style="max-width: 450px">
              <template v-if="slider.logo">
                <img class="d-block mx-auto mx-sm-0 mb-2 mb-lg-3" :src="slider.logo" alt="Foster" />
              </template>
              <template v-else>
                <img class="d-block d-dark-mode-none mx-auto mx-sm-0 mb-2 mb-lg-3" :src="slider.logoDark" alt="Champion" />
                <img class="d-none d-dark-mode-block mx-auto mx-sm-0 mb-2 mb-lg-3" :src="slider.logoLight" alt="Champion" />
              </template>

              <h2 class="h1 pb-2" :class="slider.description ? 'pb-sm-0' : 'pb-sm-1'">
                {{ slider.title }}
              </h2>
              <p class="d-none d-sm-block pb-3 pb-lg-4 mb-1" v-if="slider.description">
                {{ slider.description }}
              </p>

              <ul class="list-unstyled d-none d-sm-block pb-1 pb-lg-2 mb-3" v-else>
                <li class="d-flex pb-1 mb-2" v-for="(feat, idx) in slider.features" :key="idx">
                  <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                  {{ feat }}
                </li>
              </ul>

              <div class="d-none d-lg-flex align-items-center pb-2 pb-lg-3 mb-3" v-if="slider.awards">
                <h6 class="text-body mb-0 me-3">Awards:</h6>
                <template v-for="(award, idx) in slider.awards" :key="idx">
                  <img class="d-block d-dark-mode-none me-4" :src="award.darkImg" width="90" alt="img" />
                  <img class="d-none d-dark-mode-block me-4" :src="award.lightImg" width="90" alt="img" />
                </template>
              </div>
              <a class="btn btn-sm btn-outline-dark fs-sm rounded-pill" :to="{ name: slider.link.name }">Read the full story</a>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  <div class="position-fixed start-50 bottom-0 translate-middle-x rounded-4 rounded-bottom-0 bg-light shadow z-5 fs-sm fw-medium text-dark py-2 px-3">Scroll for more</div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper/modules'
import { swiperData } from '@/views/pages/Portfolio/Slider/data'
</script>

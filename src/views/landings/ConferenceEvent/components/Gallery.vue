<template>
  <b-container class="py-5 my-lg-3 my-xl-4 my-xxl-5">
    <div class="py-2 py-sm-3 py-md-4 my-md-2 my-xxl-3">
      <h2 class="h1 text-center pt-xxl-1">See how the previous event unfolded</h2>
      <p class="fs-lg text-center pb-3 mb-lg-4">Get inspired with a selection of the keynotes about the Conference 2022</p>
      <LightGallery custom-class="gallery row g-3 g-md-4">
        <b-col sm="6">
          <b-row class="g-3 g-md-4">
            <b-col cols="6">
              <a class="gallery-item d-block card-hover zoom-effect" :href="gallery01" alt="Img">
                <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                  <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-4">
                  <img class="zoom-effect-img" :src="galleryTh01" alt="Auditorium" />
                </div>
              </a>
            </b-col>
            <b-col cols="6">
              <a class="gallery-item d-block card-hover zoom-effect" :href="gallery02" alt="Img">
                <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                  <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-4">
                  <img class="zoom-effect-img" :src="galleryTh02" alt="Comfortable chairs" />
                </div>
              </a>
            </b-col>
            <b-col cols="12">
              <a class="gallery-item d-block card-hover zoom-effect" href="https://www.youtube.com/watch?v=5-A8_ocajCM">
                <div class="btn btn-icon btn-lg btn-primary rounded-circle pe-none position-absolute top-50 start-50 translate-middle z-3">
                  <i class="ai-play-filled"></i>
                </div>
                <div class="position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-4">
                  <img class="zoom-effect-img" :src="galleryTh05" alt="Conferece showreel" />
                </div>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="6">
          <b-row class="g-3 g-md-4">
            <b-col cols="6" class="order-sm-2">
              <a class="gallery-item d-block card-hover zoom-effect" :href="gallery03">
                <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                  <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-4">
                  <img class="zoom-effect-img" :src="galleryTh03" alt="Whiteboard" />
                </div>
              </a>
            </b-col>
            <b-col cols="6" class="order-sm-3">
              <a class="gallery-item d-block card-hover zoom-effect" :href="gallery04">
                <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                  <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-4">
                  <img class="zoom-effect-img" :src="galleryTh04" alt="Coffee break" />
                </div>
              </a>
            </b-col>
            <b-col cols="12" class="order-sm-1">
              <a class="gallery-item d-block card-hover zoom-effect" href="https://www.youtube.com/watch?v=Omr18ybhPKI">
                <div class="btn btn-icon btn-lg btn-primary rounded-circle pe-none position-absolute top-50 start-50 translate-middle z-3">
                  <i class="ai-play-filled"></i>
                </div>
                <div class="position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-4">
                  <img class="zoom-effect-img" :src="galleryTh06" alt="Speaker on stage" />
                </div>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </LightGallery>

      <!-- More button -->
      <div class="text-center pb-lg-2 pb-xl-3 pb-xxl-3 pt-4 pt-md-5 mt-3 mt-md-0">
        <a class="btn btn-lg btn-outline-primary" href="#">
          See more
          <i class="ai-image ms-2"></i>
        </a>
      </div>
    </div>
  </b-container>
</template>
<script setup lang="ts">
import LightGallery from '@/components/LightGallery.vue'

import galleryTh01 from '@/assets/img/landing/conference/gallery/th01.jpg'
import galleryTh02 from '@/assets/img/landing/conference/gallery/th02.jpg'
import galleryTh05 from '@/assets/img/landing/conference/gallery/th05.jpg'
import galleryTh03 from '@/assets/img/landing/conference/gallery/th03.jpg'
import galleryTh04 from '@/assets/img/landing/conference/gallery/th04.jpg'
import galleryTh06 from '@/assets/img/landing/conference/gallery/th06.jpg'

import gallery01 from '@/assets/img/landing/conference/gallery/01.jpg'
import gallery02 from '@/assets/img/landing/conference/gallery/02.jpg'
import gallery03 from '@/assets/img/landing/conference/gallery/03.jpg'
import gallery04 from '@/assets/img/landing/conference/gallery/04.jpg'
</script>

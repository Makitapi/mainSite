<template>
  <b-container class="py-5 my-lg-3 my-xl-4 my-xxl-5">
    <div class="text-center pb-3 pt-sm-3 pt-md-4 mx-auto mt-xxl-1 mb-3 mb-lg-4" style="max-width: 525px">
      <h2 class="h1">Our space</h2>
      <p class="mb-0">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa.</p>
    </div>

    <ul class="nav nav-tabs flex-nowrap overflow-auto text-nowrap w-100 mx-auto pb-3 mb-3 mb-lg-4" role="tablist" style="max-width: 646px">
      <li class="nav-item mb-0">
        <a class="nav-link active" href="#" role="tab">All</a>
      </li>
      <li class="nav-item mb-0">
        <a class="nav-link" href="#" role="tab">Open space</a>
      </li>
      <li class="nav-item mb-0">
        <a class="nav-link" href="#" role="tab">Lounge zone</a>
      </li>
      <li class="nav-item mb-0">
        <a class="nav-link" href="#" role="tab">Kitchen</a>
      </li>
      <li class="nav-item mb-0">
        <a class="nav-link" href="#" role="tab">Parking</a>
      </li>
    </ul>

    <LightGallery custom-class="gallery row g-4 g-sm-3 g-lg-4 pb-2 pb-sm-4 pb-xl-5 mb-lg-2 mb-xl-0 mb-xxl-2">
      <b-col sm="5">
        <a class="d-block gallery-item card-hover zoom-effect" :href="gallery01">
          <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
            <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
          </div>
          <div class="zoom-effect-wrapper rounded-5">
            <img class="zoom-effect-img" :src="galleryTh01" alt="Open space" />
          </div>
        </a>
      </b-col>
      <b-col sm="7">
        <a class="d-block gallery-item card-hover zoom-effect" :href="gallery02">
          <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
            <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
          </div>
          <div class="zoom-effect-wrapper rounded-5">
            <img class="zoom-effect-img" :src="galleryTh02" alt="Kitchen" />
          </div>
        </a>
      </b-col>
      <b-col sm="4">
        <a class="d-block gallery-item card-hover zoom-effect" :href="gallery03">
          <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
            <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
          </div>
          <div class="zoom-effect-wrapper rounded-5">
            <img class="zoom-effect-img" :src="galleryTh03" alt="Lounge zone" />
          </div>
        </a>
      </b-col>
      <b-col sm="3">
        <a class="d-block gallery-item card-hover zoom-effect" :href="gallery04">
          <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
            <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
          </div>
          <div class="zoom-effect-wrapper rounded-5">
            <img class="zoom-effect-img" :src="galleryTh04" alt="Open space" />
          </div>
        </a>
      </b-col>
      <b-col sm="5">
        <a class="d-block gallery-item card-hover zoom-effect" :href="gallery05">
          <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
            <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
          </div>
          <div class="zoom-effect-wrapper rounded-5"><img class="zoom-effect-img" :src="galleryTh05" alt="Cafe" /></div>
        </a>
      </b-col>
    </LightGallery>
  </b-container>
</template>

<script setup lang="ts">
import LightGallery from '@/components/LightGallery.vue'

import galleryTh01 from '@/assets/img/landing/coworking-space/gallery/th01.jpg'
import galleryTh02 from '@/assets/img/landing/coworking-space/gallery/th02.jpg'
import galleryTh03 from '@/assets/img/landing/coworking-space/gallery/th03.jpg'
import galleryTh04 from '@/assets/img/landing/coworking-space/gallery/th04.jpg'
import galleryTh05 from '@/assets/img/landing/coworking-space/gallery/th05.jpg'

import gallery01 from '@/assets/img/landing/coworking-space/gallery/01.jpg'
import gallery02 from '@/assets/img/landing/coworking-space/gallery/02.jpg'
import gallery03 from '@/assets/img/landing/coworking-space/gallery/03.jpg'
import gallery04 from '@/assets/img/landing/coworking-space/gallery/04.jpg'
import gallery05 from '@/assets/img/landing/coworking-space/gallery/05.jpg'
</script>

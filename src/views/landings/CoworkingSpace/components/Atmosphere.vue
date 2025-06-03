<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <b-row class="text-center text-md-start pb-3 pt-1 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-0 mb-3 mb-lg-4">
      <b-col md="6">
        <h2 class="h1 mb-md-0">Our working atmosphere</h2>
      </b-col>
      <b-col md="6" class="pt-2">
        <p class="mb-0">Morbi et massa fames ac scelerisque sit commodo dignissim aucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem aenean.</p>
      </b-col>
    </b-row>
    <div class="rounded-5 overflow-hidden">
      <Jarallax custom-class="jarallax ratio ratio-16x9 d-flex align-items-center justify-content-center" :options="{ speed: 0.6 }">
        <div class="jarallax-img" :style="`background-image: url(${parallaxImage})`"></div>
        <div class="w-auto position-relative p-4">
          <LightGallery custom-class="gallery">
            <a class="btn btn-icon btn-xl btn-primary rounded-circle stretched-link gallery-item" href="https://www.youtube.com/watch?v=IxRVa1DbSAg" data-bs-toggle="video" aria-label="Play video">
              <i class="ai-play-filled"></i>
            </a>
          </LightGallery>
        </div>
      </Jarallax>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import Jarallax from '@/components/Jarallax.vue'
import LightGallery from '@/components/LightGallery.vue'
import parallaxImage from '@/assets/img/landing/coworking-space/parallax-image.jpg'
</script>

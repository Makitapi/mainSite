<template>
  <b-container class="pb-5 mb-lg-4 mb-xl-5">
    <h2 class="h1 pb-3 mb-lg-4">Ideas for your home</h2>
    <b-row class="pb-2 pb-sm-3 pb-md-4 mb-xxl-2 g-4">
      <b-col md="6">
        <div class="hotspots hotspots-alt">
          <img class="d-block rounded-1" :src="galleryImg1" alt="Img" />
          <a class="hotspot" style="top: 20%; left: 27%" v-b-popover.focus.bottom title='<a href="#" class="d-flex text-decoration-none mb-2"><span class="h6 fs-sm mb-0">Bronze floor<br>led lamp</span><i class="ai-chevron-right fs-xl text-dark ms-2"></i></a><span>$185.00</span>'>
            <div class="hotspot-inner"></div>
          </a>
          <a class="hotspot" style="top: 14.7%; right: 32.7%" v-b-popover.focus.bottom title='<a href="#" class="d-flex text-decoration-none mb-2"><span class="h6 fs-sm mb-0">Photo frame<br>Defacto</span><i class="ai-chevron-right fs-xl text-dark ms-2"></i></a><span>$21.00</span>'>
            <div class="hotspot-inner"></div>
          </a>
          <a class="hotspot" style="bottom: 41%; left: 34.6%" v-b-popover.focus.bottom title='<a href="#" class="d-flex text-decoration-none mb-2"><span class="h6 fs-sm mb-0">Yellow satin<br>armchair</span><i class="ai-chevron-right fs-xl text-dark ms-2"></i></a><span>$276.00</span>'>
            <div class="hotspot-inner"></div>
          </a>
          <a class="hotspot" style="bottom: 24.3%; right: 27.5%" v-b-popover.focus.bottom title='<a href="#" class="d-flex text-decoration-none mb-2"><span class="h6 fs-sm mb-0">Gary concrete<br>table stand</span><i class="ai-chevron-right fs-xl text-dark ms-2"></i></a><span>$35.00</span>'>
            <div class="hotspot-inner"></div>
          </a>
        </div>
      </b-col>
      <b-col sm="6" md="3">
        <img class="d-block rounded-1 mb-4" :src="galleryImg2" alt="Img" />
        <img class="rounded-1" :src="galleryImg3" alt="Img" />
      </b-col>
      <b-col sm="6" md="3">
        <img class="rounded-1" :src="galleryImg4" alt="Img" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import galleryImg1 from '@/assets/img/landing/shop-1/gallery/01.jpg'
import galleryImg2 from '@/assets/img/landing/shop-1/gallery/02.jpg'
import galleryImg3 from '@/assets/img/landing/shop-1/gallery/03.jpg'
import galleryImg4 from '@/assets/img/landing/shop-1/gallery/04.jpg'
</script>

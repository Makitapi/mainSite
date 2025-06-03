<template>
  <section class="position-relative py-5">
    <span class="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none" style="background: linear-gradient(360deg, #fff 5.39%, #f6f9fc 78.66%)"></span>
    <span class="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block" style="background: linear-gradient(360deg, #121519 5.39%, rgba(255, 255, 255, 0.03) 78.66%)"></span>
    <b-container class="position-relative z-2 py-2 py-sm-3 py-sm-4 py-md-5">
      <b-row class="align-items-center py-lg-2 py-xl-3 my-xl-1 my-xxl-3">
        <b-col md="5" xl="4">
          <h2 class="h1 pb-2 pb-sm-3 mb-md-0">Learn <span class="text-gradient-primary">how Around works</span> in a nutshell. Watch a short introductory video</h2>
        </b-col>
        <b-col md="7" class="offset-xl-1">
          <div class="position-relative">
            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center z-5">
              <LightGallery custom-class="gallery">
                <a href="https://www.youtube.com/watch?v=ADpOLD2z1Ns" class="btn btn-icon btn-xl btn-primary rounded-circle stretched-link gallery-item" data-bs-toggle="video" aria-label="Play video">
                  <i class="ai-play-filled"></i>
                </a>
              </LightGallery>
            </div>
            <img :src="videoCoverLight" class="d-dark-mode-none rounded-3" alt="Video cover" />
            <img :src="videoCoverDark" class="d-none d-dark-mode-block rounded-3" alt="Video cover" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import LightGallery from '@/components/LightGallery.vue'
import videoCoverLight from '@/assets/img/landing/saas-4/video-cover-light.jpg'
import videoCoverDark from '@/assets/img/landing/saas-4/video-cover-dark.png'
</script>

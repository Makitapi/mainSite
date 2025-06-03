<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <b-row class="pt-2 pt-md-4 pt-lg-3 pt-xl-4 g-4 g-sm-3 g-md-4">
      <b-col lg="8" class="order-lg-2">
        <div class="d-md-flex h-100 bg-primary rounded-5 overflow-hidden px-4 px-sm-5 pt-5">
          <div class="d-md-flex px-2 px-sm-0 px-xl-2 px-xxl-4 pt-xl-3">
            <div class="text-center text-md-start pe-md-5 pb-3 pb-md-0 me-xxl-3 mb-4 md-0">
              <h2 class="h1 text-white pb-2 pb-md-3 mb-lg-4">How Does It Work?</h2>
              <LightGallery custom-class="gallery">
                <a class="btn btn-icon btn-xl btn-warning rounded-circle gallery-item" href="https://www.youtube.com/watch?v=j5Rb-OkP-Go" data-bs-toggle="video" aria-label="Play video">
                  <i class="ai-play-filled"></i>
                </a>
              </LightGallery>
            </div>
            <div class="w-100 flex-md-shrink-0 mx-auto" style="max-width: 472px">
              <img class="d-dark-mode-none" :src="featureImageLight1" alt="Img" />
              <img class="d-none d-dark-mode-block" :src="featureImageDark1" alt="Img" />
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="4" class="order-lg-1">
        <b-card no-body class="border-0 bg-secondary h-100 py-lg-2 py-xl-4">
          <b-card-body>
            <h3>Target your audience effectively</h3>
            <p class="mb-0">Nisl in enim, gravida risus enim risus non et in iaculis non facilisis eget blandit id vulputate morbi proin vitae tincidunt vestibulum viverra. Quis odio mauris velit egestas risus vulputate.</p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="6" lg="4" class="order-lg-3">
        <b-card no-body class="border-0 bg-secondary h-100 py-lg-2 py-xl-4">
          <b-card-body>
            <h3>Build dashboard in minutes</h3>
            <p class="mb-0">Facilisi eu neque amet, orci tellus nibh amet tincidunt nunc, feugiat arcu vulputate duis. Quis odio mauris, in sed pharetra velit egestas risus purus tincidunt.</p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="6" lg="4" class="order-lg-4">
        <b-card no-body class="border-0 bg-secondary h-100 py-lg-2 py-xl-4">
          <b-card-body>
            <h3>Easily download your tables and data</h3>
            <p class="mb-0">Cursus dolor sagittis, nisi sit pharetra pharetra ornare nec diam id in in commodo mattis at retium at id nisi ullamcorper tortor augue parturient at tellus lorem enim.</p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="6" lg="4" class="order-lg-5">
        <b-card no-body class="border-0 bg-secondary h-100 py-lg-2 py-xl-4">
          <b-card-body>
            <h3>Access to dashboard from all devices</h3>
            <p class="mb-0">Ac pharetra pharetra morbi turpis auctor vel eget amet nulla diam facilisis sit morbi sit aliquam in amet ultrices aliquet leo facilisis lorem proin pharetra ornare.</p>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import LightGallery from '@/components/LightGallery.vue'
import featureImageLight1 from '@/assets/img/landing/saas-1/features/01-light.png'
import featureImageDark1 from '@/assets/img/landing/saas-1/features/01-dark.png'
</script>

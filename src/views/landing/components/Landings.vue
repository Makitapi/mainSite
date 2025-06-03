<template>
  <section class="bg-gray py-2 py-lg-3 py-xl-4 py-xxl-5" id="landings">
    <b-container class="py-5 mt-1 mb-2 mt-sm-2 mb-sm-3 mt-md-3 mb-md-4 my-lg-4 my-xl-5">
      <h2 class="display-5 text-center pt-xxl-2">Landing pages</h2>
      <p class="fs-lg text-center pb-3 pb-lg-0 mb-lg-5">Choose from pre-built layouts of our unique landing pages</p>
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 pb-xl-3">
        <template v-for="(preview, idx) in landingPages" :key="idx">
          <PreviewCard :item="preview" />
        </template>

        <!-- Coming Soon -->
        <b-col>
          <b-card no-body class="border-0 bg-transparent h-100">
            <b-card-body class="d-flex justify-content-center align-items-center border-dashed border-2 rounded-3 py-5 mb-3">
              <div class="py-5" style="width: 5.5rem">
                <Vue3Lottie class="d-dark-mode-none" :animation-data="animationLight" background="transparent" :speed="1" loop autoplay></Vue3Lottie>
                <Vue3Lottie class="d-none d-dark-mode-block" :animation-data="animationDark" background="transparent" :speed="1" loop autoplay></Vue3Lottie>
              </div>
            </b-card-body>
            <h3 class="h5 text-nav text-center mb-0">Coming Soon</h3>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import animationLight from '@/assets/json/animation-sandwatch-light.json'
import animationDark from '@/assets/json/animation-sandwatch-dark.json'

import PreviewCard from '@/views/landing/components/PreviewCard.vue'
import { landingPages } from '@/views/landing/data'
</script>

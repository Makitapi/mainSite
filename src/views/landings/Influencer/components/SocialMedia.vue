<template>
  <section class="pt-2 pt-sm-4 pt-md-5">
    <b-container class="pt-5 mt-1 mt-sm-0 mt-lg-2 mt-xl-4 mt-xxl-5">
      <div class="d-flex position-relative align-items-center">
        <a class="btn btn-icon btn-primary stretched-link me-3 me-sm-4" href="#" aria-label="Instagram">
          <i class="ai-instagram"></i>
        </a>
        <h2 class="mb-0">jane_cooper</h2>
      </div>
    </b-container>
    <Simplebar class="overflow-auto" data-simplebar>
      <b-row class="row-cols-8 g-0 pt-4 pb-2 pb-xl-0 mt-2 mt-lg-3" style="min-width: 1200px">
        <b-col v-for="(item, idx) in instagramPhotos" :key="idx">
          <router-link class="card-hover zoom-effect d-block position-relative" to="">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 z-2 opacity-0">
              <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60"></div>
              <div class="d-flex align-items-center text-light position-relative z-2">
                <i class="ai-heart me-1"></i>
                <span class="text-light fs-sm me-3">{{ item.likes }}</span>
                <i class="ai-message me-1"></i>
                <span class="text-light fs-sm">{{ item.comments }}</span>
              </div>
            </div>
            <div class="zoom-effect-wrapper">
              <img class="zoom-effect-img" :src="item.image" alt="Img" />
            </div>
          </router-link>
        </b-col>
      </b-row>
    </Simplebar>
  </section>
</template>

<script setup lang="ts">
import Simplebar from 'simplebar-vue'
import { instagramPhotos } from '@/views/landings/Influencer/data'
</script>

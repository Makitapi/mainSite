<template>
  <b-container class="mt-n3 mt-sm-0 pb-5 mb-1 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <h2 class="h1 pb-3 mb-lg-4">Categories</h2>
    <b-row class="g-4 pb-2 pb-md-4">
      <b-col md="4">
        <b-card no-body class="zoom-effect h-100 border-0 rounded-1 overflow-hidden" style="min-height: 320px">
          <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
          <div class="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
            <div class="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100" :style="{ backgroundImage: `url(${category01})` }"></div>
          </div>
          <router-link :to="{ name: 'shop.catalog' }" class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3">
            <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the living room</span>
          </router-link>
        </b-card>
      </b-col>

      <b-col md="8">
        <b-card no-body class="zoom-effect border-0 rounded-1 overflow-hidden">
          <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
          <div class="zoom-effect-wrapper rounded-1">
            <img class="zoom-effect-img" :src="category02" alt="Category img" />
          </div>
          <router-link :to="{ name: 'shop.catalog' }" class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3">
            <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the kitchen</span>
          </router-link>
        </b-card>

        <b-row class="g-4 pt-4">
          <b-col sm="6">
            <b-card no-body class="zoom-effect border-0 rounded-1 overflow-hidden">
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
              <div class="zoom-effect-wrapper rounded-1">
                <img class="zoom-effect-img" :src="category03" alt="Category img" />
              </div>
              <router-link :to="{ name: 'shop.catalog' }" class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3">
                <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the bathroom</span>
              </router-link>
            </b-card>
          </b-col>

          <b-col sm="6">
            <b-card no-body class="zoom-effect border-0 rounded-1 overflow-hidden">
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
              <div class="zoom-effect-wrapper rounded-1">
                <img class="zoom-effect-img" :src="category04" alt="Category img" />
              </div>
              <router-link :to="{ name: 'shop.catalog' }" class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3">
                <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the bedroom</span>
              </router-link>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import category01 from '@/assets/img/shop/categories/01.jpg'
import category02 from '@/assets/img/shop/categories/02.jpg'
import category03 from '@/assets/img/shop/categories/03.jpg'
import category04 from '@/assets/img/shop/categories/04.jpg'
</script>

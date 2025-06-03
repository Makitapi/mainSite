<template>
  <main class="page-wrapper">
    <b-container class="overflow-hidden pb-5">
      <div class="d-flex justify-content-center px-5 mt-n1">
        <img class="d-dark-mode-none" :src="lampLight" width="348" alt="Lamp" style="transform-origin: 50% 0; animation: swinging 3.5s ease-in-out forwards infinite" />
        <img class="d-none d-dark-mode-block" :src="lampDark" width="348" alt="Lamp" style="transform-origin: 50% 0; animation: swinging 3.5s ease-in-out forwards infinite" />
      </div>
      <div class="d-flex justify-content-center pb-5 mb-md-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <div style="max-width: 420px">
          <div class="d-none d-sm-block" style="margin-top: -127px"></div>
          <div class="d-sm-none" style="margin-top: -25%"></div>
          <div class="d-flex align-items-center mb-4">
            <h1 class="display-1 mb-0">404</h1>
            <p class="text-dark lead ps-4 mb-0">Whoops! That page is missing...</p>
          </div>
          <b-form class="input-group">
            <b-form-input type="search" placeholder="Enter keywords" required />
            <b-button variant="dark" type="submit">Search</b-button>
          </b-form>
        </div>
      </div>
      <h2 class="h4 text-center pb-lg-2 mb-4">Let's go back on track!</h2>
      <b-row class="g-4 pb-3 pb-lg-4 pb-xl-5">
        <b-col md="4">
          <b-card class="zoom-effect h-100 border-0 rounded-1 overflow-hidden" style="min-height: 320px">
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
            <div class="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
              <div class="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100" :style="`background-image: url(${category1});`"></div>
            </div>
            <router-link class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3" :to="{ name: 'shop.catalog' }">
              <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4"> For the living room </span>
            </router-link>
          </b-card>
        </b-col>
        <b-col md="8">
          <b-card no-body class="zoom-effect border-0 rounded-1 overflow-hidden">
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
            <div class="zoom-effect-wrapper rounded-1">
              <img class="zoom-effect-img" :src="category2" alt="img" />
            </div>
            <router-link class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3" :to="{ name: 'shop.catalog' }">
              <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4"> For the kitchen </span>
            </router-link>
          </b-card>
          <b-row class="g-4 pt-4">
            <b-col sm="6">
              <b-card no-body class="zoom-effect border-0 rounded-1 overflow-hidden">
                <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
                <div class="zoom-effect-wrapper rounded-1">
                  <img class="zoom-effect-img" :src="category3" alt="img" />
                </div>
                <router-link class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3" :to="{ name: 'shop.catalog' }">
                  <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4"> For the bathroom </span>
                </router-link>
              </b-card>
            </b-col>

            <b-col sm="6">
              <b-card no-body class="zoom-effect border-0 rounded-1 overflow-hidden">
                <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
                <div class="zoom-effect-wrapper rounded-1">
                  <img class="zoom-effect-img" :src="category4" alt="img" />
                </div>
                <router-link class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3" :to="{ name: 'shop.catalog' }">
                  <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4"> For the bedroom </span>
                </router-link>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script lang="ts" setup>
import lampLight from '@/assets/img/404/lamp-light.png'
import lampDark from '@/assets/img/404/lamp-dark.png'
import category1 from '@/assets/img/shop/categories/01.jpg'
import category2 from '@/assets/img/shop/categories/02.jpg'
import category3 from '@/assets/img/shop/categories/03.jpg'
import category4 from '@/assets/img/shop/categories/04.jpg'
</script>

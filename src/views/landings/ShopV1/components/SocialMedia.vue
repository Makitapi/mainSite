<template>
  <section class="position-relative">
    <b-container class="position-relative z-2">
      <b-row class="align-items-center g-3 g-lg-4 mb-3 mb-lg-4">
        <b-col sm="6" class="text-center order-sm-2">
          <div class="ai-instagram fs-2 text-primary mb-2 mb-md-3 mb-lg-4"></div>
          <h2 class="h1 mb-2 mb-sm-0">Follow us<br /><a href="#" class="text-primary text-decoration-none">#aroundecor</a></h2>
        </b-col>
        <b-col cols="6" sm="3" class="order-sm-1">
          <a class="d-block card-hover zoom-effect" href="#">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
              <i class="ai-instagram lead text-white position-relative z-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
            </div>
            <div class="zoom-effect-wrapper rounded-1">
              <img class="zoom-effect-img" :src="instagram1" alt="Instagram img" />
            </div>
          </a>
        </b-col>
        <b-col cols="6" sm="3" class="order-sm-3">
          <a class="d-block card-hover zoom-effect" href="#">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
              <i class="ai-instagram lead text-white position-relative z-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
            </div>
            <div class="zoom-effect-wrapper rounded-1">
              <img class="zoom-effect-img" :src="instagram2" alt="Instagram img" />
            </div>
          </a>
        </b-col>
      </b-row>
      <b-row class="g-3 g-lg-4">
        <b-col cols="6" sm="3">
          <a class="d-block card-hover zoom-effect" href="#">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
              <i class="ai-instagram lead text-white position-relative z-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
            </div>
            <div class="zoom-effect-wrapper rounded-1">
              <img class="zoom-effect-img" :src="instagram3" alt="Instagram img" />
            </div>
          </a>
        </b-col>
        <b-col cols="6" sm="3">
          <a class="d-block card-hover zoom-effect" href="#">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
              <i class="ai-instagram lead text-white position-relative z-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
            </div>
            <div class="zoom-effect-wrapper rounded-1">
              <img class="zoom-effect-img" :src="instagram4" alt="Instagram img" />
            </div>
          </a>
        </b-col>
        <b-col cols="6" sm="3">
          <a class="d-block card-hover zoom-effect" href="#">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
              <i class="ai-instagram lead text-white position-relative z-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
            </div>
            <div class="zoom-effect-wrapper rounded-1">
              <img class="zoom-effect-img" :src="instagram5" alt="Instagram img" />
            </div>
          </a>
        </b-col>
        <b-col cols="6" sm="3">
          <a class="d-block card-hover zoom-effect" href="#">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
              <i class="ai-instagram lead text-white position-relative z-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
            </div>
            <div class="zoom-effect-wrapper rounded-1">
              <img class="zoom-effect-img" :src="instagram6" alt="Instagram img" />
            </div>
          </a>
        </b-col>
      </b-row>
    </b-container>
    <div class="d-none d-lg-block bg-dark position-absolute start-0 bottom-0 w-100" style="height: 155px">
      <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, 0.03)"></div>
    </div>
    <div class="d-lg-none bg-dark position-absolute start-0 bottom-0 w-100" style="height: 80px">
      <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, 0.03)"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import instagram1 from '@/assets/img/landing/shop-1/instagram/01.jpg'
import instagram2 from '@/assets/img/landing/shop-1/instagram/02.jpg'
import instagram3 from '@/assets/img/landing/shop-1/instagram/03.jpg'
import instagram4 from '@/assets/img/landing/shop-1/instagram/04.jpg'
import instagram5 from '@/assets/img/landing/shop-1/instagram/05.jpg'
import instagram6 from '@/assets/img/landing/shop-1/instagram/06.jpg'
</script>

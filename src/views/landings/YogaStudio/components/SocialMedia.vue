<template>
  <section class="position-relative pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <div class="bg-secondary position-absolute start-0 bottom-0 w-100 d-none d-sm-block" style="height: 110px"></div>
    <div class="bg-secondary position-absolute start-0 bottom-0 w-100 d-sm-none" style="height: 80px"></div>
    <b-container class="position-relative z-2 pt-2 pt-sm-4 pt-lg-5 mt-md-2 mt-lg-0">
      <h2 class="h1 text-center pb-3 mb-3 mb-lg-4">See more photos on <a href="#" class="text-primary text-decoration-none">Instagram</a></h2>
      <b-row class="g-4">
        <b-col md="8">
          <b-row class="g-3 g-sm-4">
            <b-col cols="5">
              <a class="d-block card-hover zoom-effect" href="#">
                <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                  <i class="ai-instagram lead text-white position-relative z-2"></i>
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-5">
                  <img class="zoom-effect-img" :src="instagram1" alt="Instagram img" />
                </div>
              </a>
            </b-col>
            <b-col cols="7">
              <a class="d-block card-hover zoom-effect" href="#">
                <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                  <i class="ai-instagram lead text-white position-relative z-2"></i>
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-5">
                  <img class="zoom-effect-img" :src="instagram2" alt="Instagram img" />
                </div>
              </a>
            </b-col>
            <b-col cols="7">
              <a class="d-block card-hover zoom-effect" href="#">
                <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                  <i class="ai-instagram lead text-white position-relative z-2"></i>
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-5">
                  <img class="zoom-effect-img" :src="instagram4" alt="Instagram img" />
                </div>
              </a>
            </b-col>
            <b-col cols="5">
              <a class="d-block card-hover zoom-effect" href="#">
                <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                  <i class="ai-instagram lead text-white position-relative z-2"></i>
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-5">
                  <img class="zoom-effect-img" :src="instagram5" alt="Instagram img" />
                </div>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4" class="d-none d-md-block">
          <a class="d-block card-hover zoom-effect" href="#">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
              <i class="ai-instagram lead text-white position-relative z-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
            </div>
            <div class="zoom-effect-wrapper rounded-5">
              <img class="zoom-effect-img" :src="instagram3" alt="Instagram img" />
            </div>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import instagram1 from '@/assets/img/landing/yoga-studio/instagram/01.jpg'
import instagram2 from '@/assets/img/landing/yoga-studio/instagram/02.jpg'
import instagram3 from '@/assets/img/landing/yoga-studio/instagram/03.jpg'
import instagram4 from '@/assets/img/landing/yoga-studio/instagram/04.jpg'
import instagram5 from '@/assets/img/landing/yoga-studio/instagram/05.jpg'
</script>

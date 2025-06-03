<template>
  <section class="bg-dark d-flex min-vh-100 position-relative overflow-hidden py-5" data-bs-theme="dark">
    <b-container class="d-flex flex-column justify-content-center position-relative z-2 pt-sm-3 pt-md-4 pt-xl-5 pb-1 pb-sm-3 pb-lg-4 pb-xl-5">
      <b-row class="flex-lg-nowrap align-items-center pb-5 pt-2 pt-lg-4 pt-xl-0 mt-lg-4 mt-xl-0">
        <b-col lg="7" class="order-lg-2 ms-lg-4 mb-2 mb-lg-0">
          <Parallax custom-class="order-lg-2 mx-auto" :custom-style="{ maxWidth: '740px' }" id="parallax">
            <div class="parallax-layer" data-depth="0.05">
              <img :src="hero1" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="-0.05">
              <img :src="hero2" style="animation: rotate-cw 100s linear infinite" alt="Layer" />
            </div>
            <div class="parallax-layer z-2" data-depth="0.3">
              <img :src="hero3" alt="Layer" />
            </div>
            <div class="parallax-layer z-2" data-depth="0.15">
              <img :src="hero4" alt="Layer" />
            </div>
            <div class="parallax-layer z-2" data-depth="0.4">
              <img :src="hero5" alt="Layer" />
            </div>
          </Parallax>
        </b-col>
        <b-col lg="5" class="order-lg-1 text-center text-lg-start me-xl-5">
          <span class="badge bg-warning bg-opacity-10 text-warning fs-sm">Take your data to the next level&nbsp; 🚀</span>
          <h1 class="display-4 py-3 my-2 mb-xl-3">The platform to manage business</h1>
          <ul class="list-unstyled d-table text-start mx-auto mx-lg-0 mb-0">
            <li class="d-flex text-body pb-2 mb-1">
              <i class="ai-check-alt text-primary lead me-2"></i>
              Segmenting the audience is easy and simple
            </li>
            <li class="d-flex text-body pb-2 mb-1">
              <i class="ai-check-alt text-primary lead me-2"></i>
              Functional dashboard for managing your data
            </li>
            <li class="d-flex text-body pb-2 mb-1">
              <i class="ai-check-alt text-primary lead me-2"></i>
              Key performance indicators of team interaction
            </li>
          </ul>
          <div class="d-flex justify-content-center justify-content-lg-start pt-4 pt-xl-5">
            <div class="text-center">
              <a class="btn btn-lg btn-primary rounded-pill w-100 w-sm-auto" href="#">Start free 14-day trial</a>
              <p class="text-body fs-sm pt-2 mt-sm-1 mb-0">100% free to get started!</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="row-cols-3 row-cols-sm-4 row-cols-lg-5 row-cols-xl-6 justify-content-center align-items-center g-4 pt-lg-3 pt-xl-4">
        <b-col v-for="(brand, idx) in brands" :key="idx">
          <img class="d-block my-1 mx-auto" :src="brand.image" width="145" :alt="brand.name" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script lang="ts" setup>
import Parallax from '@/components/Parallax.vue'

import hero1 from '@/assets/img/landing/saas-2/hero/01.png'
import hero2 from '@/assets/img/landing/saas-2/hero/02.png'
import hero3 from '@/assets/img/landing/saas-2/hero/03.png'
import hero4 from '@/assets/img/landing/saas-2/hero/04.png'
import hero5 from '@/assets/img/landing/saas-2/hero/05.png'

import fosterLight from '@/assets/img/landing/saas-1/brands/foster-light.svg'
import klinosLight from '@/assets/img/landing/saas-1/brands/klinos-light.svg'
import championLight from '@/assets/img/landing/saas-1/brands/champion-light.svg'
import airbnbLight from '@/assets/img/landing/saas-1/brands/airbnb-light.svg'
import starcraftLight from '@/assets/img/landing/saas-1/brands/starcraft-light.svg'
import alpineLight from '@/assets/img/landing/saas-1/brands/alpine-light.svg'

const brands = [
  {
    name: 'Foster',
    image: fosterLight
  },
  {
    name: 'Klinos',
    image: klinosLight
  },
  {
    name: 'Champion',
    image: championLight
  },
  {
    name: 'Airbnb',
    image: airbnbLight
  },
  {
    name: 'Starcraft',
    image: starcraftLight
  },
  {
    name: 'Alpine',
    image: alpineLight
  }
]
</script>

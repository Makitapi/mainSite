<template>
  <section class="overflow-hidden pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <b-container class="container pt-3 pt-sm-4 pt-lg-5 mt-md-3 mt-lg-0">
      <b-row class="align-items-center">
        <b-col md="7" xxl="6" class="offset-xl-1 offset-xxl-2 order-md-2 pb-2 pb-sm-0 mb-4 mb-sm-5 mb-md-0">
          <CustomParallax id="parallax" custom-class=" mx-auto" :custom-style="{ maxWidth: '560px' }">
            <div class="parallax-layer" data-depth="0.1">
              <img :src="people1" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="-0.05">
              <img :src="people2" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.2">
              <img :src="people3" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="-0.15">
              <img :src="people4" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.25">
              <img :src="people5" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.35">
              <img :src="people6" alt="Layer" />
            </div>
          </CustomParallax>
        </b-col>
        <b-col md="5" xl="4" class="order-md-1">
          <h2 class="h1 text-center text-md-start mb-4">Online learning has already been chosen by 5 million people</h2>
          <ul class="d-table ps-4 pb-2 pb-sm-0 mx-auto mx-md-0 mb-4 mb-sm-5">
            <li class="mb-2">Amet minim mollit deserunt ullamco</li>
            <li class="mb-2">Velit officia consequat duis enim</li>
            <li>Exercitation veniam minim</li>
          </ul>
          <div class="d-flex justify-content-center justify-content-md-start gap-4">
            <div>
              <img class="d-dark-mode-none" :src="award1Dark" :width="188" alt="Award" />
              <img class="d-none d-dark-mode-block" :src="award1Light" :width="188" alt="Award" />
            </div>
            <div>
              <img class="d-dark-mode-none" :src="award2Dark" :width="188" alt="Award" />
              <img class="d-none d-dark-mode-block" :src="award2Light" :width="188" alt="Award" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomParallax from '@/components/Parallax.vue'

import people1 from '@/assets/img/landing/mobile-app-showcase/people/01.png'
import people2 from '@/assets/img/landing/mobile-app-showcase/people/02.png'
import people3 from '@/assets/img/landing/mobile-app-showcase/people/03.png'
import people4 from '@/assets/img/landing/mobile-app-showcase/people/04.png'
import people5 from '@/assets/img/landing/mobile-app-showcase/people/05.png'
import people6 from '@/assets/img/landing/mobile-app-showcase/people/06.png'

import award1Dark from '@/assets/img/landing/mobile-app-showcase/awards/01-dark.png'
import award1Light from '@/assets/img/landing/mobile-app-showcase/awards/01-light.png'

import award2Dark from '@/assets/img/landing/mobile-app-showcase/awards/02-dark.png'
import award2Light from '@/assets/img/landing/mobile-app-showcase/awards/02-light.png'
</script>

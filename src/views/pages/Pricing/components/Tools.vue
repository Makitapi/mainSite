<template>
  <b-container class="overflow-hidden py-5 mt-2 mt-sm-3 my-2 my-lg-4 my-xl-5">
    <b-row class="align-items-center pb-1 pb-sm-3 pb-md-4">
      <b-col md="5" class="text-center text-md-start pe-md-5 pe-lg-0 pe-xxl-4 ps-xl-5 mb-5 mb-md-0">
        <h2 class="h1 pb-3 pb-xl-2 mb-lg-4 mb-xl-5">Join Around with your favorite tools that you use daily and keep things on track</h2>
        <a class="btn btn-primary" href="#">See all integrations</a>
      </b-col>
      <b-col md="7" lg="6" class="offset-lg-1">
        <div class="position-relative mx-auto" style="max-width: 510px">
          <img class="d-block d-dark-mode-none" :src="circleGray1" style="animation: rotate-cw 100s linear infinite" alt="Circle" />
          <img class="d-none d-dark-mode-block" :src="circleLight1" style="animation: rotate-cw 100s linear infinite" alt="Circle" />
          <img class="d-block d-dark-mode-none position-absolute top-0 start-0" :src="circleGray2" style="animation: rotate-ccw 50s linear infinite" alt="Circle" />
          <img class="d-none d-dark-mode-block position-absolute top-0 start-0" :src="circleLight2" style="animation: rotate-ccw 50s linear infinite" alt="Circle" />
          <img class="position-absolute top-0 start-0 z-2" :src="tool1" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="1200" alt="Icon" />
          <img class="position-absolute top-0 start-0 z-2" :src="tool2" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="450" alt="Icon" />
          <img class="position-absolute top-0 start-0 z-2" :src="tool3" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="600" alt="Icon" />
          <img class="position-absolute top-0 start-0 z-2" :src="tool4" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="750" alt="Icon" />
          <img class="position-absolute top-0 start-0 z-2" :src="tool5" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="900" alt="Icon" />
          <img class="position-absolute top-0 start-0 z-2" :src="tool6" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="1050" alt="Icon" />
          <img class="position-absolute top-0 start-0 z-2" :src="tool7" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250" alt="Icon" />
          <img class="position-absolute top-0 start-0 z-2" :src="tool8" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250" data-aos-delay="150" alt="Icon" />
          <img class="position-absolute top-0 start-0 z-2" :src="tool9" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250" data-aos-delay="300" alt="Icon" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import tool1 from '@/assets/img/landing/saas-2/tools/icon-1.png'
import tool2 from '@/assets/img/landing/saas-2/tools/icon-2.png'
import tool3 from '@/assets/img/landing/saas-2/tools/icon-3.png'
import tool4 from '@/assets/img/landing/saas-2/tools/icon-4.png'
import tool5 from '@/assets/img/landing/saas-2/tools/icon-5.png'
import tool6 from '@/assets/img/landing/saas-2/tools/icon-6.png'
import tool7 from '@/assets/img/landing/saas-2/tools/icon-7.png'
import tool8 from '@/assets/img/landing/saas-2/tools/icon-8.png'
import tool9 from '@/assets/img/landing/saas-2/tools/icon-9.png'

import circleGray1 from '@/assets/img/landing/saas-2/tools/circle-gray-1.png'
import circleLight1 from '@/assets/img/landing/saas-2/tools/circle-light-1.png'
import circleGray2 from '@/assets/img/landing/saas-2/tools/circle-gray-2.png'
import circleLight2 from '@/assets/img/landing/saas-2/tools/circle-light-2.png'
</script>

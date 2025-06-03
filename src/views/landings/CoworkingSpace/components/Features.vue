<template>
  <section class="bg-secondary py-5">
    <b-container class="py-lg-3 py-xl-4 py-xxl-5">
      <h2 class="h1 text-center pt-1 pt-sm-3 pt-md-4 pb-3 pb-sm-4 pb-lg-5">Why choose Around as a coworking space</h2>
      <b-row class="align-items-center pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
        <b-col md="6" class="pb-1 pb-sm-3 pb-md-0 mb-4 mb-md-0">
          <img class="d-block rounded-5 mx-auto" :src="feature1" width="470" alt="Img" />
        </b-col>
        <b-col md="6" lg="5" xl="4" class="offset-lg-1" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
          <div class="ps-md-4 ps-lg-0">
            <h3 class="h2 pb-md-2 pb-lg-3">Fixed workplace when buying a monthly pass</h3>
            <p class="mb-4 pb-md-2 pb-lg-0 mb-lg-5">Morbi et massa fames ac scelerisque sit commodo dignissim aucibus vel quisque proin lectus laoreet adipiscing sollicitudin erat massa tellus lorem.</p>
            <a class="btn btn-sm btn-primary" href="#">Buy a monthly pass</a>
          </div>
        </b-col>
      </b-row>
      <b-row class="align-items-center pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
        <b-col md="6" class="pb-1 pb-sm-3 pb-md-0 mb-4 mb-md-0">
          <div class="position-relative overflow-hidden mx-auto" style="max-width: 503px">
            <img class="position-relative z-2" :src="feature2" alt="Img" />
            <img class="position-absolute top-0 start-0 d-dark-mode-none" :src="circleDark" alt="Img" style="animation: rotate-cw 60s linear infinite" />
            <img class="position-absolute top-0 start-0 d-none d-dark-mode-block" :src="circleLight" alt="Img" style="animation: rotate-cw 60s linear infinite" />
          </div>
        </b-col>
        <b-col md="6" lg="5" xl="4" class="offset-lg-1" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
          <div class="ps-md-4 ps-lg-0">
            <h3 class="h2 pb-md-2 pb-lg-3">Buy passes for a team of 5 or more members with a <span class="text-danger">20% discount</span></h3>
            <p class="mb-0">Scelerisque et massa fames ac morbi sit commodo dignissim aucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus.</p>
          </div>
        </b-col>
      </b-row>
      <b-row class="align-items-center pb-2 pb-sm-4 pb-lg-5" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
        <b-col md="6" class="pb-1 pb-sm-3 pb-md-0 mb-4 mb-md-0">
          <img class="d-block rounded-5 mx-auto" :src="feature3" width="470" alt="Img" />
        </b-col>
        <b-col md="6" lg="5" xl="4" class="offset-lg-1" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
          <div class="ps-md-4 ps-lg-0">
            <h3 class="h2 pb-md-2 pb-lg-3">Private fully equipped halls for online meetings and conferences</h3>
            <ul class="list-unstyled fs-lg mb-0">
              <li class="d-flex pt-1 mt-2 mx-2 mx-md-0">
                <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                Faucibus vel quisque lectus laoreet sem
              </li>
              <li class="d-flex pt-1 mt-2 mx-2 mx-md-0">
                <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                Egestas in porta netus semper at nunc
              </li>
              <li class="d-flex pt-1 mt-2 mx-2 mx-md-0">
                <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                Sed amet est at faucibus dolor sed
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import feature1 from '@/assets/img/landing/coworking-space/features/01.jpg'
import feature2 from '@/assets/img/landing/coworking-space/features/02.png'
import feature3 from '@/assets/img/landing/coworking-space/features/03.jpg'

import circleDark from '@/assets/img/landing/coworking-space/features/circles-dark.png'
import circleLight from '@/assets/img/landing/coworking-space/features/circles-light.png'
</script>

<template>
  <b-container class="py-sm-2 py-md-3 py-lg-4 py-xl-5 mb-2 mb-sm-3 mb-md-4 mb-xxl-5">
    <b-row class="align-items-center py-5">
      <b-col md="6" lg="7" xxl="8" class="order-md-2 pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0">
        <div class="position-relative ms-auto" style="max-width: 823px">
          <img class="d-block" :src="cta1" alt="Img" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" />
          <img class="d-block position-absolute top-0 start-0" :src="cta2" alt="Img" data-aos="fade-up" data-aos-duration="900" data-aos-offset="300" />
        </div>
      </b-col>
      <b-col md="6" lg="5" xxl="4" class="order-md-1">
        <h2 class="h1 pb-md-2 pb-xl-3">Headphones that fit your ears perfectly</h2>
        <p class="mb-4">Adipiscing posuere dui, amet, augue nisl dictum justo enim sed neque congue non quam ultrices interdum vitae vestibulum turpis nullam netus sed aliquam.</p>
        <div class="d-flex pb-2 pb-lg-0 mb-4 mb-lg-5">
          <div class="me-5">
            <h3 class="mb-1">60-200 Hz</h3>
            <p class="fs-sm mb-0">frequency range</p>
          </div>
          <div>
            <h3 class="mb-1">0.75 kg</h3>
            <p class="fs-sm mb-0">weight, kg</p>
          </div>
        </div>
        <router-link class="btn btn-dark" to="#">Support us on Kickstarter</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import cta1 from '@/assets/img/landing/product/cta/01.png'
import cta2 from '@/assets/img/landing/product/cta/02.png'
</script>

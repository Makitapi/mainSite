<template>
  <section class="pt-2 pt-md-0">
    <div class="position-relative pt-lg-3 pt-xl-4 pt-xxl-5">
      <div class="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-5 d-md-none" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="300"></div>
      <div class="bg-primary position-absolute top-0 start-0 w-100 h-100 d-none d-md-block" style="border-radius: 5rem 5rem 0 0" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="300"></div>
      <b-container class="px-4 px-sm-5 px-md-0 position-relative z-2 pt-md-4 pt-lg-5 pb-sm-2 pb-md-3 pb-xl-4 pb-xxl-5" data-bs-theme="dark">
        <b-row class="justify-content-center" data-aos="fade-up" data-aos-duration="500" data-aos-offset="300">
          <b-col md="10" lg="8" xl="7" xxl="6" class="text-center py-5">
            <h2 class="display-1 mb-4">New life for data begins today</h2>
            <p class="text-body fs-xl pb-3 mb-3 mb-lg-4">Using basic data skills you can analysis and improve your business indicators with Around.</p>
            <div class="d-sm-flex justify-content-center">
              <b-button size="lg" variant="warning" pill class="w-100 w-sm-auto me-sm-4 mb-3 mb-sm-0">Start free 14-day trial </b-button>
              <b-button size="lg" variant="outline-warning" pill class="w-100 w-sm-auto">Request a demo</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="position-relative z-2 px-md-5">
        <img class="d-block d-dark-mode-none mx-auto" :src="dashLight" width="1076" alt="Img" />
        <img class="d-none d-dark-mode-block mx-auto" :src="dashDark" width="1076" alt="Img" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import dashLight from '@/assets/img/landing/saas-2/dash-light.png'
import dashDark from '@/assets/img/landing/saas-2/dash-dark.png'
</script>

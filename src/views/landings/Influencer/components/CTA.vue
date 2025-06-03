<template>
  <section class="position-relative overflow-hidden" data-bs-theme="light">
    <div class="position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
      <div class="container-start position-absolute top-0 start-0 w-100 h-100 d-none d-xxl-block" style="transform: rotate(-180deg); border-top-right-radius: 7rem; border-bottom-right-radius: 7rem; background: linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%)"></div>
      <div class="container-start position-absolute top-0 start-0 w-100 h-100 d-lg-block d-xxl-none" style="transform: rotate(-180deg); border-top-right-radius: 4rem; border-bottom-right-radius: 4rem; background: linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%)"></div>
      <div class="container-start position-absolute top-0 start-0 w-100 h-100 d-sm-block d-lg-none" style="transform: rotate(-180deg); border-top-right-radius: 2.25rem; border-bottom-right-radius: 2.25rem; background: linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%)"></div>
    </div>
    <b-container class="position-relative z-2 pt-5">
      <b-row class="align-items-center justify-content-center pt-1 pt-sm-3 pt-md-4">
        <b-col md="6" xl="5" class="offset-md-1 pb-3 pb-sm-0 mt-md-n5 mb-4 mb-sm-5" data-aos="fade-up" data-aos-duration="850" data-aos-offset="180" data-disable-parallax-down="md">
          <div class="mx-auto" style="max-width: 25rem">
            <h2 class="display-5 pb-5 mb-2">Jumpstart healthy change in your life today!</h2>
            <div class="d-flex">
              <div class="pe-3 me-lg-3">
                <b-button size="lg" variant="primary" class="px-4" type="button">
                  <span class="text-light px-sm-2">{{ currency }}14.<sup>99</sup> / month</span>
                </b-button>
              </div>
              <div>
                <b-button size="lg" variant="dark" class="px-4" type="button">
                  <span class="text-light px-sm-2">{{ currency }}89.<sup>99</sup> / year</span>
                </b-button>
                <div class="d-flex align-items-center pt-2 mt-1">
                  <span class="badge bg-danger text-light rounded-pill me-2">Expires</span>
                  <span class="text-body fs-sm">01/12 8:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="8" sm="6" md="5" xl="6" class="d-flex justify-content-end" data-aos="fade-up" data-aos-duration="600" data-aos-offset="250" data-disable-parallax-down="md">
          <img :src="ctaImage" width="457" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers/constants'
import ctaImage from '@/assets/img/landing/influencer/cta.png'
</script>

<template>
  <section class="overflow-hidden">
    <b-container class="pt-2 pt-sm-4 pb-sm-2 pb-md-4 py-xl-5 mt-5">
      <b-row class="align-items-center py-5 mt-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <b-col lg="7" class="order-lg-2 d-flex justify-content-center justify-content-lg-end mb-4 mb-md-5 mb-lg-0 pb-3 pb-md-0">
          <Parallax id="parallax" custom-class="parallax me-lg-n4 me-xl-n5" :custom-style="{ maxWidth: '667px' }">
            <div class="parallax-layer" data-depth="0.1">
              <img :src="hero1" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="-0.2">
              <img :src="hero2" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.25">
              <img :src="hero3" alt="Layer" />
            </div>
          </Parallax>
        </b-col>
        <b-col lg="5" class="order-lg-1">
          <h1 class="display-3 text-center text-lg-start pb-sm-2 pb-md-3">The effective solutions for your business</h1>
          <p class="fs-lg text-center text-lg-start pb-xl-2 mx-auto mx-lg-0 mb-5" style="max-width: 420px">We are a team who creates marketing strategies for B2B and B2C companies.</p>
          <div class="input-group mx-auto mx-lg-0" style="max-width: 420px">
            <span class="input-group-text text-body-secondary">
              <i class="ai-mail"></i>
            </span>
            <b-form-input type="email" placeholder="Enter your email" />
            <b-button variant="primary" type="button">Book a call</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import Parallax from '@/components/Parallax.vue'
import hero1 from '@/assets/img/landing/business-consulting/hero/01.png'
import hero2 from '@/assets/img/landing/business-consulting/hero/02.png'
import hero3 from '@/assets/img/landing/business-consulting/hero/03.png'
</script>

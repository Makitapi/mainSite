<template>
  <Jarallax custom-class="jarallax" :options="{ speed: 0.6 }">
    <section class="jarallax min-vh-100 py-lg-3 py-xl-4 py-xxl-5" data-jarallax data-speed="0.65">
      <div class="jarallax-img" :style="`background-image: url(${heroBg})`"></div>
      <b-container fluid class="position-relative z-2 py-5 my-md-3 my-lg-5">
        <b-row class="pb-3 pt-4 pt-sm-5">
          <b-col md="9" lg="7" xl="6" xxl="5" class="offset-lg-1 pt-5">
            <b-card no-body class="border-0 bg-primary rounded-1 py-2 py-sm-3 py-md-4" data-bs-theme="dark">
              <b-card-body>
                <div class="mx-auto pt-2" style="max-width: 535px">
                  <h1 class="display-5 mb-4">The effective solutions for your business</h1>
                  <p class="fs-lg pb-4 pb-lg-5 mb-2" style="max-width: 410px">We are a team that creates business strategies for B2B and B2C companies.</p>
                  <div class="d-flex flex-column flex-sm-row align-items-center pb-lg-2">
                    <a class="btn btn-lg btn-light w-100 w-sm-auto me-sm-3 mb-3 mb-sm-0" href="#">Book a free consultation</a>
                    <a class="d-flex align-items-center fw-semibold text-white text-decoration-none px-3 py-2" href="tel:+15262200459">
                      <i class="ai-phone fs-xl me-2"></i>
                      +1&nbsp;526&nbsp;220&nbsp;0459
                    </a>
                  </div>
                  <ul class="list-unstyled d-sm-flex mb-0 pt-4 pt-sm-5 mt-lg-2 mt-xl-4">
                    <li class="d-flex mb-2 mb-sm-0 pe-sm-1 me-sm-3">
                      <i class="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
                      Full spectrum of services
                    </li>
                    <li class="d-flex">
                      <i class="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
                      Flexible work terms
                    </li>
                  </ul>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </Jarallax>
</template>

<script setup lang="ts">
import Jarallax from '@/components/Jarallax.vue'
import heroBg from '@/assets/img/landing/corporate/hero-bg.jpg'
</script>

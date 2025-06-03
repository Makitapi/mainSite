<template>
  <b-container class="pt-5 mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5">
    <b-row class="align-items-center mt-2 pt-2 pt-sm-4 pt-lg-5">
      <b-col md="7" lg="6">
        <b-card no-body class="border-0 bg-secondary py-1 p-lg-4">
          <b-card-body>
            <Swiper
              :modules="[Navigation]"
              :spaceBetween="30"
              :loop="true"
              :navigation="{
                prevEl: '#prev-testimonial',
                nextEl: '#next-testimonial'
              }"
            >
              <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx">
                <p class="lead text-dark pb-3 mb-3">{{ testimonial.comment }}</p>
                <div class="d-flex align-items-center">
                  <img class="rounded-circle" :src="testimonial.author.image" width="60" alt="" />
                  <div class="ps-3">
                    <h3 class="h4 mb-0">{{ testimonial.author.name }}</h3>
                    <div class="fs-lg text-body-secondary">{{ testimonial.author.designation }}</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </b-card-body>
        </b-card>

        <!-- Slider control buttons (Preev / Next) -->
        <div class="d-flex justify-content-center justify-content-md-end pt-4">
          <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial" aria-label="Prev">
            <i class="ai-arrow-left"></i>
          </button>
          <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle" type="button" id="next-testimonial" aria-label="Next">
            <i class="ai-arrow-right"></i>
          </button>
        </div>
      </b-col>

      <b-col md="5" xl="4" class="offset-lg-1 pt-2 pt-md-0 mt-5 mt-md-n5">
        <div class="ps-md-4 ps-lg-0">
          <h2 class="h1 mb-4">More than 2,000 clients use Around for data analysis</h2>
          <ul class="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
            <li class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              24/7 customer support
            </li>
            <li class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Lifetime update
            </li>
            <li class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Forecasting and recommendations
            </li>
          </ul>
          <router-link class="btn btn-lg btn-primary rounded-pill" to="#">Start free 14-day trial</router-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { testimonialData } from '@/views/landings/SaasV2/data'
</script>

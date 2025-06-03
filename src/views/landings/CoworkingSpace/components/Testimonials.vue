<template>
  <b-container class="pt-5 mt-1 mt-sm-2 mt-lg-4 mt-xxl-5">
    <b-row class="align-items-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-xxl-2">
      <b-col md="5" xl="4" class="offset-lg-1 mt-0 mt-md-n5 mb-5 mb-md-0">
        <div class="pe-md-4">
          <h2 class="h1 text-center text-md-start mb-4">More than 2,000 clients use Around as a work space</h2>
          <ul class="list-unstyled d-flex d-md-block flex-wrap justify-content-center pb-2 pb-lg-0 mb-4 mb-lg-5">
            <li class="d-flex pt-1 mt-2 mx-2 mx-md-0">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              24/7 access to the workplace
            </li>
            <li class="d-flex pt-1 mt-2 mx-2 mx-md-0">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Private fully equipped halls
            </li>
            <li class="d-flex pt-1 mt-2 mx-2 mx-md-0">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Fixed workplace
            </li>
          </ul>
          <div class="text-center text-md-start">
            <a class="btn btn-lg btn-primary" href="#">Start free 14-day trial</a>
          </div>
        </div>
      </b-col>

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
              <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx">
                <TestimonialCard :testimonial="testimonial" />
              </SwiperSlide>
            </Swiper>
          </b-card-body>
        </b-card>

        <div class="d-flex justify-content-center justify-content-md-start pt-4">
          <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial" aria-label="Prev">
            <i class="ai-arrow-left"></i>
          </button>
          <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle" type="button" id="next-testimonial" aria-label="Next">
            <i class="ai-arrow-right"></i>
          </button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { testimonials } from '@/views/landings/CoworkingSpace/data'
import TestimonialCard from '@/views/landings/CoworkingSpace/components/TestimonialCard.vue'
</script>

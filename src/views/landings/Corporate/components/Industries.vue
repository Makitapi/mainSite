<template>
  <section class="bg-dark position-relative pb-5 pb-lg-0 pt-md-2 pt-lg-4 pt-xl-5" data-bs-theme="dark">
    <b-container class="pb-sm-3 pb-md-4 pb-lg-0 pt-5">
      <b-row class="pb-2 pb-lg-0 pt-1 pt-sm-4">
        <b-col md="5" xl="4">
          <h2 class="h1 text-center text-md-start pb-3 mb-0 mb-md-3 mb-lg-4">The industries which we work in</h2>

          <!-- Button visible on screens > 768px -->
          <a class="btn btn-outline-primary d-none d-md-inline-flex" href="#">More about industries</a>
        </b-col>
        <b-col md="7" lg="6" class="offset-lg-1 offset-xl-2">
          <div class="ps-md-4 ps-lg-0">
            <b-accordion class="accordion-alt" id="industries">
              <b-accordion-item class="mb-n3 mb-lg-n2 mb-xl-1" :title="item.title" v-for="(item, idx) in faqData" :key="idx" :visible="!idx">
                {{ item.description }}
              </b-accordion-item>
            </b-accordion>
          </div>
        </b-col>
      </b-row>

      <!-- Button visible on screens < 768px -->
      <div class="text-center d-md-none mt-4">
        <a class="btn btn-outline-primary" href="#">More about industries</a>
      </div>
    </b-container>

    <!-- Shapes -->
    <div class="d-none d-lg-flex align-items-end mt-xl-n5">
      <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <svg class="text-info" width="116" height="191" viewBox="0 0 116 191" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M58 191C90.0325 191 116 165.033 116 133L116 4C116 1.79086 114.209 7.8281e-08 112 1.74846e-07L60 2.44784e-06C26.8629 3.89631e-06 4.54735e-07 26.8629 1.9032e-06 60L5.09413e-06 133C6.49432e-06 165.033 25.9675 191 58 191Z"></path>
        </svg>
      </div>
      <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay="150">
        <svg class="text-warning" width="199" height="120" viewBox="0 0 199 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect width="199" height="120" rx="60"></rect>
        </svg>
      </div>
      <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
        <svg class="text-danger" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="84.5" cy="84.5" r="84.5"></circle>
        </svg>
      </div>
      <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay="450">
        <svg class="text-primary" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.38722e-06 84.5C5.92617e-06 101.213 4.95585 117.55 14.2408 131.446C23.5258 145.342 36.7229 156.172 52.1633 162.568C67.6036 168.963 84.5937 170.637 100.985 167.376C117.377 164.116 132.433 156.068 144.251 144.251C156.068 132.433 164.116 117.377 167.376 100.985C170.637 84.5937 168.963 67.6036 162.568 52.1632C156.172 36.7229 145.342 23.5258 131.446 14.2408C117.55 4.95584 101.213 -5.92617e-06 84.5 -7.38722e-06L84.5 84.5L7.38722e-06 84.5Z"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqData } from '@/views/landings/Corporate/data'
</script>

<template>
  <b-container class="pt-2 pt-sm-3 pt-md-4 pt-lg-5">
    <h2 class="text-center pt-5 pb-3 mb-lg-4 mt-lg-3 mt-xl-4 mt-xxl-5">More than 2,000 clients using Around to analyze data</h2>
    <b-tabs contentClass="px-lg-0 py-lg-5 bg-secondary overflow-hidden card border-0 p-5" navClass="justify-content-between flex-nowrap text-nowrap p-0 m-0 nav-tab-width" navWrapperClass="overflow-auto pb-3 pb-xl-4 mb-3 mb-lg-4">
      <b-tab v-for="(testimonial, idx) in testimonialData" :key="idx">
        <template #title>
          <div class="swap-image">
            <img class="swap-to" :src="testimonial.author.company.image.imageSwap" :width="testimonial.author.company.image.width" alt="Foster" />
            <div class="swap-from">
              <img class="d-dark-mode-none" :src="testimonial.author.company.image.dark" :width="testimonial.author.company.image.width" alt="Foster" />
              <img class="d-none d-dark-mode-block" :src="testimonial.author.company.image.light" :width="testimonial.author.company.image.width" alt="Foster" />
            </div>
          </div>
        </template>
        <b-row class="py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
          <b-col md="4" lg="3" class="offset-lg-1 mb-3 mb-md-0"
            ><img class="d-block rounded-circle mb-3" :src="testimonial.author.image" width="86" alt="" />
            <h4 class="mb-0">{{ testimonial.author.name }}</h4>
            <p class="fs-lg text-body-secondary mb-0">{{ testimonial.author.designation }}</p>
          </b-col>
          <b-col md="8" lg="7">
            <p class="text-dark lead mb-0">{{ testimonial.comment }}</p>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script lang="ts" setup>
import { testimonialData } from '@/views/Makitapi/1Landing/data'
</script>

<style lang="css">
.nav-tab-width {
  min-width: 1000px;
}
</style>
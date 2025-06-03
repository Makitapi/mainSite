<template>
  <b-container class="mt-n3 mt-sm-0 py-md-3 py-lg-4">
    <h2 class="text-center pb-3 mb-lg-4">More than 2,000 clients using Around to analyze data</h2>

    <div class="overflow-auto pb-3 pb-xl-4 mb-3 mb-lg-4">
      <div class="overflow-auto pb-3 pb-xl-4 mb-3 mb-lg-4">
        <b-tabs contentClass="px-lg-0 py-lg-5 bg-secondary overflow-hidden card border-0 p-5" navClass="justify-content-between flex-nowrap text-nowrap p-0 m-0 nav-tab-width" navWrapperClass="overflow-auto pb-3 pb-xl-4 mb-3 mb-lg-4">
          <template v-for="(testimonial, idx) in testimonialData" :key="idx">
            <TestimonialCard :testimonial="testimonial" />
          </template>
        </b-tabs>
      </div>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import { testimonialData } from '@/views/pages/Pricing/data'
import TestimonialCard from '@/views/pages/Pricing/components/TestimonialCard.vue'
</script>

<style lang="css">
.nav-tab-width {
  min-width: 1000px;
}
</style>

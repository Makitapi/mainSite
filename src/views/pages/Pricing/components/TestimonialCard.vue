<template>
  <b-tab class="fade">
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
      <b-col md="4" lg="3" class="offset-lg-1 mb-3 mb-md-0">
        <img class="d-block rounded-circle mb-3" :src="testimonial.author.image" width="86" alt="" />
        <h4 class="mb-0">{{ testimonial.author.name }}</h4>
        <p class="fs-lg text-body-secondary mb-0">{{ testimonial.author.designation }}</p>
      </b-col>
      <b-col md="8" lg="7">
        <p class="text-dark lead mb-0">{{ testimonial.comment }}</p>
      </b-col>
    </b-row>
  </b-tab>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/pages/Pricing/types'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>

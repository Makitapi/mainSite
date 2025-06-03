<template>
  <p class="lead text-dark pb-3 mb-3">{{ testimonial.comment }}</p>
  <div class="d-flex align-items-center">
    <img class="rounded-circle" :src="testimonial.author.image" width="60" alt="Jenny Wilson" />
    <div class="ps-3">
      <h3 class="h4 mb-0">{{ testimonial.author.name }}</h3>
      <div class="fs-lg text-body-secondary">{{ testimonial.author.designation }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/CoworkingSpace/types'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>

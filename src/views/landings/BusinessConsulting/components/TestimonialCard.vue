<template>
  <b-card no-body class="border-0">
    <b-card-body>
      <div class="d-flex align-items-center mb-3">
        <img class="rounded-circle" :src="testimonial.author.image" width="60" alt="" />
        <div class="ps-3">
          <div class="h6 mb-1">{{ testimonial.author.name }}</div>
          <div class="fs-sm text-body-secondary">{{ testimonial.author.designation }}</div>
        </div>
      </div>
      <p class="card-text">{{ testimonial.comment }}</p>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/BusinessConsulting/types'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>

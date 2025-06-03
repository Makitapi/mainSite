<template>
  <b-card no-body class="h-100 border-0 bg-secondary rounded-4">
    <b-card-body>
      <div class="d-flex align-items-center mb-4">
        <img class="rounded-circle" :src="testimonial.author.image" width="60" alt="Avatar" />
        <div class="ps-3">
          <div class="h5 mb-0">{{ testimonial.author.name }}</div>
          <div class="text-nowrap">
            <i v-for="(star, idx) in Array.from(new Array(Math.floor(testimonial.rating ?? 0)))" :key="idx" class="ai-star-filled text-warning me-1"></i>
            <i v-for="(star, idx) in Array.from(new Array(5 - Math.floor(testimonial.rating ?? 0)))" :key="idx" class="ai-star text-body-secondary opacity-70"></i>
          </div>
        </div>
      </div>
      <p class="mb-0">{{ testimonial.comment }}</p>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/ConferenceEvent/types'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>

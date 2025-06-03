<template>
  <div class="bg-light rounded-circle flex-shrink-0 position-relative z-2 me-n5" style="padding: 0.375rem">
    <img class="rounded-circle" :src="testimonial.author.image" width="80" alt="Avatar" />
  </div>
  <b-card no-body class="bg-secondary border-0 rounded-4 py-3 ps-4 ps-sm-5 pe-3">
    <b-card-body class="py-3 px-2 p-sm-4 ms-4 ms-sm-0">
      <p class="fs-xl">{{ testimonial.comment }}</p>
      <div class="h5 fw-bold mb-0">{{ testimonial.author.name }}</div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/SaasV3/types'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>

<template>
  <b-card no-body :bg-variant="testimonial.variant" class="border-0 bg-opacity-10 h-100 text-center">
    <div class="polygon-avatar mx-auto translate-middle-y" :class="`bg-${testimonial.variant}`">
      <img :src="testimonial.author.image" alt="Nick Williams" />
    </div>
    <b-card-body class="pt-0 mt-n4">
      <p class="card-text fs-xl">{{ testimonial.comment }}</p>
    </b-card-body>
    <b-card-footer class="border-0 pt-0">
      <div class="h4 mb-1">{{ testimonial.author.name }}</div>
      <span>{{ testimonial.author.occupation }}</span>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/MobileShowcase/types'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>

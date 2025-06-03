<template>
  <b-card no-body class="border-0 bg-secondary p-1 p-sm-0 p-md-2">
    <img :src="testimonial.author.company.image.light" class="d-block d-dark-mode-none mx-auto" width="165" alt="" />
    <img :src="testimonial.author.company.image.dark" class="d-none d-dark-mode-block mx-auto" width="165" alt="" />

    <b-card-body class="text-center pt-1">
      <p class="pb-3 mb-3">{{ testimonial.comment }}</p>
      <img v-if="testimonial.author.image" :src="testimonial.author.image" class="d-inline-block rounded-circle" width="80" alt="Avatar" />
      <div class="pt-2 mt-1">
        <h3 class="h5 mb-1">{{ testimonial.author.name }}</h3>
        <p class="fs-sm text-body-secondary mb-0">{{ testimonial.author.designation }}</p>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/landings/SaasV4/types'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>

<template>
  <b-card no-body class="border-0 bg-secondary card-hover h-100 py-4" style="max-width: 306px">
    <div class="opacity-0 position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center rounded-5" :style="`background-image: url(${feature.image});`"></div>
    <b-card-body class="text-center">
      <i :class="feature.icon" class="h1 fw-normal text-primary d-block mb-4" />
      <h3>{{ feature.name }}</h3>
      <p class="card-text">{{ feature.description }}</p>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { FeatureType } from '@/views/landings/YogaStudio/types'

defineProps({
  feature: {
    type: Object as PropType<FeatureType>,
    required: true
  }
})
</script>

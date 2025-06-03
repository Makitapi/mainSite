<template>
  <a class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="#">
    <b-card-body class="d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4" :style="`background-image: url(${service.image})`">
      <div class="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3">
        <i class="ai-arrow-right"></i>
      </div>
    </b-card-body>
    <b-card-body class="pb-3">
      <span v-html="service.icon" />
      <h3 class="h4">{{ service.title }}</h3>
      <p class="mb-0">{{ service.description }}</p>
    </b-card-body>
    <div class="card-footer border-0 pt-3 mb-3">
      <div class="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none">
        <i class="ai-arrow-right"></i>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ServiceType } from '@/views/landings/Corporate/types'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>

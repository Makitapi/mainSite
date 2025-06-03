<template>
  <router-link class="card card-hover-primary border-0 h-100 text-decoration-none" to="#">
    <b-card-body class="pb-0">
      <span v-html="service.icon" />
      <h3 class="h4 card-title mt-0">{{ service.title }}</h3>
      <p class="card-text">{{ service.description }}</p>
    </b-card-body>
    <div class="card-footer border-0 py-3 my-3 mb-sm-4">
      <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
        <i class="ai-arrow-right"></i>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ServiceType } from '@/views/landings/BusinessConsulting/types'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>

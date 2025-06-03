<template>
  <router-link class="card card-hover-primary bg-secondary border-0 h-100 text-decoration-none" to="#">
    <b-card-body class="pb-0">
      <span v-html="service.icon" />
      <h3 class="h4 card-title mt-0">{{ service.title }}</h3>
      <p class="card-text">{{ service.description }}</p>
    </b-card-body>
    <b-card-footer class="border-0 py-3 my-3 mb-sm-4">
      <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
        <i class="ai-arrow-right"></i>
      </div>
    </b-card-footer>
  </router-link>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { ServiceType } from '@/views/pages/services/ServicesV1/types'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>

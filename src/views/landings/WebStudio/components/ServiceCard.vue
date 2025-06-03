<template>
  <router-link class="card bg-secondary border-0 h-100 text-center text-decoration-none" :to="{ name: service.link?.name }">
    <b-card-body>
      <span v-html="service.icon" />
      <h3>{{ service.title }}</h3>
      <p class="card-text">{{ service.description }}</p>
    </b-card-body>
    <b-card-footer class="border-0 px-0 pt-0 pb-4 mb-3">
      <div class="btn btn-icon btn-outline-primary rounded-circle stretched-link">
        <i class="ai-arrow-right"></i>
      </div>
    </b-card-footer>
  </router-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ServiceType } from '@/views/landings/WebStudio/types'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>

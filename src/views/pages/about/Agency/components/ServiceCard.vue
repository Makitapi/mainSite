<template>
  <b-card no-body class="h-100 border-0 rounded-5">
    <b-card-body class="pb-3">
      <span v-html="service.icon" />
      <h3 class="h4">{{ service.title }}</h3>
      <p class="mb-0">{{ service.description }}</p>
    </b-card-body>
    <b-card-footer class="border-0 pt-3 mb-3">
      <router-link class="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" :to="{ name: service.link?.name, params: service.link?.params }" aria-label="Learn more">
        <i class="ai-arrow-right"></i>
      </router-link>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ServiceType } from '@/views/pages/about/Agency/types'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>

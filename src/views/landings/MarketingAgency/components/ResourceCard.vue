<template>
  <b-card no-body class="border-0 h-100">
    <b-card-body class="pb-4">
      <div class="d-flex align-items-center mb-4 mt-n1">
        <span class="fs-sm text-body-secondary">{{ resource.publishedOn.month }} {{ resource.publishedOn.date }}, {{ resource.publishedOn.year }}</span>
        <span class="fs-xs opacity-20 mx-3">|</span>
        <a class="badge text-nav fs-xs border" href="#">{{ toSentenceCase(resource.category) }}</a>
      </div>
      <h3 class="h4 card-title">
        <a href="#">{{ resource.title }}</a>
      </h3>
      <p class="card-text">{{ resource.description }}</p>
    </b-card-body>
    <div class="card-footer pt-3">
      <a class="d-flex align-items-center text-decoration-none pb-2" href="#">
        <img class="rounded-circle" :src="resource.author.image" width="48" alt="" />
        <h6 class="ps-3 mb-0">{{ resource.author.name }}</h6>
      </a>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResourceType } from '@/views/landings/MarketingAgency/types'
import { toSentenceCase } from '@/helpers/change-casing'

defineProps({
  resource: {
    type: Object as PropType<ResourceType>,
    required: true
  }
})
</script>

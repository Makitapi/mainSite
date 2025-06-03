<template>
  <router-link :to="{ name: resource.link?.name }">
    <img class="rounded-5" :src="resource.image" alt="Img" />
  </router-link>
  <h3 class="h4 pt-4">
    <router-link :to="{ name: resource.link?.name }">{{ resource.title }}</router-link>
  </h3>
  <p>{{ resource.description }}</p>
  <div class="d-flex flex-wrap align-items-center pt-1 mt-n2">
    <a class="nav-link text-body-secondary fs-sm fw-normal p-0 mt-2 me-3" href="#">
      {{ resource.share }}
      <i class="ai-share fs-lg ms-1"></i>
    </a>
    <a class="nav-link text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="#">
      {{ resource.comment }}
      <i class="ai-message fs-lg ms-1"></i>
    </a>
    <span class="fs-xs opacity-20 mt-2 mx-3">|</span>
    <span class="fs-sm text-body-secondary mt-2">{{ resource.time }}</span>
    <span class="fs-xs opacity-20 mt-2 mx-3">|</span>
    <a class="badge bg-primary bg-opacity-10 text-primary fs-xs mt-2" href="#">{{ resource.category }}</a>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResourceType } from '@/views/landings/SaasV2/types'

defineProps({
  resource: {
    type: Object as PropType<ResourceType>,
    required: true
  }
})
</script>

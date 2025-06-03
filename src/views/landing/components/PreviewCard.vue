<template>
  <b-col>
    <div class="card-hover card-lifted mx-auto" style="max-width: 416px">
      <span class="badge bg-danger rouded-pill position-absolute top-0 end-0 translate-middle-y me-n2 z-2" v-if="item.isNew">New</span>
      <div class="card-lifted overflow-hidden rounded-3 mb-3">
        <img class="d-dark-mode-none" :src="item.lightImage" alt="Mobile App Showcase" />
        <img class="d-none d-dark-mode-block" :src="item.darkImage" :alt="item.name" />
      </div>
      <h3 class="h5 text-center mb-0">
        <router-link class="stretched-link" :to="{ name: item.link.name }">{{ item.name }}</router-link>
      </h3>
    </div>
  </b-col>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { PreviewCardType } from '@/views/landing/data'

defineProps({
  item: {
    type: Object as PropType<PreviewCardType>,
    required: true
  }
})
</script>

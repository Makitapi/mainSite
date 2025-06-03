<template>
  <b-card no-body class="border-0 bg-secondary h-100">
    <b-card-body class="mx-auto" style="max-width: 416px">
      <p class="fs-lg mb-1">{{ item.description }}</p>

      <img class="d-dark-mode-none" :src="item.image.dark" width="150" alt="" />
      <img class="d-none d-dark-mode-inline-block" :src="item.image.light" width="150" alt="" />
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { SkillCardType } from '@/views/pages/services/ServicesV3/types'

defineProps({
  item: {
    type: Object as PropType<SkillCardType>,
    required: true
  }
})
</script>

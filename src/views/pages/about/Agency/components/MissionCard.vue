<template>
  <b-card no-body class="border-0 bg-secondary rounded-5 h-100">
    <b-card-body>
      <span v-html="mission.icon" />
      <h3 class="h4">{{ mission.title }}</h3>
      <p class="mb-0">{{ mission.content }}</p>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { MissionType } from '@/views/pages/about/Agency/types'

defineProps({
  mission: {
    type: Object as PropType<MissionType>,
    required: true
  }
})
</script>

<template>
  <div class="h-100 bg-secondary rounded-3 text-center p-4">
    <h2 class="h6 pb-2 mb-1">{{ stat.title }}</h2>
    <div class="h2 text-primary mb-2">{{ currency }}{{ stat.amount }}</div>
    <p class="fs-sm text-body-secondary mb-0">{{ stat.description }}</p>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import { currency } from '@/helpers/constants'
import type { StatesType } from '@/views/account/Earnings/types'

defineProps({
  stat: {
    type: Object as PropType<StatesType>,
    required: true
  }
})
</script>

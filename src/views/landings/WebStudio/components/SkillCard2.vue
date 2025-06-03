<template>
  <b-card no-body class="card-flip card-hover border-0 w-sm-auto h-100 bg-secondary rounded-5">
    <div class="card-flip-inner mx-auto" style="max-width: 306px">
      <div class="card-flip-front p-0">
        <b-card-body class="d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 opacity-100">
          <img :src="item.image.light" width="72" alt="" />
        </b-card-body>
      </div>
      <div class="card-flip-back p-0 bg-transparent">
        <b-card-body class="d-flex flex-column justify-content-center align-items-center h-100">
          <img :src="item.image.light" width="52" alt="" />
          <p class="fs-sm pt-3 mb-0">{{ item.description }}</p>
        </b-card-body>
      </div>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { SkillCardType } from '@/views/landings/WebStudio/types'

defineProps({
  item: {
    type: Object as PropType<SkillCardType>,
    required: true
  }
})
</script>

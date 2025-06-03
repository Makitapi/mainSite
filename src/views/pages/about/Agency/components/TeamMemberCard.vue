<template>
  <b-card no-body class="card-hover border-0 rounded-5 overflow-hidden">
    <img :src="member.image" alt="Img" />
    <div class="position-absolute top-0 start-0 w-100 h-100 opacity-0">
      <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
      <b-card-body class="d-flex flex-column justify-content-end h-100 position-relative z-2 text-center" data-bs-theme="dark">
        <h3 class="h5 mb-1">{{ member.name }}</h3>
        <p class="text-body mb-3">{{ member.role }}</p>
        <div class="d-flex justify-content-center">
          <router-link v-for="(icon, idx) in member.socialMedia" :key="idx" :class="`btn-${icon}`" class="btn btn-icon btn-sm btn-light rounded-circle mx-2" to="#" aria-label="Instagram">
            <i :class="`ai-${icon}`" />
          </router-link>
        </div>
      </b-card-body>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { MemberType } from '@/views/pages/about/Agency/types'

defineProps({
  member: {
    type: Object as PropType<MemberType>,
    required: true
  }
})
</script>

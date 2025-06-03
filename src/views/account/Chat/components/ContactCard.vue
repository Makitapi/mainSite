<template>
  <div v-if="contact.image" class="position-relative flex-shrink-0 my-1">
    <img class="rounded-circle" :src="contact.image" width="48" alt="Avatar" />
    <span class="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style="width: 0.625rem; height: 0.625rem" v-if="contact.isOnline"></span>
    <span class="position-absolute bottom-0 end-0 border border-white rounded-circle me-1" style="width: 0.625rem; height: 0.625rem; background-color: #d7dde2" v-else></span>
  </div>
  <div v-if="contact.avatar" :class="`d-flex align-items-center justify-content-center position-relative flex-shrink-0 rounded-circle text-${contact.bgColor} fs-lg fw-semibold my-1`" :style="`width: 48px; height: 48px; background-color: rgba(var(--ar-${contact.bgColor}-rgb), .15);`">
    {{ contact.avatar }}
    <span class="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style="width: 0.625rem; height: 0.625rem" v-if="contact.isOnline"></span>
    <span class="position-absolute bottom-0 end-0 border border-white rounded-circle me-1" style="width: 0.625rem; height: 0.625rem; background-color: #d7dde2" v-else></span>
  </div>
  <div class="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
    <div class="me-3">
      <div class="h6 mb-1">{{ contact.name }}</div>
      <p class="text-body fs-sm mb-0">{{ contact.message }}</p>
    </div>
    <div class="text-end">
      <span class="d-block fs-xs text-body-secondary">{{ contact.timestamp }}</span>
      <span v-if="contact.unreadMessages" class="badge bg-danger fs-xs lh-1 py-1 px-2">{{ contact.unreadMessages }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ContactType } from '@/views/account/Chat/types'

defineProps({
  contact: {
    type: Object as PropType<ContactType>,
    required: true
  }
})
</script>

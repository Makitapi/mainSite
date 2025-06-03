<template>
  <b-card no-body class="h-100 rounded-3 p-3 p-sm-4">
    <div class="d-flex align-items-center pb-2 mb-1">
      <h3 class="h6 text-nowrap text-truncate mb-0">Billing address #{{ item.id }}</h3>
      <span v-if="item.primary" class="badge bg-primary bg-opacity-10 text-primary fs-xs ms-3">Primary</span>
      <div class="d-flex ms-auto">
        <button class="nav-link fs-xl fw-normal py-1 pe-0 ps-1 ms-2" type="button" v-b-tooltip.popover title="Edit" aria-label="Edit">
          <i class="ai-edit-alt"></i>
        </button>
        <button class="nav-link text-danger fs-xl fw-normal py-1 pe-0 ps-1 ms-2" type="button" v-b-tooltip.popover title="Delete" aria-label="Trash">
          <i class="ai-trash"></i>
        </button>
      </div>
    </div>
    <p class="mb-0">{{ item.address }},<br />{{ item.city }}, {{ item.state }} {{ item.postalCode }},<br />{{ item.country }}</p>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { AddressType } from '@/views/account/Billing/data'

defineProps({
  item: {
    type: Object as PropType<AddressType>,
    required: true
  }
})
</script>

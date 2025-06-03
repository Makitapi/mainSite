<template>
  <b-card no-body class="h-100 rounded-3 p-3 p-sm-4">
    <div class="d-flex align-items-center pb-2 mb-1">
      <h3 class="h6 text-nowrap text-truncate mb-0">{{ item.name }}</h3>
      <b-badge variant="primary" class="bg-opacity-10 text-primary fs-xs ms-3" v-if="item.status">{{ item.status }} </b-badge>
      <div class="d-flex ms-auto">
        <button class="nav-link fs-xl fw-normal py-1 pe-0 ps-1 ms-2" type="button" v-b-tooltip.popover title="Edit" aria-label="Edit">
          <i class="ai-edit-alt"></i>
        </button>
        <button class="nav-link text-danger fs-xl fw-normal py-1 pe-0 ps-1 ms-2" type="button" v-b-tooltip.popover title="Delete" aria-label="Delete">
          <i class="ai-trash"></i>
        </button>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <span v-html="item.icon" />
      <div class="ps-3 fs-sm" v-if="item.cardType">
        <div class="text-dark">{{ item.cardType }} •••• {{ item.digits }}</div>
        <div class="text-body-secondary">Debit - Expires {{ item.expiration }}</div>
      </div>
      <div class="ps-2 fs-sm" v-else>
        <div class="text-dark">{{ item.description }}</div>
        <div class="text-body-secondary">{{ item.email }}</div>
      </div>
    </div>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { PaymentMethodType } from '@/views/account/Billing/data'

defineProps({
  item: {
    type: Object as PropType<PaymentMethodType>,
    required: true
  }
})
</script>

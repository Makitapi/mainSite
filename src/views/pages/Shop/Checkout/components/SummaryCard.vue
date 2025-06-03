<template>
  <div class="d-sm-flex align-items-center border-top py-4">
    <router-link class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0" :to="{ name: 'shop.products' }">
      <img :src="order.image" width="110" alt="Product" />
    </router-link>
    <div class="w-100 pt-1 ps-sm-4">
      <div class="d-flex">
        <div class="me-3">
          <h3 class="h5 mb-2">
            <router-link :to="{ name: 'shop.products' }">{{ order.title }}</router-link>
          </h3>
          <div v-if="order.color" class="d-sm-flex flex-wrap">
            <div class="text-body-secondary fs-sm me-3">Color: <span class="text-dark fw-medium">Gray night</span></div>
            <div class="text-body-secondary fs-sm me-3">Weight: <span class="text-dark fw-medium">140g</span></div>
          </div>
        </div>
        <div class="text-end ms-auto">
          <div class="fs-5 mb-2">{{ currency }}{{ order.price }}</div>
          <del v-if="order.del" class="text-body-secondary ms-auto">{{ currency }}{{ order.del }}</del>
        </div>
      </div>
      <div class="count-input ms-n3">
        <b-button variant="link" class="btn-icon fs-xl" @click="decrementCount()">-</b-button>
        <input class="form-control" type="number" :value="count" readonly />
        <b-button variant="link" class="btn-icon fs-xl" @click="count++">+</b-button>
      </div>
      <div class="nav justify-content-end mt-n5 mt-sm-n3">
        <a class="nav-link fs-xl p-2" href="#" v-b-popover.tooltip title="Remove" aria-label="Remove">
          <i class="ai-trash"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { OrderType } from '@/views/pages/Shop/Checkout/data'
import { currency } from '@/helpers/constants'

import { ref } from 'vue'

const count = ref<number>(0)

const decrementCount = () => {
  if (count.value > 0) {
    count.value--
  }
}

defineProps({
  order: {
    type: Object as PropType<OrderType>,
    required: true
  }
})
</script>

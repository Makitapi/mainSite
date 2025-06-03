<template>
  <router-link :to="{ name: product.link?.name, params: product.link?.params }" class="d-block pb-3 mb-2 mb-lg-3">
    <img :src="product.images[0]" alt="Collection" />
  </router-link>
  <div class="d-flex mb-1">
    <h3 class="h6 mb-0">
      <router-link :to="{ name: product.link?.name, params: product.link?.params }">
        {{ product.name }}
      </router-link>
    </h3>
  </div>
  <div class="d-flex align-items-center">
    <span class="me-2">{{ currency }}{{ product.price }}</span>
    <div class="nav ms-auto" v-b-tooltip.hover.left="`Add to cart`">
      <button class="nav-link fs-lg py-2 px-1" @click="useShopping.updateQuantity(product, 1)">
        <i class="ai-cart"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ProductType } from '@/types/shop'

import { currency } from '@/helpers/constants'
import { useShoppingStore } from '@/stores/shopping-context'

defineProps({
  product: {
    type: Object as PropType<ProductType>,
    required: true
  }
})

const useShopping = useShoppingStore()
</script>

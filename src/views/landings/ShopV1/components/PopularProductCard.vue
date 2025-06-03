<template>
  <router-link :to="{ name: product.link?.name, params: product.link?.params }" class="card h-100 border-0 rounded-1 text-decoration-none px-xxl-1">
    <b-card-body class="p-4 px-sm-3 px-md-4">
      <div class="d-flex align-items-center">
        <img :src="product.images[0]" width="97" alt="Product" />
        <div class="ps-3 ps-md-4">
          <h3 class="fs-sm mb-2">{{ product.name }}</h3>
          <p v-if="product.sale" class="fs-sm mb-0">
            {{ currency }}
            {{ discountedPrice(product.price, product.sale.discount, product.sale.type) }}
            <del class="text-body-secondary fs-xs">{{ currency }}{{ product.price }}</del>
          </p>
          <p v-else class="fs-sm mb-0">{{ currency }}{{ product.price }}</p>
        </div>
      </div>
    </b-card-body>
  </router-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ProductType } from '@/types/shop'
import { currency } from '@/helpers/constants'
import { discountedPrice } from '@/helpers/product'

defineProps({
  product: {
    type: Object as PropType<ProductType>,
    required: true
  }
})
</script>

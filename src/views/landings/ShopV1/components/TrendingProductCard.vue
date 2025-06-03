<template>
  <div class="card-hover position-relative bg-secondary rounded-1 p-3 mb-4">
    <span class="badge bg-opacity-10 position-absolute top-0 start-0 mt-3 ms-3" :class="product.tag === 'sale' ? 'bg-danger text-danger' : 'bg-primary text-primary'" v-if="product.tag">{{ toSentenceCase(product.tag) }}</span>

    <button class="btn btn-icon btn-sm btn-light bg-light border-0 rounded-circle position-absolute top-0 end-0 mt-3 me-3 z-5 opacity-0" type="button" @click="useShopping.toggleToWishlist(product)">
      <i v-if="useShopping.isInWishlist(product)" class="ai-heart-filled fs-xl text-danger"></i>
      <i v-else class="ai-heart fs-xl text-nav"></i>
    </button>

    <router-link :to="{ name: product.link?.name, params: product.link?.params }" class="d-block p-2 p-xl-4">
      <img class="d-block mx-auto" :src="product.images[0]" width="226" alt="Product" />
    </router-link>
  </div>
  <div class="d-flex mb-1">
    <h3 class="h6 mb-0">
      <router-link :to="{ name: product.link?.name, params: product.link?.params }">{{ product.name }}</router-link>
    </h3>

    <div v-if="product.attributes?.colors" class="d-flex ps-2 mt-n1 ms-auto">
      <div v-for="(color, idx) in product.attributes?.colors" :key="idx" class="ms-1">
        <input class="btn-check" type="radio" :name="product.id" :value="color.name" :id="color.code + product.id" />
        <label class="btn btn-icon btn-xs btn-outline-secondary rounded-circle" :for="color.code + product.id">
          <span class="d-block rounded-circle" :style="{ width: '.625rem', height: '.625rem', backgroundColor: color.code }"> </span>
        </label>
      </div>
    </div>
  </div>
  <div class="d-flex align-items-center">
    <template v-if="product.sale">
      <span class="me-2">{{ currency }}{{ discountedPrice(product.price, product.sale.discount, product.sale.type) }}</span>
      <del class="fs-sm text-body-secondary">{{ currency }}{{ product.price }}</del>
    </template>

    <span v-else class="me-2">{{ currency }}{{ product.price }}</span>

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
import { toSentenceCase } from '@/helpers/change-casing'
import { discountedPrice } from '@/helpers/product'
import { useShoppingStore } from '@/stores/shopping-context'

defineProps({
  product: {
    type: Object as PropType<ProductType>,
    required: true
  }
})

const useShopping = useShoppingStore()
</script>

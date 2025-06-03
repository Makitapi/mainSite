<template>
  <div class="d-sm-flex align-items-center border-top py-4">
    <router-link class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-sm-2 p-md-3 mb-2 mb-sm-0" :to="{ name: item.product?.link?.name, params: item.product?.link?.params }">
      <img :src="item.product?.images[0]" width="110" height="110" alt="Product" />
    </router-link>
    <div class="w-100 pt-1 ps-sm-4">
      <div class="d-flex">
        <div class="me-3">
          <h3 class="h5 mb-2">
            <router-link :to="{ name: item.product?.link?.name, params: item.product?.link?.params }">{{ item.product.name }} </router-link>
          </h3>
          <div v-if="item.product?.attributes" class="d-flex flex-wrap">
            <div v-if="item.product?.attributes.colors" class="text-body-secondary fs-sm me-3">
              Color: <span class="text-dark fw-medium">{{ item.product.attributes.colors[0].name }}</span>
            </div>
            <div v-if="item.product?.attributes.weights" class="text-body-secondary fs-sm me-3">
              Weight: <span class="text-dark fw-medium">{{ item.product.attributes.weights[0] }}</span>
            </div>
          </div>
        </div>
        <div v-if="item.product?.sale" class="text-end ms-auto">
          <div class="fs-5 mb-2">{{ currency }}{{ discountedPrice(item.product.price, item.product.sale.discount, item.product.sale.type) }}</div>
          <del class="text-body-secondary ms-auto">{{ currency }}{{ item.product.price }}</del>
        </div>

        <div v-else class="text-end ms-auto">
          <div class="fs-5 mb-2">{{ currency }}{{ item.product.price }}</div>
        </div>
      </div>
      <div class="count-input ms-n3">
        <button class="btn btn-icon fs-xl" type="button" @click="useShopping.updateQuantity(item.product, item.quantity - 1)">-</button>
        <input :value="item.quantity" class="form-control" type="number" readonly />
        <button class="btn btn-icon fs-xl" type="button" @click="useShopping.updateQuantity(item.product, item.quantity + 1)">+</button>
      </div>
      <div class="nav justify-content-end mt-n5 mt-sm-n3">
        <button class="nav-link fs-xl p-2" v-b-tooltip="'Remove'" @click="useShopping.updateQuantity(item.product, 0)">
          <i class="ai-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { CartType } from '@/types/shop'
import { currency } from '@/helpers/constants'
import { discountedPrice } from '@/helpers/product'
import { useShoppingStore } from '@/stores/shopping-context'

defineProps({
  item: {
    type: Object as PropType<CartType>,
    required: true
  }
})

const useShopping = useShoppingStore()
</script>

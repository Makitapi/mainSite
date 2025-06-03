<template>
  <b-col lg="5" offset-lg="1" class="pt-1">
    <h2 class="pb-2 pt-md-2 my-4 mt-lg-5">
      Order summary <span class="fs-base fw-normal text-body-secondary">({{ useShopping.state.cartItems.length }} items)</span>
    </h2>
    <CartItem v-for="(item, idx) in useShopping.state.cartItems" :key="idx" :item="item" />
    <div class="border-top pt-4 mb-3">
      <b-input-group size="sm" class="border-dashed" style="max-width: 310px">
        <b-form-input class="text-uppercase" placeholder="Your coupon code"></b-form-input>
        <b-button variant="secondary">Apply coupon</b-button>
      </b-input-group>
    </div>
    <ul class="list-unstyled py-3 mb-0">
      <li class="d-flex justify-content-between mb-2">
        Subtotal:<span class="fw-semibold ms-2">{{ currency }}{{ Math.ceil(useShopping.getCalculatedOrder().orderTotal) }}</span>
      </li>
      <li class="d-flex justify-content-between mb-2">
        Taxes:<span class="fw-semibold ms-2">{{ currency }}8.00</span>
      </li>
      <li class="d-flex justify-content-between mb-2">
        Shipping cost:<span class="fw-semibold ms-2">{{ currency }}15.00</span>
      </li>
    </ul>
    <div class="d-flex align-items-center justify-content-between border-top fs-xl pt-4">
      Total:<span class="fs-3 fw-semibold text-dark ms-2">{{ currency }}{{ Math.ceil(useShopping.getCalculatedOrder().orderTotal) }}</span>
    </div>
  </b-col>
</template>

<script setup lang="ts">
import { currency } from '@/helpers/constants'

import CartItem from '@/views/pages/Shop/Checkout/components/CartItem.vue'
import { useShoppingStore } from '@/stores/shopping-context'

const useShopping = useShoppingStore()
</script>

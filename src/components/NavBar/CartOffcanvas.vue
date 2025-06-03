<template>
  <b-offcanvas placement="end" class="py-2 p-sm-4 p-md-5" id="cartOffcanvas" style="width: 680px" body-class="p-0 m-0" header-class="border-bottom">
    <template #title>
      <h2 v-if="isCartEmpty" class="offcanvas-title d-flex align-items-center mb-1">
        <svg class="text-body-secondary fs-1 me-3" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path
            d="m20 17.25h-11.57l-.19-1.58 12.11-.95c.82-.07 1.49-.7 1.6-1.52l.14-1.1c.05-.41-.24-.79-.65-.84-.42-.05-.79.24-.84.65l-.14 1.1c-.01.12-.11.21-.23.21l-12.17.96-.87-7.42h4.8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.98l-.11-.96c-.13-1.13-.96-2.07-2.06-2.35l-2.66-.67c-.4-.1-.81.14-.91.55-.1.4.14.81.55.91l2.66.67c.5.12.88.55.94 1.07l1.53 13c-.99.41-1.7 1.4-1.7 2.54 0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75c0-.45-.12-.87-.31-1.25h7.13c-.19.38-.31.8-.31 1.25 0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75zm-10.75 2.75c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25zm10.75 1.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm-4.03-13.28 1.97-1.97-1.97-1.97c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l1.97 1.97 1.97-1.97c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.97 1.97 1.97 1.97c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.97-1.97-1.97 1.97c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06z"
          />
        </svg>
        Your cart is empty
      </h2>

      <h2 v-else class="offcanvas-title d-flex align-items-center mb-1">
        Your cart <span class="fs-base fw-normal text-body-secondary ms-3">({{ useShopping.state.cartItems.length }} items)</span>
      </h2>
    </template>

    <div v-if="isCartEmpty" class="offcanvas-body">
      <p class="mb-4">Is your shopping cart feeling a little lonely? Don't let it sit there empty and forgotten. It's time to fill it up with your favorite macarons!</p>
      <a class="btn btn-dark rounded-pill" href="#cartOffcanvas" data-bs-dismiss="offcanvas">Start shopping</a>
    </div>

    <div v-else class="offcanvas-body">
      <CartItem v-for="(item, idx) in useShopping.state.cartItems" :key="idx" :item="item" :idx="idx" />
    </div>

    <template #footer>
      <div v-if="!isCartEmpty" class="px-4 pb-3 pb-sm-4 pb-sm-5">
        <div class="d-sm-flex align-items-center border-top pt-4">
          <div class="input-group input-group-sm border-dashed mb-3 mb-sm-0 me-sm-4 me-md-5">
            <input class="form-control text-uppercase" type="text" placeholder="Your coupon code" />
            <button class="btn btn-secondary" type="button">Apply coupon</button>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <span class="fs-xl me-3">Total:</span>
            <span class="h3 mb-0">{{ currency }}{{ Math.ceil(useShopping.getCalculatedOrder().orderTotal) }}</span>
          </div>
        </div>
      </div>

      <div v-if="!isCartEmpty" class="d-flex align-items-center justify-content-between px-4 pb-3">
        <div class="nav d-none d-sm-block">
          <a class="nav-link fw-semibold px-0" role="button" v-b-toggle.cartOffcanvas>
            <i class="ai-chevron-left fs-xl me-2"></i>
            Back to shop
          </a>
        </div>
        <router-link class="btn btn-lg btn-primary w-100 w-sm-auto" :to="{ name: 'shop.checkout' }">
          Proceed to checkout
          <i class="ai-chevron-right ms-2 me-n1"></i>
        </router-link>
      </div>
    </template>
  </b-offcanvas>
</template>

<script setup lang="ts">
import CartItem from '@/components/widgets/CartItem.vue'
import { useShoppingStore } from '@/stores/shopping-context'
import { currency } from '@/helpers/constants'
import { computed } from 'vue'

const useShopping = useShoppingStore()

const isCartEmpty = computed(() => {
  return useShopping.state.cartItems.length === 0
})
</script>

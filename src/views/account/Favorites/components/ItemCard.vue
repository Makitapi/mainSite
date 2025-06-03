<template>
  <div class="card-hover position-relative bg-secondary rounded-1 p-3 mb-4">
    <span v-if="item.tag" :class="item.tag === 'sale' ? 'bg-danger text-danger' : 'text-primary bg-primary'" class="badge bg-opacity-10 position-absolute top-0 start-0 mt-3 ms-3">{{ toSentenceCase(item.tag) }}</span>
    <span v-if="!item.stock" class="bg-gray text-nav badge bg-opacity-10 position-absolute top-0 start-0 mt-3 ms-3">Out of stock</span>
    <button class="btn btn-icon btn-sm btn-light bg-light border-0 rounded-circle position-absolute top-0 end-0 mt-3 me-3 z-5 opacity-0" type="button" @click="removeFromFavorite(item.id)">
      <i class="ai-trash fs-xl text-danger"></i>
    </button>
    <Swiper
      class="swiper-nav-onhover"
      :modules="[Navigation]"
      loop
      :navigation="{
        prevEl: '.btn-prev',
        nextEl: '.btn-next'
      }"
    >
      <SwiperSlide class="p-2 p-xl-4" v-for="(image, idx) in item.images" :key="idx">
        <router-link v-if="item.link" :to="item.link">
          <img class="d-block mx-auto" :src="image" width="226" alt="Product" />
        </router-link>
      </SwiperSlide>
      <button class="btn btn-prev btn-icon btn-sm btn-light bg-light border-0 rounded-circle start-0" type="button" aria-label="Prev">
        <i class="ai-chevron-left fs-xl text-nav"></i>
      </button>
      <button class="btn btn-next btn-icon btn-sm btn-light bg-light border-0 rounded-circle end-0" type="button" aria-label="Next">
        <i class="ai-chevron-right fs-xl text-nav"></i>
      </button>
    </Swiper>
  </div>
  <div class="d-flex mb-1">
    <h3 class="h6 mb-0">
      <router-link v-if="item.link" :to="item.link">{{ item.name }}</router-link>
    </h3>
    <div v-if="item.attributes" class="d-flex ps-2 mt-n1 ms-auto">
      <div class="ms-1" v-for="(color, idx) in item.attributes.colors" :key="idx">
        <input class="btn-check" type="radio" :name="`color${item.id}`" :value="color.name" checked :id="`color${item.id}-${idx}`" />
        <label class="btn btn-icon btn-xs btn-outline-secondary rounded-circle" :for="`color${item.id}-${idx}`">
          <span class="d-block rounded-circle" :style="`background-color: ${color.code};`" style="width: 0.625rem; height: 0.625rem"></span>
        </label>
      </div>
    </div>
  </div>
  <div class="d-flex align-items-center">
    <template v-if="item.sale">
      <span class="me-2">{{ currency }}{{ discountedPrice(item.price, item.sale.discount, item.sale.type) }}</span>
      <del class="fs-sm text-body-secondary">{{ currency }}{{ item.price }}</del>
    </template>
    <span v-else class="me-2">{{ currency }}{{ item.price }}</span>
    <div class="nav ms-auto" v-b-tooltip.hover.left="`Add to cart`">
      <button class="nav-link fs-lg py-2 px-1" aria-label="Add to Cart" @click="useShopping.updateQuantity(item, 1)">
        <i class="ai-cart"></i>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type PropType } from 'vue'
import type { ProductType } from '@/types/shop'
import { currency } from '@/helpers/constants'
import { toSentenceCase } from '@/helpers/change-casing'
import { discountedPrice } from '@/helpers/product'
import { useShoppingStore } from '@/stores/shopping-context'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps({
  item: {
    type: Object as PropType<ProductType>,
    required: true
  }
})

const useShopping = useShoppingStore()

const emit = defineEmits(['removeItem'])

const removeFromFavorite = (productId: string) => {
  emit('removeItem', productId)
}
</script>

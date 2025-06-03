<template>
  <b-modal id="searchModal" hide-footer header-class="d-block position-relative border-0 pb-3" body-class="pt-3">
    <template #header>
      <b-form class="position-relative w-100 mt-2 mb-4">
        <button class="btn-close position-absolute top-50 end-0 translate-middle-y m-0 me-n1" type="reset" @click="modal = !modal" data-bs-dismiss="modal" aria-label="Close"></button>
        <i class="ai-search fs-xl position-absolute top-50 start-0 translate-middle-y ms-3"></i>
        <b-form-input size="lg" class="px-5" type="search" placeholder="Type to search" data-focus-on-open='["modal", "#searchModal"]' />
      </b-form>
      <div class="fs-xs fw-medium text-body-secondary text-uppercase">Suggestions</div>
    </template>

    <div v-for="(item, idx) in suggestions" :key="idx" class="d-flex align-items-center" :class="{ 'border-bottom pb-4 mb-4': idx != suggestions.length - 1 }">
      <template v-if="item.tag === 'shop'">
        <router-link :to="{ name: item.link?.name }" class="position-relative d-inline-block flex-shrink-0 bg-secondary rounded-1">
          <span class="badge bg-success position-absolute top-0 start-100 translate-middle ms-n1">{{ toSentenceCase(item.tag) }}</span>
          <img :src="item.image" :width="90" alt="Product" />
        </router-link>
        <div class="ps-3">
          <h4 class="h6 mb-2">
            <router-link :to="{ name: item.link?.name }">Candle in concrete bowl</router-link>
          </h4>

          <template v-if="item.discount && item.price">
            <span class="mb-0 me-2">{{ currency }}{{ discountedPrice(item.price, item.discount) }}</span>
            <del class="fs-sm text-body-secondary ms-auto">{{ currency }}{{ item.price }}</del>
          </template>

          <span v-else class="mb-0 me-2">{{ currency }}{{ item.price }}</span>
        </div>
      </template>

      <template v-if="item.tag === 'blog'">
        <a class="position-relative d-inline-block flex-shrink-0" href="#">
          <span class="badge bg-info position-absolute top-0 start-100 translate-middle ms-n1">{{ toSentenceCase(item.tag) }}</span>
          <img class="rounded-1" :src="item.image" :width="90" alt="Post" />
        </a>
        <div class="ps-3">
          <h4 class="h6 mb-0">
            <a href="#">{{ item.name }}</a>
          </h4>
        </div>
      </template>
    </div>
  </b-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toSentenceCase } from '@/helpers/change-casing'
import { currency } from '@/helpers/constants'
import { discountedPrice } from '@/helpers/product'
import type { LinkType } from '@/types'

import cart1 from '@/assets/img/shop/cart/01.png'
import cart2 from '@/assets/img/shop/cart/02.png'
import instagram2 from '@/assets/img/landing/shop-1/instagram/02.jpg'
const modal = ref(false)

type SuggestionType = {
  tag: string
  image: string
  name: string
  price?: number
  discount?: number
  link?: LinkType
}

const suggestions: SuggestionType[] = [
  {
    tag: 'shop',
    image: cart1,
    name: 'Candle in concrete bowl',
    price: 15,
    discount: 20,
    link: { name: '' }
  },
  {
    tag: 'blog',
    image: instagram2,
    name: 'Bedroom decoration explained. Tips & tricks from the field experts.',
    link: { name: '' }
  },
  {
    tag: 'shop',
    image: cart2,
    name: 'Exquisite glass vase',
    price: 23,
    link: { name: '' }
  }
]
</script>

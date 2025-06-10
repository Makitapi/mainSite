<template>
  <b-row class="align-items-center gy-2 mb-4 pb-1 pb-sm-2 pb-lg-3">
    <b-col lg="5">
      <h1 class="mb-lg-0">Blog list</h1>
    </b-col>
    <b-col xl="2" offset-xl="1" lg="3" sm="5">
      <b-form-select :options="option" v-model="selected"> </b-form-select>
    </b-col>
    <b-col lg="4" sm="7">
      <div class="position-relative">
        <i class="ai-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
        <b-form-input class="ps-5" type="search" placeholder="Enter keyword" />
      </div>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref(null)
const option = [
  { value: null, text: 'All categories' },
  { value: 'Inspiration', text: 'Inspiration' },
  { value: 'Brand strategy', text: 'Brand strategy' },
  { value: 'Advertisement', text: 'Advertisement' },
  { value: 'Ecommerce', text: 'Ecommerce' },
  { value: 'Travel &amp; Vacation', text: 'Travel &amp; Vacation' }
]
</script>

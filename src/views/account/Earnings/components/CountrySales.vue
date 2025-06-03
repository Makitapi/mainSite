<template>
  <b-col md="4">
    <div class="h-100 border rounded-3 p-4">
      <h2 class="h6 text-center text-sm-start mb-4">Your top countries</h2>
      <div class="d-flex justify-content-between text-body-secondary fs-sm">
        <span>Country</span>
        <span>Value</span>
      </div>
      <div class="mt-3" v-for="(item, idx) in countries" :key="idx">
        <div class="d-flex align-items-center fs-sm text-dark pb-1 mb-2">
          <img :src="item.image" width="16" alt="USA" />
          <span class="ms-2">{{ item.name }} </span>
          <span class="ms-auto">{{ currency }}{{ item.value }}</span>
        </div>
        <b-progress style="height: 3px" :value="item.progress" />
      </div>
    </div>
  </b-col>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers/constants'
import { countries } from '@/views/account/Earnings/data'
</script>

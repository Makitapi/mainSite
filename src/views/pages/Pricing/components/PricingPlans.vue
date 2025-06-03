<template>
  <b-container class="py-5 mt-5 mb-lg-3 mb-xl-4 mb-xxl-5">
    <div class="text-center pb-3 pt-lg-2 pt-xl-4 my-1 my-sm-3 my-lg-4">
      <h1 class="display-2">Pricing plans</h1>
      <p class="fs-lg mb-0">Select a service plan that best suits your business needs</p>
    </div>

    <b-row class="row-cols-3 flex-nowrap pb-4 overflow-auto">
      <b-col style="min-width: 19rem" v-for="(plan, idx) in pricingPlans" :key="idx">
        <b-card no-body class="h-100 py-lg-4" :class="plan.title === 'Premium' && 'border-primary bg-primary'">
          <b-card-body class="w-100 mx-auto text-center" style="max-width: 23rem">
            <h3 :class="plan.title === 'Premium' && 'text-light'">{{ plan.title }}</h3>
            <div class="display-2" :class="plan.title === 'Premium' ? 'text-light' : 'text-primary'">{{ currency }}{{ plan.price }}</div>
            <div class="mb-4" :class="plan.title === 'Premium' && 'text-light opacity-70'">per month</div>
            <p class="mb-4 pb-4" :class="plan.title === 'Premium' && 'text-light opacity-70'">{{ plan.description }}</p>
            <button class="btn w-100" :class="plan.title === 'Premium' ? 'btn-light' : 'btn-primary'" type="button">Get this plan now</button>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <CompareTable />
  </b-container>
</template>

<script lang="ts" setup>
import { pricingPlans } from '@/views/pages/Pricing/data'
import { currency } from '@/helpers/constants'
import CompareTable from '@/views/pages/Pricing/components/CompareTable.vue'
</script>

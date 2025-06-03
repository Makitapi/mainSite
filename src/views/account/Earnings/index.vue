<template>
  <AccountLayout>
    <b-col lg="9" class="pt-4 pb-2 pb-sm-4">
      <div class="d-sm-flex align-items-center mb-4">
        <h1 class="h2 mb-4 mb-sm-0 me-4">Your earnings</h1>
        <div class="d-flex ms-auto">
          <b-button class="btn btn-secondary me-3 me-sm-4" type="button">
            <i class="ai-download me-2 ms-n1"></i>
            Download
          </b-button>
          <b-form-select class="form-select" required :options="options" v-model="selected"></b-form-select>
        </div>
      </div>
      <b-card no-body class="border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
        <b-card-body>
          <Stats />
          <b-row class="g-4 py-4">
            <SalesValue />
            <CountrySales />
            <Purchases />
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
  </AccountLayout>
</template>

<script lang="ts" setup>
import AccountLayout from '@/layouts/AccountLayout.vue'
import Stats from '@/views/account/Earnings/components/Stats.vue'
import CountrySales from '@/views/account/Earnings/components/CountrySales.vue'
import SalesValue from '@/views/account/Earnings/components/SalesValue.vue'
import { ref } from 'vue'
import Purchases from '@/views/account/Earnings/components/Purchases.vue'

const selected = ref('Last week')
const options = [
  { value: 'Last week', text: 'Last week' },
  { value: 'Last month', text: 'Last month' },
  { value: 'Last 3 months', text: 'Last 3 months' },
  { value: 'Last 6 months', text: 'Last 6 months' },
  { value: 'Last year', text: 'Last year' }
]
</script>

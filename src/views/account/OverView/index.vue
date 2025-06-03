<template>
  <AccountLayout>
    <b-col lg="9" class="pt-4 pb-2 pb-sm-4">
      <h1 class="h2 mb-4">Overview</h1>
      <BasicInfo />
      <b-row class="row-cols-1 row-cols-md-2 g-4 mb-4">
        <AddressInfo />
        <BillingInfo />
      </b-row>
      <Orders />
    </b-col>
  </AccountLayout>
</template>

<script lang="ts" setup>
import AccountLayout from '@/layouts/AccountLayout.vue'
import BasicInfo from '@/views/account/OverView/components/BasicInfo.vue'
import AddressInfo from '@/views/account/OverView/components/AddressInfo.vue'
import BillingInfo from '@/views/account/OverView/components/BillingInfo.vue'
import Orders from '@/views/account/OverView/components/Orders.vue'
</script>

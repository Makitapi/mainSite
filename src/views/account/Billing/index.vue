<template>
  <AccountLayout>
    <b-col lg="9" class="pt-4 pb-2 pb-sm-4">
      <h1 class="h2 mb-4">Billing</h1>
      <PaymentMethods />
      <BillingAddress />
    </b-col>
  </AccountLayout>
</template>

<script lang="ts" setup>
import AccountLayout from '@/layouts/AccountLayout.vue'
import PaymentMethods from '@/views/account/Billing/components/PaymentMethods.vue'
import BillingAddress from '@/views/account/Billing/components/BillingAddress.vue'
</script>

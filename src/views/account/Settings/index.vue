<template>
  <AccountLayout>
    <b-col lg="9" class="pt-4 pb-2 pb-sm-4">
      <h1 class="h2 mb-4">Settings</h1>
      <BasicInfo />

      <PasswordChange />

      <Notifications />

      <DeleteAccount />
    </b-col>
  </AccountLayout>
</template>

<script lang="ts" setup>
import AccountLayout from '@/layouts/AccountLayout.vue'
import BasicInfo from '@/views/account/Settings/components/BasicInfo.vue'
import PasswordChange from '@/views/account/Settings/components/PasswordChange.vue'
import Notifications from '@/views/account/Settings/components/Notifications.vue'
import DeleteAccount from '@/views/account/Settings/components/DeleteAccount.vue'
</script>

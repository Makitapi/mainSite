<template>
  <div class="pb-2 pb-lg-0 mb-4 mb-lg-5">
    <img class="d-block rounded-circle mb-2" :src="avatar2" width="80" alt="Isabella Bocouse" />
    <h3 class="h5 mb-1">Isabella Bocouse</h3>
    <p class="fs-sm text-body-secondary mb-0">bocouse@example.com</p>
  </div>
  <nav class="nav flex-column" :class="accountMenu.length - 1 != idx && 'pb-2 pb-lg-4 mb-3'" v-for="(account, idx) in accountMenu" :key="idx">
    <h4 v-if="account.title" class="fs-xs fw-medium text-body-secondary text-uppercase pb-1 mb-2">
      {{ account.title }}
    </h4>
    <router-link v-for="(item, idx) in account.menuItems" :key="idx" :class="currentPath === item.link.name && 'active'" class="nav-link fw-semibold py-2 px-0" :to="{ name: item.link.name }">
      <i :class="item.icon" class="fs-5 opacity-60 me-2" />
      {{ item.name }}
      <span v-if="item.badge" class="badge bg-danger ms-auto">{{ item.badge }}</span>
    </router-link>
  </nav>
  <nav class="nav flex-column">
    <router-link class="nav-link fw-semibold py-2 px-0 mt-4" to="#" @click="logout">
      <i class="ai-logout fs-5 opacity-60 me-2"></i>
      Sign out
    </router-link>
  </nav>
</template>

<script lang="ts" setup>
import router from '@/router'
import { accountMenu } from '@/layouts/data'
import { useAuthStore } from '@/stores/auth'

import avatar2 from '@/assets/img/avatar/02.jpg'

const currentPath = router.currentRoute.value.name

const useAuth = useAuthStore()

const logout = () => {
  useAuth.removeSession()
}
</script>

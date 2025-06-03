<template>
  <header :data-bs-theme="useTheme.theme.mode === 'dark' ? 'dark' : theme">
    <div class="navbar navbar-expand-lg fixed-top" :class="customClass">
      <b-container>
        <LogoBox />

        <ThemeSwitcher />

        <b-nav-item-dropdown class="d-none d-md-block order-lg-3" no-caret menu-class="dropdown-menu-end my-1">
          <template v-slot:button-content>
            <a class="nav-link d-flex align-items-center p-0" href="#">
              <img class="border rounded-circle" :src="avatar1" width="48" alt="Isabella Bocouse" />
              <div class="ps-2">
                <div class="fs-xs lh-1 opacity-60 d-flex align-items-start">Hello,</div>
                <div class="fs-sm dropdown-toggle">Isabella</div>
              </div>
            </a>
          </template>

          <template v-for="(account, idx) in accountMenu" :key="idx">
            <b-dropdown-header v-if="account.title" class="fs-xs fw-medium text-body-secondary text-uppercase pb-1">
              {{ account.title }}
            </b-dropdown-header>

            <router-link v-for="(item, idx) in account.menuItems" :key="idx" :class="currentPath === item.link.name && 'active'" class="dropdown-item d-flex" :to="item.link">
              <div>
                <i :class="item.icon" class="fs-lg opacity-70 me-2" />
                {{ item.name }}
              </div>
              <span v-if="item.badge" class="badge bg-danger ms-auto">{{ item.badge }}</span>
            </router-link>

            <b-dropdown-divider v-if="account.title" />
          </template>
          <router-link class="dropdown-item" to="#" @click="logout">
            <i class="ai-logout fs-lg opacity-70 me-2"></i>
            Sign out
          </router-link>
        </b-nav-item-dropdown>

        <button class="navbar-toggler ms-sm-3" v-b-toggle="'navbar'">
          <span class="navbar-toggler-icon"></span>
        </button>

        <AppMenu />
      </b-container>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue'

import AppMenu from '@/components/AppMenu.vue'
import LogoBox from '@/components/NavBar/LogoBox.vue'
import ThemeSwitcher from '@/components/NavBar/ThemeSwitcher.vue'
import { accountMenu } from '@/layouts/data'
import router from '@/router'

const currentPath = router.currentRoute.value.name
import { useThemeStore } from '@/stores/theme'
import { useAuthStore } from '@/stores/auth'

import avatar1 from '@/assets/img/avatar/01.jpg'

defineProps({
  theme: {
    type: String as PropType<'light' | 'dark'>
  },
  customClass: String,
  buttonClass: String
})

const useTheme = useThemeStore()

const useAuth = useAuthStore()

const logout = () => {
  useAuth.removeSession()
}
</script>

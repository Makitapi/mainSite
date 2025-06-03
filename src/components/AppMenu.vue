<template>
  <b-collapse tag="nav" class="navbar-collapse" id="navbar">
    <ul class="navbar-nav navbar-nav-scroll me-auto" style="--ar-scroll-height: 520px">
      <template v-for="item in navbarData" :key="item.key">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" @click="() => activation(item.label)" :class="{ active: isActiveMenuItem(activeMenuItems, item.key) }">
            {{ item.label }}
          </a>

          <MenuItems v-if="item.children && item.children[0].image" :item="item" :visible="visible" />

          <MenuItemWithChildren v-else :item="item" :visible="visible" :subVisible="subVisible" :activeMenuItems="activeMenuItems" :childActivation="childActivation" />
        </li>
      </template>
    </ul>
  </b-collapse>
</template>
<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'
import router from '@/router'

const visible = ref<string>('')
const subVisible = ref<string>('')
const activeMenuItems = ref() as Ref<object>

import { MENU_ITEMS as navbarData } from '@/assets/menu-items'

onMounted(() => {
  window.onscroll = function () {
    navbarStuck()
  }
  menuActivation(navbarData, activeMenuItems, currentRouteName)
})

const activation = (ele: string) => toggleVisibility(ele, visible)
const childActivation = (ele: string) => toggleVisibility(ele, subVisible)

import { isActiveMenuItem, navbarStuck, toggleVisibility, menuActivation } from '@/helpers/app-menu'
import MenuItems from './MenuItem.vue'
import MenuItemWithChildren from './MenuItemWithChildren.vue'

const currentRouteName = router.currentRoute.value.name
</script>

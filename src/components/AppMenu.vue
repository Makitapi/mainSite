<template>
  <b-collapse tag="nav" class="navbar-collapse" id="navbar">
    <ul class="navbar-nav navbar-nav-scroll ms-auto" style="--ar-scroll-height: 520px">
      <nav class="nav justify-content-center justify-content-md-start pb-sm-2 pb-md-0 mb-4 mb-md-0 ms-md-n3">
        <router-link class="nav-link py-1 px-0 mx-3" to="/use-cases">Use-cases </router-link>
        <router-link class="nav-link py-1 px-0 mx-3" to="/blog">Blog</router-link>
        <router-link class="nav-link py-1 px-0 mx-3" to="/projects">Projects</router-link>
        <router-link class="nav-link py-1 px-0 mx-3" to="/contact">Contact</router-link>
      </nav>
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

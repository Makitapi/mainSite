<template>
  <ul class="dropdown-menu" :class="props.visible === props.item.label && 'show'">
    <template v-for="(child, idx) in props.item.children" :key="idx">
      <li v-if="child.children" class="dropdown">
        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" @click="() => props.childActivation(child.label)" :class="{ show: isActiveMenuItem(props.activeMenuItems, child.key) }">
          {{ child.label }}
        </a>
        <ul class="dropdown-menu" :class="props.subVisible === child.label && 'show'">
          <li v-for="item in child.children" :key="item.label">
            <router-link class="dropdown-item" :to="{ name: item.link?.name, params: item.link?.params }" :class="{ active: item.link?.name === currentRouteName }">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </li>

      <li v-else>
        <router-link class="dropdown-item" :to="{ name: child.link?.name, params: child.link?.params }" :class="{ active: child.link?.name === currentRouteName }">
          {{ child.label }}
        </router-link>
      </li>
    </template>
  </ul>
</template>
<script setup lang="ts">
import router from '@/router'
import { isActiveMenuItem } from '@/helpers/app-menu'
const currentRouteName = router.currentRoute.value.name
const props = defineProps(['childActivation', 'item', 'visible', 'subVisible', 'activeMenuItems'])
</script>

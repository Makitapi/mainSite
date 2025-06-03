<template>
  <div class="dropdown-menu overflow-hidden p-0" :class="props.visible === props.item.label && 'show'">
    <div class="d-lg-flex">
      <div v-for="(chunk, index) in makeChunks(props.item.children)" :key="index" class="mega-dropdown-column pt-1 pt-lg-3 pb-lg-4">
        <ul class="list-unstyled mb-0">
          <li v-for="(child, idx) in chunk" :key="idx">
            <router-link class="dropdown-item" :to="{ name: child.link?.name, params: child.link?.params }" :class="{ active: child.link?.name === currentRouteName }">
              {{ child.label }}
              <span v-if="child.isNew" class="text-danger fs-xs ms-2">New</span>
            </router-link>
            <span class="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0" :class="!child.id ? 'rounded-3 rounded-start-0' : 'z-2 opacity-0'" :style="{ backgroundImage: `url(${child.image})` }"></span>
          </li>
        </ul>
      </div>
      <div class="mega-dropdown-column position-relative border-start z-3"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import router from '@/router'
import { makeChunks } from '@/helpers/app-menu'
const currentRouteName = router.currentRoute.value.name
const props = defineProps(['item', 'visible'])
</script>

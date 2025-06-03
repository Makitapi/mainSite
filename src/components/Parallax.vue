<template>
  <component :is="is ?? 'div'" :id="id" :class="customClass" :style="customStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Parallax from 'parallax-js'

type CustomParallaxPropType = {
  id: string
  is?: string
  customClass?: string
  customStyle?: object
}

const props = defineProps<CustomParallaxPropType>()

onMounted(() => {
  const element = document.getElementById(props.id)
  if (element) new Parallax(element)
})
</script>

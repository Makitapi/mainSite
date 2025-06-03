<template>
  <RouterLink @click="scrollToTop" class="btn-scroll-top" :class="isButtonVisible && 'show'" ref="backToTopButton" to="" aria-label="Scroll back to top">
    <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle ref="circleElement" cx="20" cy="20" r="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></circle>
    </svg>
    <i class="ai-arrow-up"></i>
  </RouterLink>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const isButtonVisible = ref(false)
const backToTopButton = ref(null)
const circleElement = ref<SVGGeometryElement | null>(null)
const length = ref<number>(0)

const scrollOffset = '450'
const offsetFromTop = parseInt(scrollOffset.toString(), 10)

onMounted(() => {
  if (backToTopButton.value && circleElement.value) {
    length.value = circleElement.value.getTotalLength()
    circleElement.value.style.strokeDasharray = length.value.toString()
    circleElement.value.style.strokeDashoffset = length.value.toString()
    showProgress()
  }

  window.addEventListener('scroll', () => {
    showProgress()
    if (window.scrollY > offsetFromTop) isButtonVisible.value = true
    else isButtonVisible.value = false
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => (isButtonVisible.value = false))
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const showProgress = () => {
  const scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  const draw = length.value * scrollPercent
  if (circleElement.value) {
    circleElement.value.style.strokeDashoffset = (length.value - draw).toString()
  }
}
</script>

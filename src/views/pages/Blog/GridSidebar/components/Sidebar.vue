<template>
  <aside class="col-lg-3 offset-xl-1">
    <div class="d-none d-lg-block">
      <GridSidebar />
    </div>
    <b-offcanvas v-model="showOffcanvas" class="offcanvas-lg" placement="end" id="sidebarBlog">
      <template #header>
        <h4 class="offcanvas-title">Sidebar</h4>
        <button @click="toggleOffcanvas" class="btn-close ms-auto" type="button"></button>
      </template>

      <GridSidebar />
    </b-offcanvas>
  </aside>
  <button @click="toggleOffcanvas" class="d-lg-none btn btn-sm fs-sm btn-primary w-100 rounded-0 fixed-bottom" type="button">
    <i class="ai-layout-column me-2"></i>
    Sidebar
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GridSidebar from '@/views/pages/Blog/GridSidebar/components/GridSidebar.vue'

const showOffcanvas = ref(false)

onMounted(() => {
  window.addEventListener('resize', () => {
    const windowSize = document.documentElement.clientWidth
    if (windowSize > 991) {
      showOffcanvas.value = false
    }
  })
})

const toggleOffcanvas = () => {
  showOffcanvas.value = !showOffcanvas.value
}
</script>

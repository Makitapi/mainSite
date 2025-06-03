<template>
  <main class="page-wrapper">
    <AccountNavBar />

    <b-container class="py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
      <b-row class="pt-sm-2 pt-lg-0">
        <aside class="col-lg-3 pe-lg-4 pe-xl-5 mt-n3">
          <div class="position-lg-sticky top-0">
            <div class="d-none d-lg-block" style="padding-top: 105px">
              <AccountSidebar />
            </div>
            <b-offcanvas noHeader v-model="showOffcanvas" class="offcanvas-lg offcanvas-start" id="sidebarAccount">
              <button @click="toggleOffcanvas" class="btn-close position-absolute top-0 end-0 mt-3 me-3 d-lg-none" type="button"></button>
              <AccountSidebar />
            </b-offcanvas>
          </div>
        </aside>
        <slot />
      </b-row>
    </b-container>

    <hr class="d-none d-dark-mode-block" />

    <button @click="toggleOffcanvas" class="d-lg-none btn btn-sm fs-sm btn-primary w-100 rounded-0 fixed-bottom" type="button">
      <i class="ai-menu me-2"></i>
      Account menu
    </button>
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AccountNavBar from '@/layouts/components/AccountNavBar.vue'
import AccountSidebar from '@/layouts/components/AccountSidebar.vue'
import Footer from '@/layouts/components/Footer.vue'

onMounted(() => {
  document.body.classList.add('bg-secondary')

  window.addEventListener('resize', () => {
    const windowSize = document.documentElement.clientWidth
    if (windowSize > 991) {
      showOffcanvas.value = false
    }
  })
})

onUnmounted(() => {
  document.body.classList.remove('bg-secondary')
})

const showOffcanvas = ref(false)

const toggleOffcanvas = () => {
  showOffcanvas.value = !showOffcanvas.value
}
</script>

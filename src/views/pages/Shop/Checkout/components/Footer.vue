<template>
  <footer class="footer container position-relative z-2 pt-4 pt-xl-5 pb-4">
    <div class="nav fs-sm pb-1 pb-sm-3">
      <span class="text-body-secondary me-1">&copy; All rights reserved. Made by</span>
      <a class="nav-link d-inline fw-normal p-0" :href="developedByLink" target="_blank" rel="noopener">{{ developedBy }}</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { developedBy, developedByLink } from '@/helpers/constants'
</script>

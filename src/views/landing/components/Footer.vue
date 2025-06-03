<template>
  <footer class="footer py-4">
    <b-container class="text-center py-3"
      ><span class="text-body-secondary">&copy; All rights reserved. Made with <span class="text-danger">❤</span> by </span><a class="nav-link d-inline fw-normal p-0" :href="developedByLink" target="_blank" rel="noopener">{{ developedBy }}</a></b-container
    >
  </footer>
</template>

<script lang="ts" setup>
import { developedBy, developedByLink } from '@/helpers/constants'
</script>

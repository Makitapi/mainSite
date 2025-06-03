<template>
  <footer class="footer bg-dark position-relative py-4 py-md-5">
    <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, 0.03)"></div>
    <b-container class="position-relative z-2 pt-4 pt-md-2 pt-xl-4 pt-xxl-5" data-bs-theme="dark">
      <b-row class="py-md-3 mb-4 mb-md-5">
        <b-col md="7" lg="6" xxl="5" class="mb-sm-4 mb-md-0">
          <h2 class="display-4 mb-4 mb-md-5">Let's start building brand together</h2>
          <div class="d-sm-flex align-items-center">
            <a class="btn btn-lg btn-primary rounded-lg me-sm-3 me-lg-4" href="#">Let's work together</a>
            <p class="text-body fs-sm py-3 py-sm-0 ps-sm-2 mb-0">Managers will contact you to discuss the project and select the best team</p>
          </div>
        </b-col>
        <b-col md="5" class="offset-lg-1 offset-xxl-2 d-flex flex-column">
          <div class="nav mx-n2 mx-lg-n4 mb-2 mb-sm-3">
            <a class="nav-link text-primary px-2 px-lg-4" href="mailto:example@email.com">example@email.com</a>
            <a class="nav-link px-3 px-lg-4" href="#">Privacy policy</a>
          </div>
          <div class="nav flex-column mb-3 mb-sm-4">
            <a class="nav-link py-1 px-0" href="tel:+15262200444">+&nbsp;1&nbsp;526&nbsp;220&nbsp;0444</a>
            <a class="nav-link py-1 px-0" href="tel:+15262200000">+&nbsp;1&nbsp;526&nbsp;220&nbsp;0000</a>
          </div>
          <div class="nav mx-n2 mt-auto">
            <a class="nav-link py-1 px-2 me-2" href="#">instagram</a>
            <a class="nav-link py-1 px-2 me-2" href="#">behance</a>
            <a class="nav-link py-1 px-2 me-2" href="#">medium</a>
            <a class="nav-link py-1 px-2" href="#">dribbble</a>
          </div>
        </b-col>
      </b-row>
      <p class="nav fs-sm pt-3 pb-2 pb-lg-0 mb-0">
        <span class="text-body-secondary">&copy; All rights reserved. Made by</span>
        <a class="nav-link fw-normal p-0 ms-1" :href="developedByLink" target="_blank" rel="noopener">{{ developedBy }}</a>
      </p>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import { developedBy, developedByLink } from '@/helpers/constants'
</script>

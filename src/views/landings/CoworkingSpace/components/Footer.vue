<template>
  <footer class="footer py-5">
    <b-container class="pt-lg-3 mt-xl-3">
      <div class="border-bottom text-center pb-4">
        <ul class="nav justify-content-center py-1 pb-sm-2">
          <li class="nav-item">
            <a class="nav-link py-2 px-3 mx-1" href="#">Space</a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-2 px-3 mx-1" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-2 px-3 mx-1" href="#">Reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-2 px-3 mx-1" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-2 px-3 mx-1" href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div class="d-sm-flex align-items-center justify-content-between pt-4 mt-2 mt-sm-0">
        <div class="d-flex justify-content-center order-sm-2 mb-4 mb-sm-0">
          <a class="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3" href="#" aria-label="Instagram">
            <i class="ai-instagram"></i>
          </a>
          <a class="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" href="#" aria-label="Facebook">
            <i class="ai-facebook"></i>
          </a>
          <a class="btn btn-icon btn-sm btn-secondary btn-youtube rounded-circle" href="#" aria-label="YouTube">
            <i class="ai-youtube"></i>
          </a>
        </div>
        <p class="nav fs-sm order-sm-1 text-center mb-0">
          <span class="text-body-secondary">&copy; All rights reserved. Made by</span>
          <a class="nav-link fw-normal p-0 ms-1" :href="developedByLink" target="_blank" rel="noopener">{{ developedBy }}</a>
        </p>
      </div>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import { developedBy, developedByLink } from '@/helpers/constants'
</script>

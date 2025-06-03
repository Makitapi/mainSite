<template>
  <footer class="footer bg-dark position-relative py-5" data-bs-theme="dark">
    <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, 0.03)"></div>
    <b-container class="position-relative z-2 pb-xl-2 pt-2 pt-sm-3 pt-xl-4 pt-xxl-5">
      <b-row class="pb-5 pt-md-3 pt-lg-4 mb-md-3 mb-lg-4">
        <b-col md="6" xxl="5" class="pb-3 pb-md-0 mb-2 mb-sm-3 mb-md-0">
          <div class="h1 pb-3">
            Support us on Kickstarter and get <span style="background: linear-gradient(90.72deg, #cbfdb1 3.49%, #acbff1 50.67%, #efa7ec 100.79%); -webkit-background-clip: text; -webkit-text-fill-color: transparent">20% discount</span>
            on headphones
          </div>
          <div class="d-flex flex-wrap pb-4 pb-xl-5 mb-md-2 mb-lg-3">
            <div class="d-flex pe-3 me-3 mb-2">
              <i class="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
              <span class="text-body">{{ currency }}4,200 pledget</span>
            </div>
            <div class="d-flex pe-3 me-3 mb-2">
              <i class="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
              <span class="text-body">45 funded</span>
            </div>
            <div class="d-flex mb-2">
              <i class="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
              <span class="text-body">12 days to go</span>
            </div>
          </div>
          <a class="btn btn-outline-light" href="#">Support us on Kickstarter</a>
        </b-col>
        <b-col md="5" xl="4" class="offset-md-1 offset-xl-2 offset-xxl-3">
          <b-row class="row-cols-2">
            <b-col>
              <ul class="nav flex-column pb-4 mb-2 pb-md-5 mb-lg-1">
                <li class="nav-item mt-1">
                  <a class="nav-link py-1 px-0" href="#">Features</a>
                </li>
                <li class="nav-item mt-1">
                  <a class="nav-link py-1 px-0" href="#">Colors</a>
                </li>
                <li class="nav-item mt-1">
                  <a class="nav-link py-1 px-0" href="#">Product details</a>
                </li>
                <li class="nav-item mt-1">
                  <a class="nav-link py-1 px-0" href="#">Privacy policy</a>
                </li>
              </ul>
              <div class="d-flex">
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
            </b-col>
            <b-col>
              <ul class="nav flex-column">
                <li class="nav-item mt-1">
                  <a class="nav-link py-1 px-0" href="mailto:email@example.com">email@example.com</a>
                </li>
                <li class="nav-item mt-1">
                  <a class="nav-link py-1 px-0" href="tel:+15262200459">+&nbsp;1&nbsp;526&nbsp;220&nbsp;0459</a>
                </li>
                <li class="nav-item mt-1">
                  <a class="nav-link py-1 px-0" href="tel:+15262200444">+&nbsp;1&nbsp;526&nbsp;220&nbsp;0444</a>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <p class="nav fs-sm mb-0">
        <span class="text-body-secondary">&copy; All rights reserved. Made by</span>
        <a class="nav-link fw-normal p-0 ms-1" :href="developedByLink" target="_blank" rel="noopener">{{ developedBy }}</a>
      </p>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import { currency, developedBy, developedByLink } from '@/helpers/constants'
</script>

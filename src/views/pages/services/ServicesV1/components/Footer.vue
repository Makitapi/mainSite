<template>
  <footer class="footer pt-lg-5 pt-4 pb-5">
    <b-container class="pt-3 mt-md-2 mt-lg-3">
      <b-row class="gy-md-5 gy-4 mb-md-5 mb-4 pb-lg-2">
        <b-col lg="3">
          <router-link :to="{ name: 'landing' }" class="navbar-brand d-inline-flex align-items-center mb-lg-4 mb-3">
            <span class="text-primary flex-shrink-0 me-2">
              <svg version="1.1" width="35" height="32" viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"></path>
              </svg>
            </span>
            <span class="text-nav">Around</span>
          </router-link>
          <p class="mb-4 pb-lg-1 fs-xs text-body-secondary" style="max-width: 306px">The agency with extensive experience that creates marketing strategies for B2B and B2C companies.</p>
          <div class="d-flex mt-n3 ms-n3">
            <a class="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle mt-3 ms-3" href="#" aria-label="Facebook">
              <i class="ai-facebook"></i>
            </a>
            <a class="btn btn-secondary btn-icon btn-sm btn-instagram rounded-circle mt-3 ms-3" href="#" aria-label="Instagram">
              <i class="ai-instagram"></i>
            </a>
            <a class="btn btn-secondary btn-icon btn-sm btn-linkedin rounded-circle mt-3 ms-3" href="#" aria-label="LinkedIn">
              <i class="ai-linkedin"></i>
            </a>
          </div>
        </b-col>
        <b-col xl="8" lg="9" class="offset-xl-1">
          <b-row class="row-cols-sm-4 row-cols-1">
            <b-col>
              <ul class="nav flex-column mb-0">
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">Services</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">Industries</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">Clients</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">Reviews</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">Case studies</a></li>
              </ul>
            </b-col>
            <b-col>
              <ul class="nav flex-column mb-0">
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">Contacts</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">Help center</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">Privacy policy</a></li>
              </ul>
            </b-col>
            <b-col>
              <ul class="nav flex-column mb-0">
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">About</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">Careers</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">News &amp; insights</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0" href="#">Industry forecasts</a></li>
              </ul>
            </b-col>
            <b-col>
              <ul class="nav flex-column mb-0">
                <li class="nav-item mb-2">
                  <a class="nav-link p-0" href="mailto:+15262200444">+&nbsp;1&nbsp;526&nbsp;220&nbsp;0444</a>
                </li>
                <li class="nav-item mb-2">
                  <a class="nav-link p-0" href="mailto:+15262200444">+&nbsp;1&nbsp;526&nbsp;220&nbsp;0000</a>
                </li>
                <li class="nav-item mb-2">
                  <a class="text-primary fw-semibold p-0" href="#">example@gmail.com</a>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div class="nav fs-sm text-body-secondary">
        &copy; All rights reserved. Made by <a class="nav-link fw-normal p-0 ms-1" :href="developedByLink" target="_blank" rel="noopener">{{ developedBy }}</a>
      </div>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import { developedBy, developedByLink } from '@/helpers/constants'
</script>

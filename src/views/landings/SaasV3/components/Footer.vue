<template>
  <footer class="footer">
    <b-container class="py-5 my-sm-2 my-md-3 my-lg-4 my-xl-5">
      <b-row class="align-items-start text-center text-lg-start py-xxl-3">
        <b-col lg="6" class="pb-1 pb-sm-2 pb-lg-0 mb-4 mb-lg-0">
          <h4 class="fw-bold pb-lg-1 mb-2 mb-sm-3">If you have questions email us at</h4>
          <a class="h1 text-primary" href="mailto:email@example.com">email@example.com</a>
        </b-col>
        <b-col lg="6" class="d-flex justify-content-center justify-content-lg-end">
          <a class="btn btn-dark btn-lg px-3 py-2" href="#">
            <img class="d-dark-mode-none mx-1" :src="appStoreLight" width="136" alt="App Store" />
            <img class="d-none d-dark-mode-block mx-1" :src="appStoreDark" width="136" alt="App Store" />
          </a>
          <a class="btn btn-dark btn-lg px-3 py-2 ms-3 ms-md-4" href="#">
            <img class="d-dark-mode-none mx-1" :src="googlePlayLight" width="135" alt="Google Play" />
            <img class="d-none d-dark-mode-block mx-1" :src="googlePlayDark" width="135" alt="Google Play" />
          </a>
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <b-container class="py-4">
      <b-row class="align-items-center py-2 py-sm-3">
        <b-col md="4" class="order-md-2 mb-4 mb-md-0">
          <div class="d-flex justify-content-center justify-content-md-end gap-3">
            <a class="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle" href="#" aria-label="Facebook">
              <i class="ai-facebook"></i>
            </a>
            <a class="btn btn-secondary btn-icon btn-sm btn-linkedin rounded-circle" href="#" aria-label="LinkedIn">
              <i class="ai-linkedin"></i>
            </a>
            <a class="btn btn-secondary btn-icon btn-sm btn-telegram rounded-circle" href="#" aria-label="Telegram">
              <i class="ai-telegram"></i>
            </a>
            <a class="btn btn-secondary btn-icon btn-sm btn-youtube rounded-circle" href="#" aria-label="YouTube">
              <i class="ai-youtube"></i>
            </a>
          </div>
        </b-col>
        <b-col md="8" class="order-md-1">
          <div class="d-sm-flex text-nowrap justify-content-center justify-content-md-start">
            <div class="nav flex-nowrap justify-content-center justify-content-sm-start order-sm-2 mb-3 mb-sm-0">
              <a class="nav-link fw-normal py-0 px-3" href="#">Terms &amp; Conditions</a>
              <a class="nav-link fw-normal py-0 px-3" href="#">Privacy Policy</a>
            </div>
            <p class="text-body-secondary order-sm-1 text-center pe-3 mb-0">&copy; All rights reserved</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import appStoreDark from '@/assets/img/market/appstore-dark.svg'
import appStoreLight from '@/assets/img/market/appstore-light.svg'
import googlePlayDark from '@/assets/img/market/googleplay-dark.svg'
import googlePlayLight from '@/assets/img/market/googleplay-light.svg'
</script>

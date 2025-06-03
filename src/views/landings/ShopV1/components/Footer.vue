<template>
  <footer class="footer bg-dark position-relative pb-4 pt-md-3 py-lg-4 py-xl-5">
    <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, 0.03)"></div>
    <b-container class="position-relative z-2 pt-5 pb-2" data-bs-theme="dark">
      <b-row id="links">
        <b-col md="3" xl="2" class="pb-2 pb-md-0">
          <h3 class="h6 text-uppercase d-none d-md-block">Useful links</h3>
          <a class="btn-more h6 mb-1 text-uppercase text-decoration-none d-flex align-items-center collapsed d-md-none" href="#useful" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="useful" data-show-label="Useful links" data-hide-label="Useful links" aria-label="Useful links" v-b-toggle="'useful'"></a>
          <b-collapse class="d-md-block" id="useful">
            <ul class="nav flex-column pb-2 pb-md-0">
              <li class="nav-item" v-for="(link, idx) in usefulLinks" :key="idx">
                <a class="nav-link fw-normal px-0 py-1" href="#">{{ link }}</a>
              </li>
            </ul>
          </b-collapse>
        </b-col>
        <b-col md="3" xl="2" class="pb-2 pb-md-0">
          <h3 class="h6 text-uppercase d-none d-md-block">Decors</h3>
          <a class="btn-more h6 mb-1 text-uppercase text-decoration-none d-flex align-items-center collapsed d-md-none" href="#decors" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="decors" data-show-label="Decors" data-hide-label="Decors" aria-label="Decors" v-b-toggle="'decors'"></a>
          <b-collapse class="d-md-block" id="decors">
            <ul class="nav flex-column pb-2 pb-md-0">
              <li class="nav-item" v-for="(decor, idx) in decors" :key="idx">
                <a class="nav-link fw-normal px-0 py-1" href="#">{{ decor }}</a>
              </li>
            </ul>
          </b-collapse>
        </b-col>
        <b-col md="3" xl="2" class="pb-2 pb-md-0">
          <h3 class="h6 text-uppercase d-none d-md-block">Categories</h3>
          <a class="btn-more h6 mb-1 text-uppercase text-decoration-none d-flex align-items-center collapsed d-md-none" href="#categories" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="categories" data-show-label="Categories" data-hide-label="Categories" aria-label="Categories" v-b-toggle="'categories'"></a>
          <b-collapse class="d-md-block" id="categories">
            <ul class="nav flex-column pb-2 pb-md-0">
              <li class="nav-item" v-for="(category, idx) in categories" :key="idx">
                <a class="nav-link fw-normal px-0 py-1" href="#">{{ category }}</a>
              </li>
            </ul>
          </b-collapse>
        </b-col>
        <b-col md="3" class="pb-2 pb-md-0">
          <h3 class="h6 text-uppercase d-none d-md-block">Showroom</h3>
          <a class="btn-more h6 mb-1 text-uppercase text-decoration-none d-flex align-items-center collapsed d-md-none" href="#showroom" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="showroom" data-show-label="Showroom" data-hide-label="Showroom" aria-label="Showroom" v-b-toggle="'showroom'"></a>
          <b-collapse class="d-md-block" id="showroom">
            <ul class="nav flex-column pb-3">
              <li class="nav-item">
                <a class="nav-link fw-normal px-0 py-1" href="#">1501 Main St, Ste 50<br />Tewksbury MA 01876</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-normal px-0 py-1" href="mailto:email@example.com">email@example.com</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-normal px-0 py-1" href="+15262200459">+1&nbsp;526&nbsp;220&nbsp;0459</a>
              </li>
            </ul>
            <ul class="list-unstyled mb-0 pb-3 pb-md-0">
              <li class="text-light opacity-90 mb-2">Mon-Fri: 8:00 - 21:00</li>
              <li class="text-light opacity-90 mb-2">Sat: 8:00 - 21:00</li>
              <li class="text-light opacity-90">Sun: 8:00 - 21:00</li>
            </ul>
          </b-collapse>
        </b-col>
        <b-col cols="12" xl="3" class="mt-md-2 mt-xl-0 pt-2 pt-md-4 pt-xl-0">
          <h3 class="h6 text-uppercase mb-1 pb-1">Download our app</h3>
          <div class="d-flex d-xl-block d-xxl-flex">
            <a class="btn btn-secondary px-3 py-2 mt-3 me-3" href="#">
              <img class="mx-1" :src="appStoreLight" width="120" alt="App Store" />
            </a>
            <a class="btn btn-secondary px-3 py-2 mt-3" href="#">
              <img class="mx-1" :src="googlePlayLight" width="119" alt="Google Play" />
            </a>
          </div>
        </b-col>
      </b-row>

      <div class="d-sm-flex align-items-end justify-content-between border-bottom mt-2 mt-sm-1 pt-4 pt-sm-5">
        <nav class="nav d-flex mb-3 mb-sm-4">
          <a class="nav-link text-body-secondary fs-sm fw-normal ps-0 pe-2 py-2 me-4" href="#">Support</a>
          <a class="nav-link text-body-secondary fs-sm fw-normal ps-0 pe-2 py-2 me-4" href="#">Privacy</a>
          <a class="nav-link text-body-secondary fs-sm fw-normal ps-0 pe-2 py-2 me-sm-4" href="#">Terms of use</a>
        </nav>

        <b-dropdown class="mb-4" variant="link" toggle-class="p-0 form-select" menu-class="dropdown-menu-end my-1" auto-close="outside" no-caret>
          <template v-slot:button-content>
            <button class="btn btn-outline-secondary px-4">
              <img class="me-2" :src="flagEn" :width="18" alt="English / USD" />
              <span class="me-2"> Eng / USD </span>
            </button>
          </template>

          <b-dropdown-item>
            <b-form-select size="sm" v-model="selectedCurrency" :options="currencyOptions"></b-form-select>
          </b-dropdown-item>
          <b-dropdown-item class="pb-1">
            <img class="me-2" :src="flagFr" :width="18" alt="Français" />
            Français
          </b-dropdown-item>
          <b-dropdown-item class="pb-1">
            <img class="me-2" :src="flagDe" :width="18" alt="Deutsch" />
            Deutsch
          </b-dropdown-item>
          <b-dropdown-item>
            <img class="me-2" :src="flagIt" :width="18" alt="Italiano" />
            Italiano
          </b-dropdown-item>
        </b-dropdown>
      </div>

      <div class="d-sm-flex align-items-center pt-4">
        <div class="d-sm-flex align-items-center pe-sm-2">
          <router-link :to="{ name: 'landing' }" class="navbar-brand d-inline-flex align-items-center me-sm-5 mb-4 mb-sm-0">
            <span class="text-primary flex-shrink-0 me-2">
              <svg version="1.1" width="35" height="32" viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"></path>
              </svg>
            </span>
            <span class="text-light opacity-90">Around</span>
          </router-link>
          <div class="d-flex mb-4 mb-sm-0">
            <template v-for="(social, idx) in socialMedia" :key="idx">
              <a class="btn btn-icon btn-sm btn-secondary rounded-circle mx-2 ms-sm-0 me-sm-3" :class="`btn-${social}`" href="#" :aria-label="social">
                <i :class="`ai-${social}`" />
              </a>
            </template>
          </div>
        </div>
        <img class="ms-sm-auto" :src="footerCards" width="187" alt="Accepted cards" />
      </div>
    </b-container>
    <div class="pt-5 pt-lg-0"></div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import appStoreLight from '@/assets/img/market/appstore-light.svg'
import googlePlayLight from '@/assets/img/market/googleplay-light.svg'
import footerCards from '@/assets/img/shop/footer-cards.png'

import flagEn from '@/assets/img/flags/en.png'
import flagFr from '@/assets/img/flags/fr.png'
import flagDe from '@/assets/img/flags/de.png'
import flagIt from '@/assets/img/flags/it.png'

const selectedCurrency = ref('usd')

const currencyOptions = [
  { value: 'usd', text: '$ USD' },
  { value: 'eur', text: '€ EUR' },
  { value: 'ukp', text: '£ UKP' },
  { value: 'jpy', text: '¥ JPY' }
]

const usefulLinks = ['Trending', 'Sale', 'About us', 'Blog', 'Contact', 'Shipping & Returns', 'Delivery info']

const decors = ['Vases', 'Mirrors', 'Paintings', 'Figurines', 'Textile', 'Lighting', 'Photo frames']

const categories = ['Kitchen', 'Bathroom', 'Living room', 'Bedroom']

const socialMedia = ['telegram', 'instagram', 'facebook', 'pinterest']
</script>

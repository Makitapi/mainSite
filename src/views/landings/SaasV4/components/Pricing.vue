<template>
  <section class="position-relative bg-dark pt-2 pt-lg-4 pt-xl-5" style="background: linear-gradient(90deg, #121519 0%, #191c20 51.04%, #121519 100%)">
    <Jarallax custom-class="jarallax position-absolute top-0 start-0 w-100 h-100" :options="{ speed: 0.4 }">
      <div class="jarallax-img" :style="{ backgroundImage: `url(${pricingBgPattern})` }"></div>
    </Jarallax>
    <b-container class="position-relative z-2 pt-5" data-bs-theme="dark">
      <h2 class="h1 text-center pt-2 pt-sm-3 pb-4 pb-md-5 mb-2 mb-md-0 mb-lg-2">Around vs Custom development</h2>

      <!-- Table visible on screens > 768px -->
      <div class="position-relative ms-n4 ms-md-0 d-none d-md-block">
        <div class="position-absolute top-0 start-50 translate-middle-x h-100 bg-secondary rounded-3 rounded-bottom-0 d-none d-lg-block" style="width: 342px"></div>
        <div class="position-absolute top-0 start-50 translate-middle-x h-100 bg-secondary rounded-3 rounded-bottom-0 d-lg-none" style="width: 300px"></div>

        <b-row class="row-cols-3 align-items-center position-relative z-2 g-0">
          <b-col>&nbsp;</b-col>
          <b-col class="py-2 py-md-3">
            <div class="text-center py-4 mx-auto" style="width: 264px">
              <h3 class="h4 mb-sm-4">Around</h3>
              <a href="#" class="btn btn-primary w-100 rounded-pill mb-2">Get started - Free</a>
              <p class="text-body fs-xs mb-0">Our pricing starts at as low as {{ currency }}1,299 per team</p>
            </div>
          </b-col>
          <b-col class="text-center pe-lg-5">
            <h3 class="h4 pt-3 pt-md-4 mb-0 mx-auto" style="width: 264px">Building In-House</h3>
          </b-col>
          <div class="position-relative w-100 opacity-40">
            <span class="position-absolute top-0 start-0 w-100" style="height: 1px; background: linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%)"></span>
            <span class="d-block w-100 bg-primary" style="height: 1px"></span>
          </div>
        </b-row>

        <b-row class="row-cols-3 align-items-center position-relative z-2 g-0">
          <b-col class="py-3 py-md-4 ps-lg-5">
            <div class="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style="width: 208px">Data Models Infrastructure Cost</div>
          </b-col>
          <b-col class="py-3 py-md-4">
            <div class="text-center py-1 px-4 mx-auto" style="width: 264px">
              <div class="text-white fs-lg fw-semibold">Included</div>
              <div class="text-body fs-xs">Cloud hosted AI/ML capacities</div>
            </div>
          </b-col>
          <b-col class="py-3 py-md-4 pe-lg-5">
            <div class="text-center py-1 px-4 mx-auto" style="width: 264px">
              <div class="text-white fs-lg fw-semibold">From {{ currency }}10k to {{ currency }}50k</div>
              <div class="text-body fs-xs">per month</div>
            </div>
          </b-col>
          <div class="position-relative w-100 opacity-40">
            <span class="position-absolute top-0 start-0 w-100 h-1" style="height: 1px; background: linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%)"></span>
            <span class="d-block w-100 bg-primary" style="height: 1px"></span>
          </div>
        </b-row>

        <b-row class="row-cols-3 align-items-center position-relative z-2 g-0">
          <b-col class="py-3 py-md-4 ps-lg-5">
            <div class="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style="width: 208px">Engineering Cost</div>
          </b-col>
          <b-col class="py-3 py-md-4">
            <div class="text-center py-1 px-4 mx-auto" style="width: 264px">
              <div class="text-white fs-lg fw-semibold">Included</div>
              <div class="text-body fs-xs">with our premium plans</div>
            </div>
          </b-col>
          <b-col class="py-3 py-md-4 pe-lg-5">
            <div class="text-center py-1 px-4 mx-auto" style="width: 264px">
              <div class="text-white fs-lg fw-semibold">From {{ currency }}25k to {{ currency }}30k</div>
              <div class="text-body fs-xs">per engineer per month</div>
            </div>
          </b-col>
          <div class="position-relative w-100 opacity-40">
            <span class="position-absolute top-0 start-0 w-100 h-1" style="height: 1px; background: linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%)"></span>
            <span class="d-block w-100 bg-primary" style="height: 1px"></span>
          </div>
        </b-row>

        <b-row class="row-cols-3 align-items-center position-relative z-2 g-0">
          <b-col class="py-3 py-md-4 ps-lg-5">
            <div class="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style="width: 208px">Time to Implement</div>
          </b-col>
          <b-col class="py-4">
            <div class="text-center py-1 px-4 mx-auto" style="width: 264px">
              <div class="text-white fs-lg fw-semibold">Get started in minutes</div>
            </div>
          </b-col>
          <b-col class="py-3 py-md-4 pe-lg-5">
            <div class="text-center py-1 px-4 mx-auto" style="width: 264px">
              <div class="text-white fs-lg fw-semibold">Average 6-9 months</div>
              <div class="text-body fs-xs">depends on team qualification</div>
            </div>
          </b-col>
          <div class="position-relative w-100 opacity-40">
            <span class="position-absolute top-0 start-0 w-100 h-1" style="height: 1px; background: linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%)"></span>
            <span class="d-block w-100 bg-primary" style="height: 1px"></span>
          </div>
        </b-row>

        <b-row class="row-cols-3 align-items-center position-relative z-2 g-0">
          <b-col class="py-3 py-md-4 ps-lg-5">
            <div class="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style="width: 208px">Maintenance &amp; Operational Cost</div>
          </b-col>
          <b-col class="py-3 py-md-4">
            <div class="text-center py-1 px-4 mx-auto" style="width: 264px">
              <div class="text-white fs-lg fw-semibold">Included</div>
              <div class="text-body fs-xs">with our premium plans</div>
            </div>
          </b-col>
          <b-col class="py-3 py-md-4 pe-lg-5">
            <div class="text-center py-1 px-4 mx-auto" style="width: 264px">
              <div class="text-white fs-lg fw-semibold">Average {{ currency }}20k</div>
              <div class="text-body fs-xs">per engineer per month</div>
            </div>
          </b-col>
          <div class="position-relative w-100 opacity-40">
            <span class="position-absolute top-0 start-0 w-100 h-1" style="height: 1px; background: linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%)"></span>
            <span class="d-block w-100 bg-primary" style="height: 1px"></span>
          </div>
        </b-row>
      </div>

      <!-- Table visible on screens < 768px -->
      <table class="table table-layout-fixed d-md-none" style="--ar-table-bg: transparent">
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <div class="h5">Around</div>
              <a href="#" class="btn btn-sm btn-primary w-100 rounded-pill mb-2">Get started - Free</a>
              <p class="text-body fs-xs mb-0">Our pricing starts at as low as {{ currency }}1,299 per team</p>
            </th>
            <th scope="col" class="align-middle text-center">
              <div class="h5 mb-0">Building In-House</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" colspan="2" class="bg-secondary text-white text-center">Data Models Infrastructure Cost</th>
          </tr>
          <tr>
            <td class="text-center">
              <div class="text-white fw-semibold">Included</div>
              <div class="text-body fs-xs">Cloud hosted AI/ML capacities</div>
            </td>
            <td class="text-center">
              <div class="text-white fw-semibold">From {{ currency }}10k to {{ currency }}50k</div>
              <div class="text-body fs-xs">per month</div>
            </td>
          </tr>
          <tr>
            <th scope="row" colspan="2" class="bg-secondary text-white text-center">Engineering Cost</th>
          </tr>
          <tr>
            <td class="text-center">
              <div class="text-white fw-semibold">Included</div>
              <div class="text-body fs-xs">with our premium plans</div>
            </td>
            <td class="text-center">
              <div class="text-white fw-semibold">From {{ currency }}25k to {{ currency }}30k</div>
              <div class="text-body fs-xs">per engineer per month</div>
            </td>
          </tr>
          <tr>
            <th scope="row" colspan="2" class="bg-secondary text-white text-center">Time to Implement</th>
          </tr>
          <tr>
            <td class="text-center">
              <div class="text-white fw-semibold">Get started in minutes</div>
            </td>
            <td class="text-center">
              <div class="text-white fw-semibold">Average 6-9 months</div>
              <div class="text-body fs-xs">depends on team qualification</div>
            </td>
          </tr>
          <tr>
            <th scope="row" colspan="2" class="bg-secondary text-white text-center">Maintenance &amp; Operational Cost</th>
          </tr>
          <tr>
            <td class="text-center">
              <div class="text-white fw-semibold">Included</div>
              <div class="text-body fs-xs">with our premium plans</div>
            </td>
            <td class="text-center">
              <div class="text-white fw-semibold">Average {{ currency }}20k</div>
              <div class="text-body fs-xs">per engineer per month</div>
            </td>
          </tr>
        </tbody>
      </table>
    </b-container>
    <div class="d-none d-md-block" style="height: 300px"></div>
    <div class="d-md-none" style="height: 260px"></div>
    <div class="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1" style="color: var(--ar-body-bg)">
      <div class="position-relative start-50 translate-middle-x flex-shrink-0" style="width: 3774px">
        <svg width="3774" height="201" viewBox="0 0 3774 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Jarallax from '@/components/Jarallax.vue'
import { currency } from '@/helpers/constants'
import pricingBgPattern from '@/assets/img/landing/saas-4/pricing-bg-pattern.png'
</script>

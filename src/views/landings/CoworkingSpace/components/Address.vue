<template>
  <b-container class="pt-5 mt-sm-2 mt-md-3 mt-lg-4 mt-xxl-5 mb-n4 mb-md-n2 mb-lg-0">
    <!-- Map for screens < 992px -->
    <div class="d-lg-none rounded-5 overflow-hidden">
      <LeafletMap id="map-sm" custom-class="interactive-map" :options="mapSmOptions" :height="350" />
    </div>
    <div class="position-relative overflow-hidden rounded-5 px-lg-5 mt-lg-3 mt-xl-5">
      <div class="d-none d-xxl-block" style="height: 160px"></div>
      <div class="d-none d-xl-block d-xxl-none" style="height: 130px"></div>
      <div class="d-none d-lg-block d-xl-none" style="height: 100px"></div>
      <div class="position-relative z-5 ms-lg-5" style="max-width: 530px">
        <b-card no-body class="border-0">
          <b-card-body>
            <h2 class="h4 mb-sm-4">Around Space</h2>
            <div class="d-sm-flex mb-3">
              <div class="mb-3 mb-sm-0 me-sm-4">
                <p class="mb-0">5211 Valley Apt. 667 Victoria Hill Rd., London</p>
                <p class="mb-0">+1 526 220 0459</p>
              </div>
              <div class="d-none d-sm-block border-end"></div>
              <div class="ms-sm-4">
                <p class="mb-0">5217 Apartment. 705 Childerditch Ln., London</p>
                <p class="mb-0">+1 526 220 5439</p>
              </div>
            </div>
            <a href="milto:email@xample.com">email@xample.com</a>
          </b-card-body>
        </b-card>
      </div>
      <div class="d-none d-xxl-block" style="height: 160px"></div>
      <div class="d-none d-xl-block d-xxl-none" style="height: 130px"></div>
      <div class="d-none d-lg-block d-xl-none" style="height: 100px"></div>

      <!-- Map for screens > 992px -->
      <LeafletMap id="map-lg" custom-class="d-none d-lg-block interactive-map position-absolute z-1 top-0 start-0 w-100 h-100" :options="mapLgOptions" />
    </div>
  </b-container>
</template>

<script setup lang="ts">
import LeafletMap from '@/components/LeafletMap.vue'

const mapSmOptions = {
  center: [51.5074, 0.29],
  zoom: 10,
  scrollWheelZoom: false,
  markers: [
    {
      position: [51.59, 0.3338],
      popup: `<div class="p-3"><h6>Hi, we are in London</h6><p class="fs-sm pt-1 mt-n3 mb-0">5217 Apartment. 705 Childerditch Ln.</p></div>`
    },
    {
      position: [51.4074, 0.1838],
      popup: `<div class="p-3"><h6>Hi, we are in London</h6><p class="fs-sm pt-1 mt-n3 mb-0">5211 Valley Apt. 667 Victoria Hill Rd.</p></div>`
    }
  ]
}

const mapLgOptions = {
  center: [51.5074, -0.1278],
  zoom: 10,
  scrollWheelZoom: false,
  markers: [
    {
      position: [51.59, 0.3338],
      popup: `<div class="p-3"><h6>Hi, we are in London</h6><p class="fs-sm pt-1 mt-n3 mb-0">5217 Apartment. 705 Childerditch Ln.</p></div>`
    },
    {
      position: [51.4074, 0.1838],
      popup: `<div class="p-3"><h6>Hi, we are in London</h6><p class="fs-sm pt-1 mt-n3 mb-0">5211 Valley Apt. 667 Victoria Hill Rd.</p></div>`
    }
  ]
}
</script>

<template>
  <section class="position-relative">
    <div class="d-none d-xl-block" style="height: 570px"></div>
    <div class="d-none d-lg-block d-xl-none" style="height: 450px"></div>
    <div class="d-none d-md-block d-lg-none" style="height: 380px"></div>
    <div class="d-md-none" style="height: 280px"></div>
    <LeafletMap id="map" custom-class="interactive-map position-absolute top-0 start-0 w-100 h-100" :options="options" />
  </section>
</template>

<script lang="ts" setup>
import LeafletMap from '@/components/LeafletMap.vue'

const options = {
  center: [28.5384, -81.3789],
  zoom: 10,
  scrollWheelZoom: false,
  markers: [
    {
      position: [28.5384, -81.3789],
      popup: `<div class="p-3"><h6>Hi, we are in Orlando, FL</h6><p class="fs-sm pt-1 mt-n3 mb-0">514 Magnolia St. Orlando, FL 32806.</p></div>`
    }
  ]
}
</script>

<template>
  <section class="bg-secondary position-relative py-5">
    <b-container class="py-1 py-sm-4 py-xl-5 my-md-3 my-xl-0 my-xxl-4">
      <h2 class="h1 text-center pb-3 mb-3 mb-lg-4">Product details</h2>
      <div class="hotspots mx-auto" style="max-width: 650px">
        <img class="d-block" :src="hotspotImage" alt="Img" />
        <div class="position-absolute" style="top: 8%; right: 16%; width: 4rem; height: 4rem" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-offset="300">
          <div class="hotspot">
            <div class="hotspot-inner" id="popover-1">
              <i class="ai-plus"></i>
            </div>
          </div>
        </div>
        <div class="position-absolute" style="bottom: 9%; left: 48%; width: 4rem; height: 4rem" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-offset="100" data-aos-delay="150">
          <div class="hotspot">
            <div class="hotspot-inner" id="popover-2">
              <i class="ai-plus"></i>
            </div>
          </div>
        </div>
        <div class="position-absolute" style="bottom: 36%; left: 6%; width: 4rem; height: 4rem" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-offset="200" data-aos-delay="300">
          <div class="hotspot">
            <div class="hotspot-inner" id="popover-3">
              <i class="ai-plus"></i>
            </div>
          </div>
        </div>
        <b-popover target="popover-1" triggers="hover" placement="right" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.">
          <template #title>
            <h6 class="mb-0">Memory foam ear pads</h6>
          </template>
        </b-popover>

        <b-popover target="popover-2" triggers="hover" placement="right" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare.">
          <template #title>
            <h6 class="mb-0">Noise suppression</h6>
          </template>
        </b-popover>

        <b-popover target="popover-3" triggers="hover" placement="top" content="Excepteur sint occaecat cupidatat non proident sunt culpa officia.">
          <template #title>
            <h6 class="mb-0">Wireless Bluetooth</h6>
          </template>
        </b-popover>
      </div>
      <b-row class="pt-5 my-2">
        <b-col cols="6" md="3">
          <h3 class="mb-md-4">Other features</h3>
          <ul class="list-unstyled pb-1 pb-sm-2 pb-lg-3 mb-4 mb-xl-5">
            <li class="mt-2">Noise suppression</li>
            <li class="mt-2">Memory foam ear pads</li>
          </ul>
          <h3 class="mb-md-4">Battery</h3>
          <ul class="list-unstyled mb-0">
            <li class="mt-2">Up to 60 hours life</li>
            <li class="mt-2">Charge via Micro-USB cable</li>
            <li class="mt-2">Fast charging technology</li>
          </ul>
        </b-col>
        <b-col cols="6" md="3">
          <h3 class="mb-md-4">Connectivity</h3>
          <ul class="list-unstyled pb-1 pb-sm-2 pb-lg-3 mb-4 mb-xl-5">
            <li class="mt-2">Wireless Bluetooth</li>
            <li class="mt-2">Micro-USD port</li>
          </ul>
          <h3 class="mb-md-4">General</h3>
          <ul class="list-unstyled mb-0">
            <li class="mt-2">Height: 7.9 in / 19.6 cm</li>
            <li class="mt-2">Weight: 7.55 oz / 0,75 g</li>
            <li class="mt-2">Form factor: On ear</li>
          </ul>
        </b-col>
        <b-col md="6" xl="4" class="offset-xl-1 pt-1 pt-sm-3 pt-md-0 mt-4 mt-md-0">
          <h3 class="mb-md-4">Highlights</h3>
          <p>Donec urna, sed molestie tincidunt elit nunc pellentesque ipsum purus a turpis elementum augue magna hendrerit bibendum morbi elementum non egestas in nec donec sit magna amet et mauris nisl suscipit urna in morbi sit elementum venenatis.</p>
          <p class="mb-0">Ut sit at orci cursus gravida pretium proin nulla id purus, placerat eget mauris eu ac volutpat facilisi eget morbi ullamcorper turpis nisi aconsequat cursus malesuada leo ultrices nisl dictumst turpis tortor sem amet, euismod aliquam, lacus laoreet dui facilisi.</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import hotspotImage from '@/assets/img/landing/product/hotspots-image.png'
</script>

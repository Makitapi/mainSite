<template>
  <b-container>
    <div class="bg-primary bg-opacity-10 rounded-5 py-5 px-4 p-sm-5">
      <div class="d-lg-flex align-items-center g-0 py-2 py-sm-3 py-md-4 p-xl-5">
        <div class="order-lg-2 text-center text-lg-start ps-lg-5 mx-auto me-lg-0">
          <h2 class="h1 mb-4">The tools <br class="d-none d-lg-inline" />we work with</h2>
          <p class="pb-3 mb-3 mb-lg-4">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.</p>
          <a class="btn btn-primary d-none d-lg-inline-flex" href="#">See all tools</a>
        </div>
        <div class="order-lg-1 w-100 mx-auto mx-lg-0" style="max-width: 558px">
          <b-row class="row-cols-3 g-3 g-sm-4 g-lg-3 g-xl-4">
            <b-col v-for="(tool, idx) in tools" :key="idx">
              <div class="bg-light rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" :data-aos-delay="tool.delay">
                <img class="d-dark-mode-none" :src="tool.image.dark" alt="Facebook" />
                <img class="d-none d-dark-mode-block" :src="tool.image.light" alt="Facebook" />
              </div>
            </b-col>
          </b-row>
          <div class="d-lg-none text-center pt-4 mt-2 mt-md-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="900">
            <b-button variant="primary">See all tools</b-button>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { tools } from '@/views/Makitapi/1Landing/data'
</script>

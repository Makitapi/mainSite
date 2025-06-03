<template>
  <section class="bg-dark position-relative py-5">
    <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, 0.03)"></div>
    <b-container class="position-relative z-2 py-5 mb-4 mb-sm-5" data-bs-theme="dark">
      <b-row class="pb-5 mb-2 mb-sm-0 mb-lg-3">
        <b-col lg="10" xl="9">
          <nav aria-label="breadcrumb">
            <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'landing' }">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">About us</li>
            </ol>
          </nav>

          <h1 class="display-2 pb-2 pb-sm-3">We believe in the success of every business</h1>
          <ul class="list-unstyled d-flex flex-wrap mb-0">
            <li class="d-flex text-body py-1 me-4">
              <i class="ai-check-alt text-primary lead me-2"></i>
              Forecasting and recommendations
            </li>
            <li class="d-flex text-body py-1 me-4">
              <i class="ai-check-alt text-primary lead me-2"></i>
              Identification of patterns, analysis
            </li>
            <li class="d-flex text-body py-1">
              <i class="ai-check-alt text-primary lead me-2"></i>
              Segmentation by various methods
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup></script>

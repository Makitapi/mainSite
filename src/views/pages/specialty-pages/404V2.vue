<template>
  <main class="page-wrapper">
    <div class="d-flex flex-column flex-lg-row justify-content-between min-vh-100 position-relative">
      <div class="position-absolute top-0 start-0 w-100 h-100 d-lg-none">
        <div class="d-dark-mode-none position-absolute top-0 start-0 w-100 h-100" style="background-color: #f2f3f7"></div>
      </div>
      <div class="d-flex flex-column justify-content-center w-lg-50 position-relative z-2 mt-auto mt-lg-0">
        <div class="text-center text-lg-start pt-5 pb-3 py-lg-5 px-3 px-sm-4 px-lg-5 mx-auto" style="max-width: 630px">
          <h1 class="display-1">Error 404</h1>
          <p class="lead pb-2 mb-4 mb-lg-5">The page you are looking for was moved, removed or might never existed.</p>
          <router-link class="btn btn-lg btn-primary" :to="{ name: 'landing' }">Go to homepage</router-link>
        </div>
      </div>
      <div class="d-flex flex-column position-relative justify-content-end align-items-center w-lg-50 overflow-hidden">
        <div class="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block">
          <div class="d-dark-mode-none position-absolute top-0 start-0 w-100 h-100" style="background-color: #f2f3f7"></div>
          <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, 0.04)"></div>
        </div>
        <div class="position-relative z-2" style="max-width: 948px">
          <img :src="layer1" alt="Lady" id="lady" />
          <img class="position-absolute top-0 start-0 w-100 h-100" :src="layerLight2" alt="Bubble" id="bubble" />
          <div class="position-absolute top-0 start-0 w-100 h-100" id="question">
            <img class="d-dark-mode-none" :src="layerLight3" alt="Question mark" />
            <img class="d-none d-dark-mode-block" :src="layerDark3" alt="Question mark" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import layer1 from '@/assets/img/404/layer01.png'
import layerLight2 from '@/assets/img/404/layer02-light.png'
import layerLight3 from '@/assets/img/404/layer03-light.png'
import layerDark3 from '@/assets/img/404/layer03-dark.png'
</script>

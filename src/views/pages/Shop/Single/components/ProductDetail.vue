<template>
  <b-col md="6" xl="5" offset-xl="1">
    <div class="d-none d-md-block" style="margin-top: -90px"></div>
    <div class="position-md-sticky top-0 ps-md-4 ps-lg-5 ps-xl-0">
      <div class="d-none d-md-block" style="padding-top: 90px"></div>
      <div class="d-flex align-items-center pt-3 py-3">
        <b-badge variant="danger" class="bg-opacity-10 text-danger d-none d-md-inline-block me-4">Sale</b-badge>
        <span class="fs-sm">V00273124</span>
      </div>
      <h1 class="d-none d-md-inline-block pb-1 mb-2">Scented candle</h1>
      <p class="fs-sm mb-4">Find aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur neque congue aliqua dolor do amet sint ovar velit.</p>
      <div class="d-none d-md-flex align-items-center pb-3 mb-3">
        <div class="h3 mb-0 me-3">{{ currency }}14.00</div>
        <del class="fs-5 fw-medium text-body-secondary">{{ currency }}19.00</del>
      </div>

      <div class="h6">
        Color:<span class="text-body-secondary fw-normal ms-1" id="colorOption">{{ selected }}</span>
      </div>
      <div class="d-flex pb-3">
        <div class="me-2 mb-2" v-for="(data, idx) in color" :key="idx">
          <b-form-group>
            <b-form-radio-group class="btn btn-icon btn-sm btn-outline-secondary rounded-circle" id="radio-group-1" v-model="selected" name="radio-options">
              <span v-if="!data.backgroundImage" class="d-block rounded-circle" style="width: 1.5rem; height: 1.5rem" :style="{ backgroundColor: `${data.backgroundColor}` }"></span>

              <span v-if="data.backgroundImage" class="d-block bg-size-cover bg-position-center rounded-circle" style="width: 1.5rem; height: 1.5rem" :style="{ backgroundImage: `url('${data.backgroundImage}')`, backgroundColor: `${data.backgroundColor}` }"></span>
            </b-form-radio-group>
          </b-form-group>
        </div>
      </div>

      <div class="h6">Weight</div>
      <div class="d-flex">
        <div class="me-3">
          <input class="btn-check" type="radio" name="weight" value="140 g" checked id="weight1" />
          <label class="btn btn-outline-secondary px-2" for="weight1">
            <span class="mx-1">140 g</span>
          </label>
        </div>
        <div class="me-3">
          <input class="btn-check" type="radio" name="weight" value="260 g" id="weight2" />
          <label class="btn btn-outline-secondary px-2" for="weight2">
            <span class="mx-1">260 g</span>
          </label>
        </div>
        <div class="me-3">
          <input class="btn-check" type="radio" name="weight" value="440 g" id="weight3" />
          <label class="btn btn-outline-secondary px-2" for="weight3">
            <span class="mx-1">440 g</span>
          </label>
        </div>
      </div>

      <div class="d-sm-flex d-md-block d-lg-flex py-4 py-md-5 my-3 my-md-0 mt-lg-0 mb-lg-4">
        <div class="count-input bg-gray rounded-3 me-4 mb-3 mb-sm-0 mb-md-3 mb-lg-0">
          <b-button class="btn-icon btn-lg fs-xl" @click="decrementCount()">-</b-button>
          <input class="form-control" type="number" :value="count" readonly />
          <b-button class="btn-icon btn-lg fs-xl" @click="count++">+</b-button>
        </div>
        <div class="d-flex align-items-center">
          <button class="btn btn-lg btn-primary w-100 w-lg-auto me-2" type="button"><i class="ai-cart me-2 ms-n1"></i>Add to cart</button>
          <div class="nav">
            <a class="nav-link fs-3 px-3" href="#" data-bs-toggle="tooltip" title="Add to Favorites" aria-label="Add to Favorites">
              <i class="ai-heart"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <h4 class="h6 me-4">Share product:</h4>
        <b-button v-for="product in products" :key="product" variant="secondary" size="sm" class="btn-icon rounded-circle me-3 mb-3" :class="`btn-${product}`" ref="#" :aria-label="product">
          <i :class="`ai-${product.toLocaleLowerCase()}`"></i>
        </b-button>
      </div>
    </div>
  </b-col>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { color, products } from '@/views/pages/Shop/Single/data'
import { currency } from '@/helpers/constants'
const count = ref(0)

const decrementCount = () => {
  if (count.value > 0) {
    count.value--
  }
}
const selected = ref()
</script>

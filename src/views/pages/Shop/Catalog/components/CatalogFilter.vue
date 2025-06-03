<template>
  <h3 class="h5">Categories</h3>
  <b-accordion class="accordion-alt pb-2 mb-4" id="shopCategories">
    <b-accordion-item bodyClass="m-0 p-0" headerTag="h4" buttonClass="fs-base fw-medium p-0 m-0 " headerClass="fs-xl fw-medium py-2" :title="list.label" class="mb-0" v-for="(list, idx) in livingCategory" :key="idx" :visible="!idx">
      <div :id="`${list.label}`" data-bs-parent="#shopCategories">
        <div class="py-1 mb-1">
          <div class="form-check" v-for="(item, idx) in list.items" :key="idx">
            <input class="form-check-input" type="checkbox" :id="`lr-all${idx}`" />
            <label class="form-check-label d-flex align-items-center" :for="`lr-all${idx}`">
              <span class="text-nav fw-medium">{{ item.title }}</span>
              <span class="fs-xs text-body-secondary ms-auto">{{ item.number }}</span>
            </label>
          </div>
        </div>
      </div>
    </b-accordion-item>
  </b-accordion>

  <!-- Price (range slider + inputs) -->
  <h3 class="h5">Price</h3>
  <div class="range-slider pb-3 mb-4" data-start-min="10" data-start-max="50" data-min="0" data-max="80" data-step="1" data-tooltip-prefix="$">
    <div class="py-4">
      <VueSlider v-model="priceRange" :min="0" :max="80" :dotSize="17" :dotStyle="dotStyle" :processStyle="processStyle" :railStyle="railStyle" :tooltipStyle="tooltipStyle" />
    </div>
    <div class="d-flex">
      <div class="d-flex align-items-center w-50">
        <label class="form-label fs-xs me-2 mb-0" for="price-min">From</label>
        <input class="form-control form-control-sm range-slider-value-min" type="number" style="max-width: 6rem" id="price-min" v-model="priceRange[0]" readonly />
      </div>
      <div class="d-flex align-items-center justify-content-end w-50">
        <label class="form-label fs-xs me-2 mb-0" for="price-max">To</label>
        <input class="form-control form-control-sm range-slider-value-max" type="number" style="max-width: 6rem" id="price-max" v-model="priceRange[1]" readonly />
      </div>
    </div>
  </div>

  <h3 class="h5">Color</h3>
  <div class="d-flex pb-2 mb-4">
    <div class="me-2 mb-2" v-for="(clr, idx) in color" :key="idx">
      <input class="btn-check" type="checkbox" :value="`${clr.name}`" :id="clr.name" :checked="!idx" />
      <label class="btn btn-icon btn-sm btn-outline-secondary rounded-circle" :for="clr.name">
        <span v-if="!clr.image" class="d-block rounded-circle" style="width: 1.5rem; height: 1.5rem" :style="{ backgroundColor: `${clr.backgroundColor}` }"></span>
        <span v-if="clr.image" class="d-block bg-size-cover bg-position-center rounded-circle" style="width: 1.5rem; height: 1.5rem" :style="{ backgroundImage: `url('${clr.image}')` }"></span>
      </label>
    </div>
  </div>

  <h3 class="h5">Brand</h3>
  <div class="pb-2">
    <div class="form-check" v-for="(item, idx) in brand" :key="idx">
      <input class="form-check-input" type="checkbox" :value="`${item.value}`" id="brand1" />
      <label class="form-check-label d-flex align-items-center" for="brand1">
        <span class="text-nav fw-medium">{{ item.name }}</span>
        <span class="fs-xs text-body-secondary ms-auto">{{ item.count }}</span>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { color, brand, livingCategory } from '@/views/pages/Shop/Catalog/data'
import VueSlider from 'vue-3-slider-component'
const priceRange = ref([10, 50])

const dotStyle = {
  backgroundColor: '#448c74'
}

const processStyle = {
  backgroundColor: '#448c74'
}

const railStyle = {
  backgroundColor: 'rgba(255, 255, 255, .2)'
}

const tooltipStyle = {
  backgroundColor: '#448c74'
}
</script>
<style lang="scss">
.vue-slider-dot-tooltip-inner {
  border-color: #448c74;
}
</style>

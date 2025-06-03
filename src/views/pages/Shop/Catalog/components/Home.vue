<template>
  <b-row class="pt-xl-3 mt-n1 mt-sm-0">
    <b-col lg="10" offset-lg="3" class="pt-lg-3">
      <h1 class="pb-2 pb-sm-3">Home decoration</h1>
    </b-col>
  </b-row>
  <b-row class="pb-2 pb-sm-4">
    <!-- Sidebar (offcanvas on sreens < 992px) -->
    <aside class="col-lg-3">
      <template class="d-none d-lg-block pt-2 pt-lg-0 pe-lg-4">
        <CatalogFilter />
      </template>
      <b-offcanvas bodyClass="pt-2 pt-lg-0 pe-lg-4" v-model="show" title="Filters" placement="start" class="offcanvas-lg d-lg-none d-block" id="shopSidebar">
        <CatalogFilter />
      </b-offcanvas>
    </aside>

    <b-col lg="9">
      <div class="d-flex align-items-start justify-content-between mb-4">
        <div class="me-3">
          <div class="nav d-md-none">
            <router-link v-b-toggle.activeFilters class="nav-link dropdown-toggle fs-sm p-0 mb-2" to="#activeFilters" data-bs-toggle="collapse">Active filters</router-link>
          </div>
          <b-collapse class="d-md-block" id="activeFilters">
            <div class="pt-2 pt-md-0">
              <a class="d-inline-block border rounded-pill fs-xs fw-medium text-body text-decoration-none py-1 px-2 me-2 mb-2" href="#" v-for="(filter, idx) in activeFilter" :key="idx">
                <span class="d-inline-flex align-items-center text-nowrap px-1"> {{ filter.text }}<i class="ai-circle-x fs-base ms-1"></i> </span>
              </a>
              <b-button size="sm" variant="secondary" rounded-pill class="fw-medium py-1 px-2">
                <span class="px-1">Remove all filters</span>
              </b-button>
            </div>
          </b-collapse>
        </div>
        <div class="d-flex align-items-center flex-shrink-0 mb-2">
          <span class="text-body-secondary text-nowrap fs-sm">Sort by:</span>
          <b-form-select class="form-select-flush py-0" :options="options" v-model="selected"> </b-form-select>
        </div>
      </div>
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <b-col class="pb-2 pb-sm-3" v-for="(card, idx) in decorationProducts" :key="idx">
          <TredingProductCard :product="card" />
        </b-col>
      </b-row>

      <!-- Pagination -->
      <b-row class="gy-3 align-items-center pt-3 pt-sm-4 mt-md-2">
        <b-col md="4" cols="6" order-md="1" order="1">
          <div class="d-flex align-items-center">
            <span class="text-body-secondary fs-sm">Show</span>
            <b-form-select class="form-select-flush w-auto" :options="option" v-model="select"> </b-form-select>
          </div>
        </b-col>
        <b-col md="4" cols="12" order-md="2" order="3" class="text-center">
          <b-button class="w-md-auto w-100" variant="primary">Load more products</b-button>
        </b-col>
        <b-col md="4" cols="6" order-md="3" order="2">
          <nav aria-label="Page navigation">
            <b-pagination size="sm" class="justify-content-end" hide-goto-end-buttons :limit="10" v-model="currentPage" :total-rows="rows"> </b-pagination>
          </nav>
        </b-col>
      </b-row>
    </b-col>
  </b-row>

  <!-- Sidebar toggle button -->
  <button @click="click" class="d-lg-none btn btn-sm fs-sm btn-primary w-100 rounded-0 fixed-bottom" type="button" data-bs-toggle="offcanvas" data-bs-target="#shopSidebar">
    <i class="ai-filter me-2"></i>
    Filters
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CatalogFilter from '@/views/pages/Shop/Catalog/components/CatalogFilter.vue'
import TredingProductCard from '@/views/pages/Shop/Catalog/components/TrendingProductCard.vue'
import { activeFilter } from '@/views/pages/Shop/Catalog/data'
import { decorationProducts } from '@/assets/products'
const selected = ref(null)
const options = [
  { value: null, text: 'Most popular' },
  { value: 'low-high', text: 'Low-High price' },
  { value: 'high-low', text: 'High-Low price' },
  { value: 'rating', text: 'Average rating' },
  { value: 'az', text: 'A-Z order' },
  { value: 'za', text: 'Z-A order' }
]
const select = ref(null)
const option = [
  { value: null, text: 12 },
  { value: 18, text: 18 },
  { value: 24, text: 24 },
  { value: 30, text: 30 }
]
const currentPage = ref(1)
const rows = ref(100)

const show = ref(false)

const click = () => {
  show.value = !show.value
}
</script>

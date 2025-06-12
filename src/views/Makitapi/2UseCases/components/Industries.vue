<template>
  <b-container class="py-5 mt-2 mt-sm-3 mt-md-4">
    <h2 class="h1 text-center pt-lg-3">Inventory Management</h2>
    <p class="pb-3 pb-md-4 mb-0 mb-sm-2 mb-lg-3 text-center">High-volume warehouses need precise real-time tracking of all material movements. Automated RFID systems eliminate manual scanning, reducing labor requirements while increasing accuracy and processing speed for both incoming and outgoing inventory transactions.</p>
    <b-row class="align-items-lg-center">
      <b-col md="6" lg="5" class="pb-2 pb-lg-0 mb-4 mb-md-0">
        <b-accordion class="accordion-alt">
          <template v-for="(item, index) in inventory" :key="index">
            <span @click="showInventory = item.key">
              <b-accordion-item class="mb-n3 mb-lg-n2 mb-xl-1" :visible="!index">
                <template #title>
                  <span>
                    {{ item.title }}
                  </span>
                </template>
                {{ item.description }}
              </b-accordion-item>
            </span>
          </template>
        </b-accordion>
      </b-col>
      <b-col md="6" lg="7" xl="6" class="offset-xl-1">
        <div class="ps-lg-4 ps-xl-0">
          <div class="binded-content">
            <template v-for="(item, index) in inventory" :key="index">
              <div class="binded-item" :class="showInventory === item.key && 'active'" :id="`${item.key}-img`">
                <img class="rounded-5" :src="item.image" alt="" />
              </div>
            </template>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
  <b-container class="py-5 mt-2 mt-sm-3 mt-md-4">
    <h2 class="h1 text-center pt-lg-3">Production control and WIP</h2>
    <p class="pb-3 pb-md-4 mb-0 mb-sm-2 mb-lg-3 text-center">Manufacturing facilities need precise real-time visibility of production activities and work-in-process transitions. Automated monitoring systems eliminate manual data entry, reducing labor requirements while increasing accuracy and production throughput for both WIP and finished goods.</p>
    <b-row class="align-items-lg-center">
      <b-col md="6" lg="5" class="pb-2 pb-lg-0 mb-4 mb-md-0">
        <b-accordion class="accordion-alt">
          <template v-for="(item, index) in production" :key="index">
            <span @click="showProduction = item.key">
              <b-accordion-item class="mb-n3 mb-lg-n2 mb-xl-1" :visible="!index">
                <template #title>
                  <span>
                    {{ item.title }}
                  </span>
                </template>
                {{ item.description }}
              </b-accordion-item>
            </span>
          </template>
        </b-accordion>
      </b-col>
      <b-col md="6" lg="7" xl="6" class="offset-xl-1">
        <div class="ps-lg-4 ps-xl-0">
          <div class="binded-content">
            <template v-for="(item, index) in production" :key="index">
              <div class="binded-item" :class="showProduction === item.key && 'active'" :id="`${item.key}-img`">
                <img class="rounded-5" :src="item.image" alt="" />
              </div>
            </template>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { inventory } from '@/views/Makitapi/1Landing/data'
import { production } from '@/views/Makitapi/1Landing/data'

// Separate refs for each section, initialized with first item's key
const showInventory = ref('gates')
const showProduction = ref('inline')
</script>

import production0 from '@/assets/img/useCases/production0.png'



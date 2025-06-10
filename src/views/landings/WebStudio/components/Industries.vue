<template>
  <b-container class="py-5 mt-2 mt-sm-3 mt-md-4">
    <h2 class="h1 text-center pt-lg-3">Inventory Management</h2>
    <p class="pb-3 pb-md-4 mb-0 mb-sm-2 mb-lg-3 text-center">High-volume warehouse and storage facilities face the continuous challenge of processing numerous material transactions. The critical operational objective is maintaining precise real-time knowledge of all warehouse movements—both incoming and outgoing items. The optimal solution streamlines inventory management with fully automated tracking systems that eliminate the need for manual scanning operations, reducing labor requirements while simultaneously increasing accuracy and processing speed.</p>
    <b-row class="align-items-lg-center">
      <b-col md="6" lg="5" class="pb-2 pb-lg-0 mb-4 mb-md-0">
        <b-accordion class="accordion-alt">
          <template v-for="(item, index) in industries" :key="index">
            <span @click="show = item.key">
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
            <template v-for="(item, index) in industries" :key="index">
              <div class="binded-item" :class="show === item.key && 'active'" :id="`${item.key}-img`">
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
    <p class="pb-3 pb-md-4 mb-0 mb-sm-2 mb-lg-3 text-center">High-volume manufacturing and assembly facilities face the continuous challenge of managing numerous production operations and work-in-process transitions. The critical operational objective is maintaining precise real-time visibility of all production activities—both work in process and finished goods. The optimal solution implements fully automated monitoring systems that eliminate the need for manual data entry operations, reducing labor requirements while simultaneously increasing accuracy and production throughput.</p>
    <b-row class="align-items-lg-center">
      <b-col md="6" lg="5" class="pb-2 pb-lg-0 mb-4 mb-md-0">
        <b-accordion class="accordion-alt">
          <template v-for="(item, index) in production" :key="index">
            <span @click="show = item.key">
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
              <div class="binded-item" :class="show === item.key && 'active'" :id="`${item.key}-img`">
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
import { industries } from '@/views/landings/WebStudio/data'
import { production } from '@/views/landings/WebStudio/data'
const show = ref('finance')
</script>

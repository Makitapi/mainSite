<template>
  <b-container class="py-5 mt-2 mt-sm-3 mt-md-4">
    <h2 class="h1 text-center pt-lg-3">{{ $t('useCases.production.title') }}</h2>
    <p class="pb-3 pb-md-4 mb-0 mb-sm-2 mb-lg-3 text-center">{{ $t('useCases.production.description') }}</p>
    <b-row class="align-items-lg-center">
      <b-col md="6" lg="5" class="pb-2 pb-lg-0 mb-4 mb-md-0">
        <b-accordion class="accordion-alt">
          <template v-for="(item, index) in translatedProduction" :key="index">
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
            <template v-for="(item, index) in translatedProduction" :key="index">
              <div class="binded-item" :class="showProduction === item.key && 'active'" :id="`${item.key}-img`">
                <img class="rounded-5" :src="item.image" alt="" />
              </div>
            </template>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
<b-container class="py-5 mt-2 mt-sm-3 mt-md-4">
    <h2 class="h1 text-center pt-lg-3">{{ $t('useCases.inventory.title') }}</h2>
    <p class="pb-3 pb-md-4 mb-0 mb-sm-2 mb-lg-3 text-center">{{ $t('useCases.inventory.description') }}</p>
    <b-row class="align-items-lg-center">
      <b-col md="6" lg="5" class="pb-2 pb-lg-0 mb-4 mb-md-0">
        <b-accordion class="accordion-alt">
          <template v-for="(item, index) in translatedInventory" :key="index">
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
            <template v-for="(item, index) in translatedInventory" :key="index">
              <div class="binded-item" :class="showInventory === item.key && 'active'" :id="`${item.key}-img`">
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
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { inventory, production } from '@/views/Makitapi/1Landing/data'

const { t } = useI18n()

// Separate refs for each section, initialized with first item's key
const showInventory = ref('vas')
const showProduction = ref('inline')

// Create translated versions of the inventory and production arrays
const translatedInventory = computed(() =>
  inventory.map(item => ({
    ...item,
    title: t(`useCasesItems.inventory.${item.key}.title`) || item.title,
    description: t(`useCasesItems.inventory.${item.key}.description`) || item.description
  }))
)

const translatedProduction = computed(() =>
  production.map(item => ({
    ...item,
    title: t(`useCasesItems.production.${item.key}.title`) || item.title,
    description: t(`useCasesItems.production.${item.key}.description`) || item.description
  }))
)
</script>

import production0 from '@/assets/img/useCases/production0.png'

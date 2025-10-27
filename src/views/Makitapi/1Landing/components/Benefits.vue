<template>
  <b-container class="py-5">
    <h2 class="h1 text-center">{{ $t('benefits.title') }}</h2>
    <p class="text-center pb-4 mb-2 mb-lg-3">{{ $t('benefits.subtitle') }}</p>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      <b-col v-for="(benefit, idx) in translatedBenefits" :key="idx">
        <ServiceCard :service="benefit" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ServiceCard from '@/views/Makitapi/1Landing/components/ServiceCard.vue'
import { Benefits } from '@/views/Makitapi/1Landing/data'

const { t } = useI18n()

const translatedBenefits = computed(() => {
  return Benefits.map((benefit) => ({
    ...benefit,
    title: t(`benefits.items.${Benefits.indexOf(benefit)}.title`),
    description: t(`benefits.items.${Benefits.indexOf(benefit)}.description`)
  }))
})
</script>

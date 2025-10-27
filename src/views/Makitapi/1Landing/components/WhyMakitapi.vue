<template>
  <b-container class="py-5">
    <h2 class="h1 text-center">{{ $t('whyMakitapi.title') }}</h2>
    <p class="text-center pb-4 mb-2 mb-lg-3">{{ $t('whyMakitapi.subtitle') }}</p>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      <b-col v-for="(item, idx) in translatedWhyMakitapi" :key="idx">
        <ServiceCard :service="item" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ServiceCard from '@/views/Makitapi/1Landing/components/ServiceCard.vue'
import { WhyMakitapi } from '@/views/Makitapi/1Landing/data'

const { t } = useI18n()

const translatedWhyMakitapi = computed(() => {
  return WhyMakitapi.map((item) => ({
    ...item,
    title: t(`whyMakitapi.items.${WhyMakitapi.indexOf(item)}.title`),
    description: t(`whyMakitapi.items.${WhyMakitapi.indexOf(item)}.description`)
  }))
})
</script>

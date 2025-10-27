<template>
  <b-dropdown v-if="enabledLanguages.length > 1" variant="link" class="ms-2">
    <template #button-content>
      <i class="ai-globe fs-lg me-1"></i>
      {{ $t('common.language') }}
    </template>
    <b-dropdown-item
      v-for="lang in enabledLanguages"
      :key="lang.code"
      @click="setLanguage(lang.code)"
      :active="$i18n.locale === lang.code"
    >
      {{ lang.name }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { enabledLanguages } from '@/helpers/languages'

const { locale } = useI18n()

const setLanguage = (code: string) => {
  locale.value = code
  localStorage.setItem('userLanguage', code)
}
</script>

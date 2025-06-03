<template>
  <label class="form-label" :class="labelClass" v-if="label">{{ label }}</label>
  <div class="position-relative">
    <b-form-input :size="size ?? 'lg'" :type="type ?? 'text'" :id="id" :placeholder="placeholder" :value="modelValue" :class="customClass" @input="updateValue" v-bind="$attrs" class="date-picker" />
    <i class="ai-calendar position-absolute top-50 end-0 translate-middle-y fs-lg text-white opacity-80 me-3"></i>
  </div>
</template>

<script setup lang="ts">
import flatpickr from 'flatpickr'

import { onMounted } from 'vue'
import type { InputType } from 'bootstrap-vue-next'

type FlatPickerProps = {
  label?: string
  type?: InputType
  customClass?: string
  labelClass?: string
  placeholder?: string
  size?: 'lg' | 'md' | 'sm'
  id: string
  modelValue?: string
  options?: object
}

const props = defineProps<FlatPickerProps>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

onMounted(() => {
  const ele = document.getElementById(props.id)
  if (ele) {
    flatpickr(ele, { ...props.options, defaultDate: props.modelValue })
  }
})
</script>

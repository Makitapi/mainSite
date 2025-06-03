<template>
  <div class="position-relative">
    <i class="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y ms-3" v-if="icon"></i>
    <label class="form-label" :class="labelClass" :for="id ?? 'form-password'" v-if="label">{{ label ?? 'Enter password' }}</label>
    <div class="password-toggle">
      <input class="form-control" :type="showPassword ? 'text' : 'password'" :id="id ?? 'form-password'" :class="inputClass" :placeholder="placeHolder" :value="modelValue" @input="updateValue" v-bind="$attrs" />
      <label class="password-toggle-btn" aria-label="Show/hide password"> <input class="password-toggle-check" type="checkbox" /><span @click="setShowPassword" class="password-toggle-indicator"></span> </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type PasswordInputPropType = {
  id?: string
  value?: string
  label?: string
  labelClass?: string
  inputClass?: string
  placeHolder?: string
  error?: string
  modelValue?: string
  icon?: boolean
}

defineProps<PasswordInputPropType>()

const showPassword = ref<boolean>(false)

const setShowPassword = () => {
  return (showPassword.value = !showPassword.value)
}

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div 
    :style="cardStyle"
    @mouseenter="onHover"
    @mouseleave="onLeave"
    class="text-decoration-none"
  >
    <div :style="cardBodyStyle">
      <div :style="iconStyle">
        <span v-html="service.image" />
      </div>
      <h3 :style="titleStyle">{{ service.title }}</h3>
      <p :style="textStyle">{{ service.description }}</p>
    </div>
    <div :style="footerStyle">
      <!-- Footer content if needed -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import type { ServiceType } from '@/views/landings/CreativeAgency/types'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})

const isHovered = ref(false)

const cardStyle = computed(() => ({
  backgroundColor: 'var(--card-bg)',
  borderRadius: '18px',
  padding: '1rem',
  transition: 'all 0.3s ease',
  boxShadow: isHovered.value 
    ? '0 8px 30px rgba(0, 0, 0, 0.3)' 
    : '0 4px 20px rgba(0, 0, 0, 0.1)',
  transform: isHovered.value ? 'translateY(-5px)' : 'translateY(0)',
  display: 'block',
  height: '100%',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: 'inherit'
}))

const cardBodyStyle = computed(() => ({
  paddingBottom: '0'
}))

const iconStyle = computed(() => ({
  width: '60px',
  height: '60px',
  marginBottom: '1.2rem',
  borderRadius: '15px',
  background: 'linear-gradient(135deg, #0051a3, #0080ff)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const titleStyle = computed(() => ({
  fontSize: '1.25rem',
  fontWeight: '600',
  marginTop: '0',
  marginBottom: '0.5rem',
  color: 'inherit'
}))

const textStyle = computed(() => ({
  marginBottom: '1rem',
  color: 'inherit',
  opacity: '0.8'
}))

const footerStyle = computed(() => ({
  border: '0',
  padding: '.5rem 0',
  margin: '.5rem 0',
  marginBottom: '0rem'
}))

const onHover = () => {
  isHovered.value = true
}

const onLeave = () => {
  isHovered.value = false
}
</script>
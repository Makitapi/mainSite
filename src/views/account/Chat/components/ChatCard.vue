<template>
  <div class="text-body-secondary text-center" :class="idx ? 'my-4' : 'mb-4'">{{ message.date }}</div>
  <div v-for="(item, idx) in message.messages" :key="idx" :class="idx % 2 === 1 ? 'ms-auto' : ''" class="mb-3" style="max-width: 392px">
    <div class="d-flex align-items-end mb-2">
      <div class="flex-shrink-0 pe-2 me-1" v-if="!item.isSentByCurrentUser">
        <img class="rounded-circle" :src="item.avatar" width="48" alt="Avatar" />
      </div>
      <div :class="item.isSentByCurrentUser ? 'message-box-end bg-primary text-white' : 'message-box-start text-dark'">
        {{ item.content }}
      </div>
      <div class="flex-shrink-0 ps-2 ms-1" v-if="item.isSentByCurrentUser">
        <img class="rounded-circle" :src="item.avatar" width="48" alt="Avatar" />
      </div>
    </div>
    <div class="fs-xs text-body-secondary" :class="!item.isSentByCurrentUser ? 'text-end' : ''">
      <i class="ai-check text-primary fs-xl mt-n1 me-1" v-if="item.isSentByCurrentUser && item.isReceived" />
      <i class="ai-checks text-primary fs-xl mt-n1 me-1" v-if="item.isSentByCurrentUser && item.isRead" />
      {{ item.timestamp }}
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { messageType } from '@/views/account/Chat/types'

defineProps({
  message: {
    type: Object as PropType<messageType>,
    required: true
  },
  idx: {
    type: Number,
    required: true
  }
})
</script>

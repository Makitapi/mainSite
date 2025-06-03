<template>
  <AccountLayout>
    <b-col lg="9" class="pt-4 pb-2 pb-sm-4">
      <h1 class="h2 mb-4">Chats</h1>
      <b-row class="position-relative overflow-hidden gx-2 z-1">
        <ContactList :showOffcanvas="showOffcanvas" :toggleOffcanvas="toggleOffcanvas" />
        <Chat :toggleOffcanvas="toggleOffcanvas" />
      </b-row>
    </b-col>
  </AccountLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AccountLayout from '@/layouts/AccountLayout.vue'
import ContactList from '@/views/account/Chat/components/ContactList.vue'
import Chat from '@/views/account/Chat/components/Chat.vue'

const showOffcanvas = ref(false)

const toggleOffcanvas = () => {
  showOffcanvas.value = !showOffcanvas.value
}
</script>

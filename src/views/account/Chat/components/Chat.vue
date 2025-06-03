<template>
  <b-col xl="8">
    <b-card no-body class="h-100 border-0">
      <div class="navbar card-header w-100 mx-0 px-4 my-0">
        <div class="d-flex align-items-center w-100 px-sm-3">
          <button class="navbar-toggler d-xl-none me-3 me-sm-4" type="button" @click="props.toggleOffcanvas">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="position-relative flex-shrink-0">
            <img class="rounded-circle" :src="avatar19" width="48" alt="Avatar" />
            <span class="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style="width: 0.625rem; height: 0.625rem"></span>
          </div>
          <div class="h6 ps-2 ms-1 mb-0">Mark Virgows</div>
          <b-dropdown class="ms-auto" no-caret menu-class="dropdown-menu-end my-1" variant="link" toggle-class="p-0 m-0">
            <template #button-content>
              <button class="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-n2" type="button" data-bs-toggle="dropdown" aria-label="Actions">
                <i class="ai-dots-vertical fs-4 fw-bold"></i>
              </button>
            </template>
            <b-dropdown-item href="#">
              <i class="ai-user fs-base opacity-80 me-2"></i>
              View profile
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <i class="ai-bell-off fs-base opacity-80 me-2"></i>
              Disable notifications
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <i class="ai-edit fs-base opacity-80 me-2"></i>
              Edit contact
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <i class="ai-trash fs-base opacity-80 me-2"></i>
              Delete contact
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <i class="ai-logout fs-base opacity-80 me-2"></i>
              Leave chat
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <i class="ai-circle-slash fs-base opacity-80 me-2"></i>
              Block user
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <Simplebar class="card-body pb-0 pt-4" data-simplebar style="max-height: 580px">
        <template v-for="(message, idx) in messages" :key="idx">
          <ChatCard :message="message" :idx="idx" />
        </template>
      </Simplebar>

      <div class="card-footer w-100 border-0 mx-0 px-4">
        <div class="d-flex align-items-end border rounded-3 pb-3 pe-3 mx-sm-3">
          <textarea class="form-control border-0" rows="3" placeholder="Type a message" style="resize: none"></textarea>
          <div class="nav flex-nowrap align-items-center">
            <a class="nav-link text-body-secondary p-1 me-1" href="#" aria-label="Attach">
              <i class="ai-paperclip fs-xl"></i>
            </a>
            <a class="nav-link text-body-secondary p-1" href="#" aria-label="Emoji">
              <i class="ai-emoji-smile fs-xl"></i>
            </a>
            <b-button size="sm" variant="secondary" class="ms-3" type="button">Send</b-button>
          </div>
        </div>
      </div>
    </b-card>
  </b-col>
</template>

<script lang="ts" setup>
import Simplebar from 'simplebar-vue'
import { messages } from '@/views/account/Chat/data'
import ChatCard from '@/views/account/Chat/components/ChatCard.vue'
import avatar19 from '@/assets/img/avatar/19.jpg'
const props = defineProps(['toggleOffcanvas'])
</script>

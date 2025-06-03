<template>
  <b-card no-body class="border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
    <b-card-body>
      <div class="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3">
        <i class="ai-lock-closed text-primary lead pe-1 me-2"></i>
        <h2 class="h4 mb-0">Password change</h2>
      </div>
      <b-row class="align-items-center g-3 g-sm-4 pb-3">
        <b-col sm="6">
          <PasswordInput label="Current password" v-model="currentPassword" id="currentPassword" />
        </b-col>
        <b-col sm="6">
          <router-link class="d-inline-block fs-sm fw-semibold text-decoration-none mt-sm-4" :to="{ name: 'auth.password-recovery' }">Forgot password? </router-link>
        </b-col>
        <b-col sm="6">
          <PasswordInput label="New password" v-model="newPassword" id="newPassword" />
        </b-col>
        <b-col sm="6">
          <PasswordInput label="Confirm new password" v-model="confirmPassword" id="confirmPassword" />
        </b-col>
      </b-row>
      <div class="alert alert-info d-flex my-3 my-sm-4">
        <i class="ai-circle-info fs-xl me-2"></i>
        <p class="mb-0">Password must be minimum 8 characters long - the more, the better.</p>
      </div>
      <div class="d-flex justify-content-end pt-3">
        <button class="btn btn-secondary" type="button">Cancel</button>
        <button class="btn btn-primary ms-3" type="button">Save changes</button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import PasswordInput from '@/components/PasswordInput.vue'
import { ref } from 'vue'

const currentPassword = ref('hidden@password')
const newPassword = ref('')
const confirmPassword = ref('')
</script>

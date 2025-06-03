<template>
  <main class="page-wrapper vh-100">
    <div class="d-lg-flex position-relative h-100">
      <router-link class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" :to="{ name: 'landing' }" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home" aria-label="Back to home">
        <i class="ai-home"></i>
      </router-link>

      <div class="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">
        <div class="w-100 mt-auto" style="max-width: 526px">
          <h1>No account? Sign up</h1>
          <p class="pb-3 mb-3 mb-lg-4">Have an account already?&nbsp;&nbsp;<router-link :to="{ name: 'auth.sign-in' }">Sign in here! </router-link></p>
          <b-form class="needs-validation">
            <b-row class="row-cols-1 row-cols-sm-2">
              <b-col class="mb-4">
                <b-form-input class="form-control-lg" type="text" placeholder="Your name" required />
              </b-col>
              <b-col class="mb-4">
                <b-form-input class="form-control-lg" v-model="newUserData.email" type="email" placeholder="Email address" required />
              </b-col>
            </b-row>
            <div class="mb-4">
              <PasswordInput v-model="newUserData.password" id="password" autocomplete="" place-holder="Password" />
            </div>
            <div class="mb-4">
              <PasswordInput v-model="newUserData.confirmPassword" id="confirm-password" autocomplete="" place-holder="Confirm password" />
            </div>
            <div class="pb-4">
              <b-form-checkbox id="terms" class="">I agree to <a href="#">Terms & Conditions</a></b-form-checkbox>
            </div>
            <b-button size="lg" variant="primary" class="btn-lg w-100 mb-4" type="submit">Sign up</b-button>

            <h2 class="h6 text-center pt-3 pt-lg-4 mb-4">Or sign in with your social account</h2>
            <b-row class="row-cols-1 row-cols-sm-2 gy-3">
              <b-col>
                <a class="btn btn-icon btn-outline-secondary btn-google btn-lg w-100" href="#">
                  <i class="ai-google fs-xl me-2"></i>
                  Google
                </a>
              </b-col>
              <b-col>
                <a class="btn btn-icon btn-outline-secondary btn-facebook btn-lg w-100" href="#">
                  <i class="ai-facebook fs-xl me-2"></i>
                  Facebook
                </a>
              </b-col>
            </b-row>
          </b-form>
        </div>

        <p class="nav w-100 fs-sm pt-5 mt-auto mb-5" style="max-width: 526px">
          <span class="text-body-secondary">&copy; All rights reserved. Made by</span>
          <a class="nav-link d-inline-block p-0 ms-1" :href="developedByLink" target="_blank" rel="noopener">{{ developedBy }}</a>
        </p>
      </div>

      <div class="w-50 bg-size-cover bg-repeat-0 bg-position-center" :style="{ backgroundImage: `url('${coverImg}')` }"></div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { developedBy, developedByLink } from '@/helpers/constants'
import PasswordInput from '@/components/PasswordInput.vue'

import coverImg from '@/assets/img/account/cover.jpg'

const newUserData = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})
</script>

<template>
  <main class="page-wrapper vh-100">
    <div class="d-lg-flex position-relative h-100">
      <router-link class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" :to="{ name: 'landing' }" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home" aria-label="Back to home">
        <i class="ai-home"></i>
      </router-link>

      <div class="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">
        <div class="w-100 mt-auto" style="max-width: 526px">
          <h1>Sign in to Around</h1>
          <p class="pb-3 mb-3 mb-lg-4">Don't have an account yet?&nbsp;&nbsp;<router-link :to="{ name: 'auth.sign-up' }">Register here! </router-link></p>
          <b-form class="needs-validation" @submit.prevent="handleSignIn">
            <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

            <div class="pb-3 mb-3">
              <div class="position-relative">
                <i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <b-form-input class="form-control-lg ps-5" v-model="credentials.email" type="email" placeholder="Email address" required />
              </div>
            </div>
            <div class="mb-4">
              <PasswordInput v-model="credentials.password" name="password" place-holder="" autocomplete="" inputClass="ps-5" :icon="true" />
            </div>
            <div class="d-flex flex-wrap align-items-center justify-content-between pb-4">
              <b-form-checkbox class="my-1" v-model="checked" id="keep-signedin"> Keep me signed in </b-form-checkbox>
              <router-link class="fs-sm fw-semibold text-decoration-none my-1" :to="{ name: 'auth.password-recovery' }">Forgot password? </router-link>
            </div>
            <b-button size="lg" variant="primary" class="w-100 mb-4" type="submit">Sign in</b-button>

            <h2 class="h6 text-center pt-3 pt-lg-4 mb-4">Or sign in with your social account</h2>
            <b-row class="row-cols-1 row-cols-sm-2 gy-3">
              <b-col>
                <b-button variant="outline-secondary" class="btn-icon btn-google btn-lg w-100" href="#">
                  <i class="ai-google fs-xl me-2"></i>
                  Google
                </b-button>
              </b-col>
              <b-col>
                <b-button variant="outline-secondary" class="btn-icon btn-facebook btn-lg w-100" href="#">
                  <i class="ai-facebook fs-xl me-2"></i>
                  Facebook
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </div>

        <!-- Copyright -->
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
import { reactive, ref } from 'vue'
import * as yup from 'yup'
import { useRoute } from 'vue-router'
import type { AxiosResponse } from 'axios'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'
import { developedBy, developedByLink } from '@/helpers/constants'
import PasswordInput from '@/components/PasswordInput.vue'
import HttpClient from '@/helpers/http-client'
import type { UserType } from '@/types/auth'

import coverImg from '@/assets/img/account/cover.jpg'

const credentials = reactive({
  id: '1',
  email: 'user@email.com',
  password: 'password'
})

const useAuth = useAuthStore()
const route = useRoute()
const query = route.query

const error = ref('')

const loginFormSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().required('Please enter your password')
})

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/')
}

const handleSignIn = async () => {
  let user = {}
  await loginFormSchema
    .validate(credentials)
    .then((res) => (user = res))
    .catch((e) => {
      return (error.value = e.message)
    })

  try {
    const res: AxiosResponse<UserType> = await HttpClient.post('/login', user)

    if (res.data.token) {
      useAuth.saveSession({
        ...res.data,
        token: res.data.token
      })
      redirectUser()
    }
  } catch (e: any) {
    if (e.response?.data?.error) {
      if (error.value.length == 0) error.value = e.response?.data?.error
    }
  }
}

const checked = ref(false)
</script>

<template>
  <main class="page-wrapper vh-100">
    <div class="d-flex flex-column position-relative h-100 pt-5">
      <router-link class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 z-2 p-0 mt-3 me-3 mt-sm-4 me-sm-4" :to="{ name: 'landing' }" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home" aria-label="Back to home">
        <i class="ai-home"></i>
      </router-link>

      <b-container class="mt-auto">
        <b-row class="align-items-center">
          <!-- Sign in form -->
          <b-col md="6" class="mb-5 mb-md-0">
            <b-card no-body class="border-0 bg-primary py-md-3 py-lg-4 px-lg-4 px-xl-5" data-bs-theme="dark">
              <b-card-body>
                <h1 class="py-2 pb-lg-3">Sign in to Around</h1>
                <b-form @submit.prevent="handleSignIn">
                  <div class="pb-3 mb-3">
                    <div class="position-relative">
                      <i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y text-light opacity-80 ms-3"></i>
                      <b-form-input class="form-control-lg ps-5" type="email" v-model="credentials.email" placeholder="Email address" required />
                    </div>
                  </div>
                  <div class="mb-4">
                    <PasswordInput v-model="credentials.password" name="passeword" autocomplete="" :icon="true" input-class="ps-5" />
                  </div>
                  <div class="d-flex flex-wrap align-items-center justify-content-between pb-4">
                    <b-form-checkbox class="my-1" id="keep-signedin"> Keep me signed in </b-form-checkbox>
                    <router-link class="text-light fs-sm fw-semibold text-decoration-none my-1" :to="{ name: 'auth.password-recovery' }">Forgot password? </router-link>
                  </div>
                  <b-button class="w-100 mb-4" size="lg" variant="light" type="submit">Sign in</b-button>

                  <h2 class="h6 text-center pt-3 pt-lg-4 mb-4">Or sign in with your social account</h2>
                  <b-row class="row-cols-1 row-cols-sm-2 gy-3 pb-2">
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
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Sign up form -->
          <b-col md="6" xl="5" offset-xl="1">
            <div class="ps-md-3 ps-lg-5 ps-xl-0">
              <h2 class="h1 pb-2 pb-lg-3">No account? Sign up</h2>
              <b-form class="needs-validation">
                <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                  <b-col class="mb-4">
                    <b-form-input class="form-control-lg" type="text" placeholder="Your name" required />
                  </b-col>
                  <b-col class="mb-4">
                    <b-form-input class="form-control-lg" v-model="newUserData.email" type="email" placeholder="Email address" required />
                  </b-col>
                </b-row>
                <div class="mb-4">
                  <PasswordInput v-model="newUserData.password" name="passeword" place-holder="Password" autocomplete="" />
                </div>
                <div class="mb-4">
                  <PasswordInput v-model="newUserData.confirmPassword" place-holder="Confirm password" autocomplete="" />
                </div>
                <div class="pb-4">
                  <b-form-checkbox class="my-2">I agree to <a href="#">Terms &amp; Conditions</a></b-form-checkbox>
                </div>
                <b-button size="lg" variant="primary" class="w-100 mb-4" type="submit">Sign up </b-button>

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
          </b-col>
        </b-row>
      </b-container>

      <b-container class="nav fs-sm pt-5 mt-auto mb-5">
        <span class="text-body-secondary">&copy; All rights reserved. Made by</span>
        <a class="nav-link d-inline-block p-0 ms-1" :href="developedByLink" target="_blank" rel="noopener">{{ developedBy }}</a>
      </b-container>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { AxiosResponse } from 'axios'
import * as yup from 'yup'
import { developedBy, developedByLink } from '@/helpers/constants'
import PasswordInput from '@/components/PasswordInput.vue'
import { useRoute } from 'vue-router'
import type { UserType } from '@/types/auth'
import httpClient from '@/helpers/http-client'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'

const useAuth = useAuthStore()

const credentials = reactive({
  id: '1',
  email: 'user@email.com',
  password: 'password'
})

const newUserData = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

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
    const res: AxiosResponse<UserType> = await httpClient.post('/login', user)

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
</script>

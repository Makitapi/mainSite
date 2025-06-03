<template>
  <b-row class="pb-1 pb-sm-3 pb-lg-4">
    <b-col lg="4" class="pe-xxl-4">
      <h1 class="display-2">Contacts</h1>
      <p class="fs-lg pb-4 mb-0 mb-sm-2">Get in touch with us by completing the below form or call us now</p>
    </b-col>
    <b-col lg="8" xl="7" class="offset-xl-1">
      <b-form class="row g-4 needs-validation" novalidate>
        <b-col sm="6">
          <b-form-group label="Name">
            <b-form-input size="lg" type="text" placeholder="Your name" required id="name" />
            <b-form-invalid-feedback>Please enter your name!</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Email">
            <b-form-input size="lg" type="email" placeholder="Email address" required id="email" />
            <b-form-invalid-feedback>Please provide a valid email address!</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Phone">
            <b-form-input size="lg" type="text" placeholder="Phone number" id="phone" />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Location">
            <b-form-select size="lg" v-model="selectedLocation" :options="locationOptions" />
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <b-form-group label="How can we help?">
            <b-form-textarea size="lg" rows="5" placeholder="Enter your message here..." required id="message"></b-form-textarea>
            <b-form-invalid-feedback>Please enter your message!</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <b-form-checkbox inline>I agree to the <a class="nav-link d-inline fs-normal text-decoration-underline p-0" href="#">Terms &amp; Conditions</a></b-form-checkbox>
        </b-col>
        <b-col sm="12" class="pt-2">
          <b-button size="lg" variant="primary" type="submit">Send a request</b-button>
        </b-col>
      </b-form>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const locationOptions = [
  { value: 'All locations', text: 'All locations' },
  { value: 'Asia and Pacific', text: 'Asia and Pacific' },
  { value: 'Central Europe', text: 'Central Europe' },
  { value: 'Eastern Europe', text: 'Eastern Europe' },
  { value: 'North America', text: 'North America' },
  { value: 'South America', text: 'South America' }
]

const selectedLocation = ref()
</script>

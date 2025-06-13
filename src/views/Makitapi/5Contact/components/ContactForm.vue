<template>
  <b-row>
    <b-col lg="4" class="pe-xxl-4">
      <h1 class="display-2">Contacts</h1>
      <p class="fs-lg pb-4 mb-0 mb-sm-2">We'd love to hear from you, get in touch.</p>
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
            <b-form-invalid-feedback>Please provide a valid email address.</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Company">
            <b-form-input size="lg" type="text" placeholder="Your company" id="company" />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Phone">
            <b-form-input size="lg" type="text" placeholder="Phone number" id="phone" />
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <b-form-group label="How can we help?">
            <b-form-textarea size="lg" rows="5" placeholder="Enter your message here..." required id="message"></b-form-textarea>
            <b-form-invalid-feedback>Please enter your message.</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="12" class="pt-1">
          <b-button size="lg" variant="primary" type="submit">Send</b-button>
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

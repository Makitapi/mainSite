<template>
  <b-row>
    <b-col lg="4" class="pe-xxl-4">
      <h1 class="display-2">{{ $t('contact.title') }}</h1>
      <p class="fs-lg pb-4 mb-0 mb-sm-2" v-html="$t('contact.description')"></p>
                  <h2 class="h4 mb-4">{{ contactDetails[0].title }}</h2>
          <ul class="list-unstyled mb-0">
            <!-- <li class="nav flex-nowrap mb-3">
              <i class="ai-mail lead text-primary me-2"></i>
              <a class="nav-link fw-normal p-0 mt-n1" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </li> -->
            <li class="nav flex-nowrap mb-3">
              <i class="ai-map-pin lead text-primary me-2"></i>
              <p class="nav-link fw-normal p-0 mt-n1" to="#">{{ contactDetails[0].address }}</p>
            </li>
            <!-- <li class="nav flex-nowrap mb-3">
              <i class="ai-phone lead text-primary me-2"></i>
              <a class="nav-link fw-normal p-0 mt-n1" href="tel:+178632256040">{{ contactDetails[0].mobileNo }}</a>
            </li> -->
          </ul>
    </b-col>
    <b-col lg="8" xl="7" class="offset-xl-1">
      <!-- Thank you message -->
      <div v-if="showThankYou" class="alert alert-success mb-4" role="alert">
        <h4 class="alert-heading">{{ $t('contact.thankYou.title') }}</h4>
        <p class="mb-0">{{ $t('contact.thankYou.message') }}</p>
      </div>
      
      <!-- Contact form -->
      <b-form 
        v-else
        class="row g-4 needs-validation" 
        action="https://formspree.io/f/mgvaqqlk" 
        method="POST"
        @submit="handleSubmit"
        novalidate
      >
        <b-col sm="6">
          <b-form-group :label="$t('contact.form.nameLabel')">
            <b-form-input
              size="lg"
              type="text"
              name="name"
              :placeholder="$t('contact.form.namePlaceholder')"
              required
              id="name"
              v-model="formFields.name"
            />
            <b-form-invalid-feedback>{{ $t('contact.validation.name') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group :label="$t('contact.form.emailLabel')">
            <b-form-input
              size="lg"
              type="email"
              name="email"
              :placeholder="$t('contact.form.emailPlaceholder')"
              required
              id="email"
              v-model="formFields.email"
            />
            <b-form-invalid-feedback>{{ $t('contact.validation.email') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group :label="$t('contact.form.companyLabel')">
            <b-form-input
              size="lg"
              type="text"
              name="company"
              :placeholder="$t('contact.form.companyPlaceholder')"
              id="company"
              v-model="formFields.company"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group :label="$t('contact.form.phoneLabel')">
            <b-form-input
              size="lg"
              type="text"
              name="phone"
              :placeholder="$t('contact.form.phonePlaceholder')"
              id="phone"
              v-model="formFields.phone"
            />
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <b-form-group :label="$t('contact.form.messageLabel')">
            <b-form-textarea
              size="lg"
              rows="5"
              name="message"
              :placeholder="$t('contact.form.messagePlaceholder')"
              required
              id="message"
              v-model="formFields.message"
            ></b-form-textarea>
            <b-form-invalid-feedback>{{ $t('contact.validation.message') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="12" class="pt-1">
          <b-button
            size="lg"
            variant="primary"
            type="submit"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? $t('contact.form.submittingButton') : $t('contact.form.submitButton') }}
          </b-button>
        </b-col>
      </b-form>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const locationOptions = [
  { value: 'All locations', text: 'All locations' },
  { value: 'Asia and Pacific', text: 'Asia and Pacific' },
  { value: 'Central Europe', text: 'Central Europe' },
  { value: 'Eastern Europe', text: 'Eastern Europe' },
  { value: 'North America', text: 'North America' },
  { value: 'South America', text: 'South America' }
]

const selectedLocation = ref()
const showThankYou = ref(false)
const isSubmitting = ref(false)

const formFields = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: ''
})

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  
  const form = event.target as HTMLFormElement
  
  // Basic validation
  if (!form.checkValidity()) {
    event.stopPropagation()
    form.classList.add('was-validated')
    return
  }
  
  isSubmitting.value = true
  
  try {
    const formData = new FormData(form)
    const response = await fetch('https://formspree.io/f/mgvaqqlk', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      showThankYou.value = true
      // Reset form data
      Object.keys(formFields).forEach(key => {
        formFields[key as keyof typeof formFields] = ''
      })
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

import { contactDetails } from '@/views/Makitapi/5Contact/data'
</script>

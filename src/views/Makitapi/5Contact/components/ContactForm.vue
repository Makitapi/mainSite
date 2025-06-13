<template>
  <b-row>
    <b-col lg="4" class="pe-xxl-4">
      <h1 class="display-2">Contacts</h1>
      <p class="fs-lg pb-4 mb-0 mb-sm-2">We'd love to hear from you, get in touch.</p>
    </b-col>
    <b-col lg="8" xl="7" class="offset-xl-1">
      <!-- Thank you message -->
      <div v-if="showThankYou" class="alert alert-success mb-4" role="alert">
        <h4 class="alert-heading">Thank you for reaching out!</h4>
        <p class="mb-0">We've received your message and will get back to you soon.</p>
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
          <b-form-group label="Name">
            <b-form-input 
              size="lg" 
              type="text" 
              name="name"
              placeholder="Your name" 
              required 
              id="name"
              v-model="formFields.name" 
            />
            <b-form-invalid-feedback>Please enter your name!</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Email">
            <b-form-input 
              size="lg" 
              type="email" 
              name="email"
              placeholder="Email address" 
              required 
              id="email"
              v-model="formFields.email" 
            />
            <b-form-invalid-feedback>Please provide a valid email address.</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Company">
            <b-form-input 
              size="lg" 
              type="text" 
              name="company"
              placeholder="Your company" 
              id="company"
              v-model="formFields.company" 
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Phone">
            <b-form-input 
              size="lg" 
              type="text" 
              name="phone"
              placeholder="Phone number" 
              id="phone"
              v-model="formFields.phone" 
            />
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <b-form-group label="How can we help?">
            <b-form-textarea 
              size="lg" 
              rows="5" 
              name="message"
              placeholder="Enter your message here..." 
              required 
              id="message"
              v-model="formFields.message"
            ></b-form-textarea>
            <b-form-invalid-feedback>Please enter your message.</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="12" class="pt-1">
          <b-button 
            size="lg" 
            variant="primary" 
            type="submit"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Sending...' : 'Send' }}
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
</script>
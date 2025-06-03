<template>
  <b-card no-body class="border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
    <b-card-body>
      <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
        <i class="ai-user text-primary lead pe-1 me-2"></i>
        <h2 class="h4 mb-0">Basic info</h2>
      </div>
      <div class="d-flex align-items-center">
        <b-dropdown no-caret variant="link" toggle-class="p-0 m-0" menu-class="my-1">
          <template #button-content>
            <a class="d-flex flex-column justify-content-end position-relative overflow-hidden rounded-circle bg-size-cover bg-position-center flex-shrink-0" href="#" data-bs-toggle="dropdown" aria-expanded="false" :style="`width: 80px; height: 80px; background-image: url(${avatar2});`" aria-label="Upload picture">
              <span class="d-block text-light text-center lh-1 pb-1" style="background-color: rgba(0, 0, 0, 0.5)">
                <i class="ai-camera"></i>
              </span>
            </a>
          </template>
          <b-dropdown-item class="fw-normal" href="#">
            <i class="ai-camera fs-base opacity-70 me-2"></i>
            Upload new photo
          </b-dropdown-item>
          <b-dropdown-item class="text-danger fw-normal" href="#">
            <i class="ai-trash fs-base me-2"></i>
            Delete photo
          </b-dropdown-item>
        </b-dropdown>
        <div class="ps-3">
          <h3 class="h6 mb-1">Profile picture</h3>
          <p class="fs-sm text-body-secondary mb-0">PNG or JPG no bigger than 1000px wide and tall.</p>
        </div>
      </div>
      <b-row class="g-3 g-sm-4 mt-0 mt-lg-2">
        <b-col sm="6">
          <b-form-group label="First name" label-for="fn">
            <b-form-input id="fn" type="text" placeholder="Isabella" />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Last name" label-for="ln">
            <b-form-input id="ln" type="text" placeholder="Bocouse" />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Email address" label-for="email">
            <b-form-input id="email" type="email" placeholder="bocouse@example.com" />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <label class="form-label" for="phone">Phone <span class="text-body-secondary">(optional)</span></label>
          <input class="form-control" type="tel" data-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}' placeholder="+1 ___ ___ __" id="phone" />
        </b-col>
        <b-col sm="6">
          <label class="form-label" for="country">Country</label>
          <b-form-select v-model="selectedCountry" :options="countryOptions" />
        </b-col>
        <b-col sm="6">
          <label class="form-label" for="language">Language</label>
          <b-form-select v-model="selectedLanguage" :options="languageOptions" class="form-select" id="language" />
        </b-col>
        <b-col sm="6">
          <label class="form-label" for="timezone">Time zone</label>
          <b-form-select v-model="selectedTimeZone" :options="timeZoneOptions" class="form-select" id="timezone" />
        </b-col>
        <b-col sm="6">
          <label class="form-label" for="currency">Currency</label>
          <b-form-select v-model="selectedCurrency" :options="currencyOptions" class="form-select" id="currency" />
        </b-col>
        <b-col cols="12">
          <b-form-group label="Bio" label-for="bio">
            <b-form-textarea id="bio" placeholder="Add a bio" rows="5" />
          </b-form-group>
        </b-col>
        <b-col cols="12" class="d-sm-flex align-items-center pt-sm-2 pt-md-3">
          <div class="form-label text-body-secondary mb-2 mb-sm-0 me-sm-4">Gender:</div>
          <BFormRadioGroup class="mt-2">
            <b-form-radio name="gender" value="Male">Male</b-form-radio>
            <b-form-radio name="gender" value="Female" checked>Female</b-form-radio>
            <b-form-radio name="gender" value="other">other</b-form-radio>
          </BFormRadioGroup>
        </b-col>
        <b-col cols="12" class="d-sm-flex align-items-center">
          <div class="form-label text-body-secondary mb-2 mb-sm-0 me-sm-4">Communication:</div>
          <BFormRadioGroup>
            <BFormCheckbox id="c-email" name="com-email" inline checked> Email</BFormCheckbox>
            <BFormCheckbox id="c-phone" name="com-phone" inline> Phone</BFormCheckbox>
          </BFormRadioGroup>
        </b-col>
        <b-col cols="12" class="d-flex justify-content-end pt-3">
          <b-button variant="secondary" type="button">Cancel</b-button>
          <b-button variant="primary" class="ms-3" type="button">Save changes</b-button>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import avatar2 from '@/assets/img/avatar/02.jpg'

const countryOptions = [
  { value: '', text: 'Select country', disabled: true },
  { value: 'Australia', text: 'Australia' },
  { value: 'Belgium', text: 'Belgium' },
  { value: 'Canada', text: 'Canada' },
  { value: 'Denmark', text: 'Denmark' },
  { value: 'USA', text: 'USA' }
]

const languageOptions = [
  { value: '', text: 'Select language', disabled: true },
  { value: 'English', text: 'English' },
  { value: 'Français', text: 'Français' },
  { value: 'Deutsch', text: 'Deutsch' },
  { value: 'Italiano', text: 'Italiano' }
]
const currencyOptions = [
  { value: '', text: 'Select currency', disabled: true },
  { value: 'usd', text: '$ USD' },
  { value: 'eur', text: '€ EUR' },
  { value: 'ukp', text: '£ UKP' },
  { value: 'jpy', text: '¥ JPY' }
]

const timeZoneOptions = [
  { value: '', text: 'Select time zone', disabled: true },
  { value: 'AST', text: 'Atlantic Standard Time (AST)' },
  { value: 'EST', text: 'Eastern Standard Time (EST)' },
  { value: 'CST', text: 'Central Standard Time (CST)' },
  { value: 'MST', text: 'Mountain Standard Time (MST)' },
  { value: 'PST', text: 'Pacific Standard Time (PST)' },
  { value: 'AKST', text: 'Alaskan Standard Time (AKST)' },
  { value: 'HST', text: 'Hawaii-Aleutian Standard Time (HST)' }
]

const selectedCountry = ref()
const selectedLanguage = ref()
const selectedTimeZone = ref()
const selectedCurrency = ref()
</script>

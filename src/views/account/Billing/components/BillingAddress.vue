<template>
  <b-card no-body class="border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
    <b-card-body>
      <div class="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3">
        <i class="ai-map-pin text-primary lead pe-1 me-2"></i>
        <h2 class="h4 mb-0">Billing address</h2>
      </div>
      <b-row class="row-cols-1 row-cols-md-2 g-4">
        <b-col v-for="(item, idx) in addresses" :key="idx">
          <AddressCard :item="item" />
        </b-col>

        <b-col>
          <b-card no-body class="h-100 justify-content-center align-items-center border-dashed rounded-3 py-5 px-3 px-sm-4">
            <router-link class="stretched-link d-flex align-items-center fw-semibold text-decoration-none my-sm-3" to="#addAddress" v-b-toggle.addAddress>
              <i class="ai-circle-plus fs-xl me-2"></i>
              Add new address
            </router-link>
          </b-card>
        </b-col>
      </b-row>
      <div class="py-4 mt-sm-2 mt-md-3">
        <h3 class="h6 mb-1">Tax location</h3>
        <p class="mb-0">United States - 10% VAT</p>
      </div>
      <div class="alert alert-info d-flex mb-0">
        <i class="ai-circle-info fs-xl me-2"></i>
        <p class="mb-0">Your text location determines the taxes that are applied to your bill. <a href="#" class="alert-link">Learn more</a></p>
      </div>
    </b-card-body>
  </b-card>

  <b-modal size="lg" header-class="border-0" body-class="py-0" hideFooter title="Add new address" title-tag="h4" centered class="fade" id="addAddress" data-bs-backdrop="static" tabindex="-1" role="dialog">
    <b-form class="modal-body needs-validation pt-0">
      <div class="alert alert-warning d-flex mb-4">
        <i class="ai-triangle-alert fs-xl me-2"></i>
        <p class="mb-0">Updating your address may affect your <a href="#" class="alert-link">Tax Location</a></p>
      </div>
      <b-row class="row-cols-1 row-cols-lg-2 g-4 pb-2 pb-sm-3 mb-4">
        <b-col>
          <b-form-group label="Country" label-for="country">
            <b-form-select class="form-select" required id="country" :options="options1" v-model="selected"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="City" label-for="city">
            <b-form-select class="form-select" required id="city" :options="options2" v-model="selected2"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="State" label-for="state">
            <b-form-select class="form-select" required id="state" :options="options3" v-model="selected3"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Address line 1" label-for="address1">
            <b-form-input id="address1" type="text" />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Address line 2" label-for="address2">
            <b-form-input id="address2" type="text" />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Post code" label-for="postcode">
            <b-form-input id="postcode" type="text" placeholder="XXX-XXXX" />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <b-form-checkbox> Set as primary billing address </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>
      <div class="d-flex flex-column flex-sm-row">
        <b-button variant="secondary" class="mb-3 mb-sm-0" type="reset" data-bs-dismiss="modal">Cancel</b-button>
        <b-button variant="primary" class="ms-sm-3" type="submit">Save address</b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { addresses } from '@/views/account/Billing/data'
import AddressCard from '@/views/account/Billing/components/AddressCard.vue'

const selected = ref(null)
const options1 = [
  { value: null, text: 'Select a country', disabled: true },
  { value: 'Australia', text: 'Australia' },
  { value: 'Belgium', text: 'Belgium' },
  { value: 'Canada', text: 'Canada' },
  { value: 'USA', text: 'USA' }
]

const selected2 = ref(null)
const options2 = [
  { value: null, text: 'Select a city', disabled: true },
  { value: 'Sydney', text: 'Sydney' },
  { value: 'Brussels', text: 'Brussels' },
  { value: 'Toronto', text: 'Toronto' },
  { value: 'Copenhagen', text: 'Copenhagen' },
  { value: 'New York', text: 'New York' }
]

const selected3 = ref(null)
const options3 = [
  { value: null, text: 'Select a state', disabled: true },
  { value: 'Arizona', text: 'Arizona' },
  { value: 'California', text: 'California' },
  { value: 'Florida', text: 'Florida' },
  { value: 'Georgia', text: 'Georgia' },
  { value: 'Texas', text: 'Texas' },
  { value: 'Virginia', text: 'Virginia' }
]
</script>

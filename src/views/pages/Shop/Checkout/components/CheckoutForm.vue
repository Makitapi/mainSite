<template>
  <b-form class="needs-validation container position-relative z-2 pt-5 pb-lg-5 pb-md-4 pb-2">
    <b-row>
      <b-col lg="6">
        <BreadcrumbTwo :class="'mt-5 pt-lg- pb-md-1 pb-lg-3'" subtitle="Checkout" title="Shop" />

        <h1 class="h2 pb-3">Checkout</h1>

        <h3 class="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">1.<span class="text-decoration-underline ms-1">Shipping details</span></h3>
        <b-row class="g-4 pb-4 pb-md-5 mb-3 mb-md-1">
          <b-col sm="6">
            <b-form-group label="First name" label-for="c-fn" label-class="fs-base">
              <b-form-input size="lg" type="text" placeholder="Your first name" required id="c-fn" />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group label="Last name" label-for="c-ln" label-class="fs-base">
              <b-form-input size="lg" type="text" placeholder="Your last name" required id="c-ln" />
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group label="Email" label-for="c-email" label-class="fs-base">
              <div class="position-relative">
                <i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <b-form-input class="ps-5" size="lg" type="email" placeholder="Email address" required id="c-email" />
              </div>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group label="Phone" label-for="c-phone" label-class="fs-base">
              <div class="position-relative">
                <i class="ai-phone fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <b-form-input class="ps-5" size="lg" type="number" data-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}' placeholder="+1 ___ ___ __" required id="c-phone" />
              </div>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group label="Country" label-for="c-country" label-class="fs-base">
              <b-form-select class="form-select-lg" required id="c-country" :options="options1" v-model="selected1"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group label="City" label-for="c-city" label-class="fs-base">
              <b-form-select class="form-select-lg" required id="c-city" :options="options2" v-model="selected2"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group label="Zip code" label-for="c-zip" label-class="fs-base">
              <b-form-input size="lg" type="text" data-format='{"delimiter": "-", "blocks": [3, 4], "uppercase": true}' placeholder="XXX-XXXX" required id="c-zip" />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group label="Address line" label-for="c-address" label-class="fs-base">
              <b-form-input size="lg" type="text" required id="c-address" />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group label="Order notes" label-for="c-notes" label-class="fs-base">
              <b-form-textarea size="lg" rows="5" id="c-notes"></b-form-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group label-class="fs-base text-dark">
              <b-form-checkbox id="same-address" class="text-dark fw-medium"> Billing address same as delivery </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
        <h3 class="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">2.<span class="text-decoration-underline ms-1">Shipping method</span></h3>
        <div class="form-check mb-4">
          <input class="form-check-input" type="radio" name="shipping" id="standard" />
          <label class="form-check-label d-flex justify-content-between" for="standard">
            <span>
              <span class="d-block fs-base text-dark fw-medium mb-1">Standard Delivery</span>
              <span class="text-body">Delivery in 5 - 8 working days</span>
            </span>
            <span class="fs-base text-dark fw-semibold">{{ currency }}8.00</span>
          </label>
        </div>
        <div class="form-check mb-4">
          <input class="form-check-input" type="radio" name="shipping" checked id="express" />
          <label class="form-check-label d-flex justify-content-between" for="express">
            <span>
              <span class="d-block fs-base text-dark fw-medium mb-1">Express Shipping</span>
              <span class="text-body">Delivery in 3 - 5 working days</span>
            </span>
            <span class="fs-base text-dark fw-semibold">{{ currency }}15.00</span>
          </label>
        </div>
        <div class="form-check mb-4">
          <input class="form-check-input" type="radio" name="shipping" id="local" />
          <label class="form-check-label d-flex justify-content-between" for="local">
            <span>
              <span class="d-block fs-base text-dark fw-medium mb-1">Local Pickup</span>
              <span class="text-body">Delivery in 1 - 2 working days</span>
            </span>
            <span class="fs-base text-dark fw-semibold">Free</span>
          </label>
        </div>
        <h3 class="fs-base fw-normal text-body text-uppercase mt-n4 mt-md-n3 pt-5 pb-2 pb-sm-3">3.<span class="text-decoration-underline ms-1">Payment method</span></h3>
        <div class="form-check mb-4">
          <input class="form-check-input" type="radio" name="payment" checked id="card" />
          <label class="form-check-label" for="card">
            <span>
              <span class="d-block fs-base text-dark fw-medium mb-1">Credit Card</span>
              <span class="text-body">Mastercard, Maestro, American Express, Visa are accepted</span>
            </span>
          </label>
        </div>
        <div class="form-check mb-4">
          <input class="form-check-input" type="radio" name="payment" id="cash" />
          <label class="form-check-label" for="cash">
            <span>
              <span class="d-block fs-base text-dark fw-medium mb-1">Cash on Delivery</span>
              <span class="text-body">Pay with cash upon the delivery</span>
            </span>
          </label>
        </div>

        <!-- Place an order button visible on screens > 991px -->
        <div class="d-none d-lg-block pt-5 mt-n3">
          <b-form-checkbox class="mb-4" checked id="save-info"> <span class="text-body-secondary">Your personal information will be used to process your order, to support your experience on this site and for other purposes described in the </span><a class="fw-medium" href="#">privacy policy</a> </b-form-checkbox>
          <b-button variant="primary" size="lg" type="submit" class="mt-4">Place an order</b-button>
        </div>
      </b-col>

      <!-- Order summary -->
      <Order />
    </b-row>

    <!-- Place an order button visible on screens < 992px -->
    <div class="d-lg-none pb-2 mt-2 mt-lg-0 pt-4 pt-lg-5">
      <b-form-checkbox class="mb-4" id="save-info2">
        <span class="text-body-secondary"> Your personal information will be used to process your order, to support your experience on this site and for other purposes described in the </span>
        <a class="fw-medium" href="#">privacy policy</a>
      </b-form-checkbox>
      <button class="btn btn-lg btn-primary w-100 w-sm-auto mt-4" type="submit">Place an order</button>
    </div>
  </b-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { currency } from '@/helpers/constants'
import BreadcrumbTwo from '@/components/BreadcrumbTwo.vue'
import Order from '@/views/pages/Shop/Checkout/components/OrderSummary.vue'

const selected1 = ref(null)
const options1 = [
  { value: null, text: 'Select a country' },
  { value: 'Australia', text: 'Australia' },
  { value: 'Belgium', text: 'Belgium' },
  { value: 'Canada', text: 'Canada' },
  { value: 'Denmark', text: 'Denmark' },
  { value: 'USA', text: 'USA' }
]
const selected2 = ref(null)
const options2 = [
  { value: null, text: 'Select a city' },
  { value: 'Sydney', text: 'Sydney' },
  { value: 'Brussels', text: 'Brussels' },
  { value: 'Toronto', text: 'Toronto' },
  { value: 'Copenhagen', text: 'Copenhagen' },
  { value: 'New York', text: 'New York' }
]
</script>

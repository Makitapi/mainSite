<template>
  <b-card no-body class="border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
    <b-card-body>
      <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
        <i class="ai-card text-primary lead pe-1 me-2"></i>
        <h2 class="h4 mb-0">Payment methods</h2>
      </div>
      <div class="alert alert-danger d-flex mb-4">
        <i class="ai-octagon-alert fs-xl me-2"></i>
        <p class="mb-0">Your primary credit card expired on 01/04/2023. Please add a new card or update this one.</p>
      </div>
      <b-row class="row-cols-1 row-cols-md-2 g-4">
        <b-col v-for="(item, idx) in paymentMethod" :key="idx">
          <PaymentMethodCard :item="item" />
        </b-col>

        <b-col>
          <b-card no-body class="h-100 justify-content-center align-items-center border-dashed rounded-3 py-5 px-3 px-sm-4">
            <router-link v-b-toggle.addCard class="stretched-link d-flex align-items-center fw-semibold text-decoration-none" to="#addCard" data-bs-toggle="modal">
              <i class="ai-circle-plus fs-xl me-2"></i>
              Add new payment methods
            </router-link>
          </b-card>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>

  <b-modal class="fade" headerClass="border-0" body-class="py-0" titleTag="h4" title="Add new card" hideFooter id="addCard" centered data-bs-backdrop="static">
    <b-form class="modal-body needs-validation pt-0" novalidate>
      <div class="mb-4">
        <b-form-group label="Name on card" label-for="card-name">
          <b-form-input id="card-name" type="text" placeholder="John Doe" />
        </b-form-group>
      </div>
      <div class="mb-4">
        <label class="form-label" for="card-number">Card number</label>
        <div class="input-group">
          <input class="form-control" type="text" data-format='{"creditCard": true}' placeholder="XXXX XXXX XXXX XXXX" required id="card-number" />
          <div class="input-group-text py-0">
            <div class="credit-card-icon"></div>
          </div>
        </div>
      </div>
      <b-row class="row-cols-2 g-4 pb-2 pb-sm-3 mb-4">
        <b-col>
          <b-form-group label="Expiration date" label-for="card-expiration">
            <b-form-input id="card-expiration" type="text" placeholder="MM/YY" />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="CVV Code" label-for="card-cvv">
            <b-form-input id="card-cvv" type="text" placeholder="XXX" />
          </b-form-group>
        </b-col>
      </b-row>
      <div class="d-flex flex-column flex-sm-row">
        <b-button variant="secondary" class="mb-3 mb-sm-0" type="reset" data-bs-dismiss="modal">Cancel</b-button>
        <b-button variant="primary" class="ms-sm-3" type="submit">Save new card</b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script lang="ts" setup>
import PaymentMethodCard from '@/views/account/Billing/components/PaymentMethodCard.vue'
import { paymentMethod } from '@/views/account/Billing/data'
</script>

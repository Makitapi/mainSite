<template>
  <b-col>
    <b-card no-body class="h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
      <b-card-body>
        <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
          <i class="ai-map-pin text-primary lead pe-1 me-2"></i>
          <h2 class="h4 mb-0">Address</h2>
          <router-link class="btn btn-sm btn-secondary ms-auto" :to="{ name: 'account.settings' }">
            <i class="ai-edit ms-n1 me-2"></i>
            Edit info
          </router-link>
        </div>
        <div class="d-flex align-items-center pb-1 mb-2">
          <h3 class="h6 mb-0 me-3">Shipping address</h3>
          <span class="badge bg-primary bg-opacity-10 text-primary">Primary</span>
        </div>
        <p class="mb-0">401 Magnetic Drive Unit 2,<br />Toronto, Ontario, M3J 3H9<br />Canada</p>
        <div class="d-flex align-items-center pt-4 pb-1 my-2">
          <h3 class="h6 mb-0 me-3">Billing address 1</h3>
          <span class="badge bg-primary bg-opacity-10 text-primary">Primary</span>
        </div>
        <p class="mb-0">314 Robinson Lane,<br />Wilmington, DE 19805,<br />USA</p>
      </b-card-body>
    </b-card>
  </b-col>
</template>

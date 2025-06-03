<template>
  <b-card no-body class="border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
    <b-card-body>
      <div class="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3">
        <i class="ai-bell text-primary lead pe-1 me-2"></i>
        <h2 class="h4 mb-0">Notifications</h2>
        <button class="btn btn-sm btn-outline-secondary ms-auto" type="button" data-bs-toggle="checkbox" data-bs-target="#checkboxList">Toggle all</button>
      </div>
      <div id="checkboxList">
        <div class="form-check form-switch d-flex pb-md-2 mb-4">
          <input class="form-check-input flex-shrink-0" type="checkbox" checked id="product-sold" />
          <label class="form-check-label ps-3 ps-sm-4" for="product-sold">
            <span class="h6 d-block mb-2">Product sold notifications</span>
            <span class="fs-sm text-body-secondary">Send an email when someone purchased one of my products</span>
          </label>
        </div>
        <div class="form-check form-switch d-flex pb-md-2 mb-4">
          <input class="form-check-input flex-shrink-0" type="checkbox" checked id="product-update" />
          <label class="form-check-label ps-3 ps-sm-4" for="product-update">
            <span class="h6 d-block mb-2">Product update notifications</span>
            <span class="fs-sm text-body-secondary">Send an email when a product I've purchased is updated</span>
          </label>
        </div>
        <div class="form-check form-switch d-flex pb-md-2 mb-4">
          <input class="form-check-input flex-shrink-0" type="checkbox" id="product-comment" />
          <label class="form-check-label ps-3 ps-sm-4" for="product-comment">
            <span class="h6 d-block mb-2">Product comment notifications</span>
            <span class="fs-sm text-body-secondary">Send an email when someone comments on one of my products</span>
          </label>
        </div>
        <div class="form-check form-switch d-flex pb-md-2 mb-4">
          <input class="form-check-input flex-shrink-0" type="checkbox" checked id="product-review" />
          <label class="form-check-label ps-3 ps-sm-4" for="product-review">
            <span class="h6 d-block mb-2">Product review notifications</span>
            <span class="fs-sm text-body-secondary">Send an email when someone leaves a review with his/her rating</span>
          </label>
        </div>
      </div>
      <div class="form-check form-switch d-flex">
        <input class="form-check-input flex-shrink-0" type="checkbox" disabled id="daily-summary" />
        <label class="form-check-label opacity-100 ps-3 ps-sm-4" for="daily-summary">
          <span class="h6 text-body-secondary d-block mb-2">Daily summary emails<span class="badge bg-danger bg-opacity-10 text-danger ms-3">Only for premium</span></span>
          <span class="fs-sm text-body-secondary">Send an email when someone leaves a review with his/her rating</span>
        </label>
      </div>
    </b-card-body>
  </b-card>
</template>

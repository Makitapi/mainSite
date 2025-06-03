<template>
  <b-container class="mb-2 mb-md-3 mb-xl-4 pb-2" data-bs-theme="dark">
    <div class="position-relative bg-dark rounded-5 overflow-hidden p-md-5 p-4">
      <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, 0.03)"></div>
      <div class="position-relative p-xl-5 p-md-4 py-4 px-sm-3">
        <h2 class="h1 pb-md-4 pb-3 mt-n2">Stay up to date with important news!</h2>
        <b-row class="gy-md-5 gy-4 gx-xl-5">
          <b-col lg="7">
            <b-row class="row-cols-sm-3 row-cols-2 gy-lg-4 gy-3 gx-xl-4 gx-sm-3 gx-2">
              <b-col>
                <div class="mb-0">
                  <b-form-checkbox id="advert-updates">
                    <label class="fs-base fw-medium">Advertising Updates</label>
                  </b-form-checkbox>
                </div>
              </b-col>
              <b-col>
                <div class="mb-0">
                  <b-form-checkbox id="newsletter">
                    <label class="fs-base fw-medium">Daily Newsletter</label>
                  </b-form-checkbox>
                </div>
              </b-col>
              <b-col>
                <div class="mb-0">
                  <b-form-checkbox id="week-in-review">
                    <label class="fs-base fw-medium">Week in Review</label>
                  </b-form-checkbox>
                </div>
              </b-col>
              <b-col>
                <div class="mb-0">
                  <b-form-checkbox id="inspiration">
                    <label class="fs-base fw-medium">Inspiration</label>
                  </b-form-checkbox>
                </div>
              </b-col>
              <b-col>
                <div class="mb-0">
                  <b-form-checkbox id="psychology">
                    <label class="fs-base fw-medium">Psychology</label>
                  </b-form-checkbox>
                </div>
              </b-col>
              <b-col>
                <div class="mb-0">
                  <b-form-checkbox id="design">
                    <label class="fs-base fw-medium">Design</label>
                  </b-form-checkbox>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="5">
            <div class="input-group rounded-pill">
              <b-form-input type="email" placeholder="Your email" />
              <b-button variant="primary" class="rounded-pill" type="button">Button</b-button>
            </div>
            <div class="form-text mt-3 fs-sm">* Yes, I agree to the <a href="#">terms</a> and <a href="#"> privacy policy</a></div>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script lang="ts" setup></script>

<template>
  <b-container class="pt-md-2 pt-lg-4 pt-xl-5">
    <b-row class="align-items-center mt-2 mt-sm-0 pt-4 pt-sm-5">
      <b-col md="6" lg="7" xxl="8" class="order-md-2 pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0">
        <div class="position-relative ms-md-auto" style="max-width: 636px">
          <div class="position-absolute bottom-0 start-0 w-100 bg-secondary rounded-5" style="height: 91.5%" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="300"></div>
          <div class="position-relative z-2 pb-4 pb-sm-5">
            <b-tabs end nav-class="justify-content-center" content-class="pb-1 mb-1" :noNavStyle="true" navItemClass="p-0 m-1" activeNavItemClass="border rounded">
              <b-tab>
                <template #title>
                  <div class="nav-link border-0 p-0" data-bs-toggle="tab" data-bs-target="#gray">
                    <input class="btn-check" type="radio" name="color" data-binded-label="colorOption" value="Gray light" id="gray-color" />
                    <label class="btn btn-icon btn-xs btn-outline-secondary rounded-circle" for="gray-color" style="width: 1.25rem; height: 1.25rem">
                      <span class="d-block rounded-circle" style="width: 0.75rem; height: 0.75rem; background-color: #576071"></span>
                    </label>
                  </div>
                </template>
                <img class="d-block mx-auto" :src="productGray" width="486" alt="Gray" />
                <div class="h6 fs-sm text-center pt-4" id="colorOption">Gray dream</div>
              </b-tab>
              <b-tab>
                <template #title>
                  <div class="nav-link border-0 p-0" data-bs-toggle="tab" data-bs-target="#blue">
                    <input class="btn-check" type="radio" name="color" data-binded-label="colorOption" value="Blue sky" id="blue-color" />
                    <label class="btn btn-icon btn-xs btn-outline-secondary rounded-circle" for="blue-color" style="width: 1.25rem; height: 1.25rem">
                      <span class="d-block rounded-circle" style="width: 0.75rem; height: 0.75rem; background-color: #a1b7d9"></span>
                    </label>
                  </div>
                </template>
                <img class="d-block mx-auto" :src="productBlue" width="486" alt="Blue" />
                <div class="h6 fs-sm text-center pt-4" id="colorOption">Blue dream</div>
              </b-tab>
              <b-tab>
                <template #title>
                  <div class="nav-link border-0 p-0" data-bs-toggle="tab" data-bs-target="#green">
                    <input class="btn-check" type="radio" name="color" data-binded-label="colorOption" value="Green day" id="green-color" />
                    <label class="btn btn-icon btn-xs btn-outline-secondary rounded-circle" for="green-color" style="width: 1.25rem; height: 1.25rem">
                      <span class="d-block rounded-circle" style="width: 0.75rem; height: 0.75rem; background-color: #b3cca3"></span>
                    </label>
                  </div>
                </template>
                <img class="d-block mx-auto" :src="productGreen" width="486" alt="Green" />
                <div class="h6 fs-sm text-center pt-4" id="colorOption">Green dream</div>
              </b-tab>
              <b-tab>
                <template #title>
                  <div class="nav-link border-0 p-0" data-bs-toggle="tab" data-bs-target="#pink">
                    <input class="btn-check" type="radio" name="color" data-binded-label="colorOption" value="Pink dream" id="pink-color" />
                    <label class="btn btn-icon btn-xs btn-outline-secondary rounded-circle" for="pink-color" style="width: 1.25rem; height: 1.25rem">
                      <span class="d-block rounded-circle" style="width: 0.75rem; height: 0.75rem; background-color: #fda9a9"></span>
                    </label>
                  </div>
                </template>
                <img class="d-block mx-auto" :src="productPink" width="486" alt="Pink" />
                <div class="h6 fs-sm text-center pt-4" id="colorOption">Pink dream</div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </b-col>
      <b-col md="6" lg="5" xxl="4" class="order-md-1">
        <div class="pe-md-4 pe-xl-0">
          <h2 class="h1 pb-md-2 pb-xl-3">
            <span style="background: linear-gradient(90.72deg, #cbfdb1 3.49%, #acbff1 50.67%, #efa7ec 100.79%); -webkit-background-clip: text; -webkit-text-fill-color: transparent">Multicolor</span>
            for those who like to be bright and stand out
          </h2>
          <p class="mb-0">Turpis nullam netus sed aliquam consectetur at felis consequat tincidunt orci varius arcu urna neque eget maecenas consequat lacus habitasse adipiscing.</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts" setup>
import productGray from '@/assets/img/landing/product/colors/gray.png'
import productBlue from '@/assets/img/landing/product/colors/blue.png'
import productGreen from '@/assets/img/landing/product/colors/green.png'
import productPink from '@/assets/img/landing/product/colors/pink.png'
</script>

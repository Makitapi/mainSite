<template>
  <b-card no-body class="border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
    <b-card-body>
      <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
        <i class="ai-cart text-primary lead pe-1 me-2"></i>
        <h2 class="h4 mb-0">Orders</h2>
        <router-link class="btn btn-sm btn-secondary ms-auto" :to="{ name: 'account.orders' }">View all</router-link>
      </div>

      <b-accordion buttonClass="d-flex fs-4 fw-normal  text-decoration-none py-3 collapsed" class="accordion-alt accordion-orders" id="orders">
        <b-accordion-item v-for="(order, idx) in orders" :key="idx" :class="orders.length - 1 === idx ? 'border-bottom' : ''" class="border-top mb-0">
          <template #title>
            <div class="d-flex justify-content-between w-100" style="max-width: 440px">
              <div class="me-3 me-sm-4">
                <div class="fs-sm text-body-secondary">{{ order.id }}</div>
                <span class="badge bg-opacity-10 fs-xs" :class="order.status === 'in-progress' ? 'bg-info text-info' : order.status === 'canceled' ? 'bg-danger text-danger' : 'bg-success text-success'">{{ kebabToTitleCase(order.status) }}</span>
              </div>
              <div class="me-3 me-sm-4">
                <div class="d-none d-sm-block fs-sm text-body-secondary mb-2">Order date</div>
                <div class="d-sm-none fs-sm text-body-secondary mb-2">Date</div>
                <div class="fs-sm fw-medium text-dark">{{ order.orderDate }}</div>
              </div>
              <div class="me-3 me-sm-4">
                <div class="fs-sm text-body-secondary mb-2">Total</div>
                <div class="fs-sm fw-medium text-dark">{{ currency }}{{ order.total }}</div>
              </div>
            </div>
            <div class="accordion-button-img d-none d-sm-flex ms-auto">
              <div class="mx-1" v-for="(image, idx) in order.images" :key="idx">
                <img :src="image" width="48" alt="Product" />
              </div>
            </div>
          </template>
          <div class="accordion-body">
            <div class="table-responsive pt-1">
              <table class="table align-middle w-100" style="min-width: 450px">
                <tbody>
                  <tr v-for="(product, idx) in order.products" :key="idx">
                    <td class="border-0 py-1 px-0">
                      <div class="d-flex align-items-center">
                        <router-link class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" :to="{ name: 'shop.products', params: { id: 'V00273124' } }">
                          <img :src="product.image" width="110" alt="Product" />
                        </router-link>
                        <div class="ps-3 ps-sm-4">
                          <h4 class="h6 mb-2">
                            <router-link :to="{ name: 'shop.products', params: { id: 'V00273124' } }">{{ product.name }}</router-link>
                          </h4>
                          <div class="text-body-secondary fs-sm me-3">
                            Color: <span class="text-dark fw-medium">{{ product.color }}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                      <div class="fs-sm text-body-secondary mb-2">Quantity</div>
                      <div class="fs-sm fw-medium text-dark">{{ product.quantity }}</div>
                    </td>
                    <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                      <div class="fs-sm text-body-secondary mb-2">Price</div>
                      <div class="fs-sm fw-medium text-dark">{{ currency }}{{ product.price }}</div>
                    </td>
                    <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                      <div class="fs-sm text-body-secondary mb-2">Total</div>
                      <div class="fs-sm fw-medium text-dark">{{ currency }}{{ product.total }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-secondary rounded-1 p-4 my-2">
              <b-row>
                <b-col sm="5" md="3" lg="4" class="mb-3 mb-md-0">
                  <div class="fs-sm fw-medium text-dark mb-1">Payment:</div>
                  <div class="fs-sm">Upon the delivery</div>
                  <a class="btn btn-link py-1 px-0 mt-2" href="#">
                    <i class="ai-time me-2 ms-n1"></i>
                    Order history
                  </a>
                </b-col>
                <b-col sm="7" md="5" class="mb-4 mb-md-0">
                  <div class="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                  <div class="fs-sm">{{ order.deliveryAddress }}</div>
                </b-col>
                <b-col md="4" lg="3" class="text-md-end">
                  <button class="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button">
                    <i class="ai-star me-2 ms-n1"></i>
                    Leave a review
                  </button>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-accordion-item>
      </b-accordion>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { kebabToTitleCase } from '@/helpers/change-casing'
import { currency } from '@/helpers/constants'
import { orders } from '@/views/account/OverView/data'
</script>

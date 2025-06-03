<template>
  <AccountLayout>
    <b-col lg="9" class="pt-4 pb-2 pb-sm-4">
      <div class="d-flex align-items-center mb-4">
        <h1 class="h2 mb-0">Orders</h1>
        <b-form-select class="form-select ms-auto" style="max-width: 200px" required :options="options" v-model="selected"></b-form-select>
      </div>
      <b-card no-body class="border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
        <b-card-body class="pb-4">
          <!-- Orders accordion -->
          <b-accordion class="accordion-alt accordion-orders" id="orders">
            <b-accordion-item v-for="(order, idx) in orders" :key="idx" :class="orders.length - 1 === idx ? 'border-bottom' : ''" class="border-top mb-0" :visible="idx === 2">
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
                            <router-link class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" :to="product.link">
                              <img :src="product.image" width="110" alt="Product" />
                            </router-link>
                            <div class="ps-3 ps-sm-4">
                              <h4 class="h6 mb-2">
                                <router-link :to="product.link">{{ product.name }} </router-link>
                              </h4>
                              <div class="text-body-secondary fs-sm me-3">
                                Color:
                                <span class="text-dark fw-medium">
                                  {{ product.color }}
                                </span>
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
                      <div class="fs-sm">401 Magnetic Drive Unit 2,<br />Toronto, Ontario, M3J 3H9, Canada</div>
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

          <!-- Pagination -->
          <div class="d-sm-flex align-items-center pt-4 pt-sm-5">
            <nav class="order-sm-2 ms-sm-auto mb-4 mb-sm-0" aria-label="Orders pagination">
              <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1<span class="visually-hidden">(current)</span></span>
                </li>
                <li class="page-item">
                  <router-link class="page-link" to="#">2</router-link>
                </li>
                <li class="page-item">
                  <router-link class="page-link" to="#">3</router-link>
                </li>
                <li class="page-item">
                  <router-link class="page-link" to="#">4</router-link>
                </li>
              </ul>
            </nav>
            <button class="btn btn-primary w-100 w-sm-auto order-sm-1 ms-sm-auto me-sm-n5" type="button">Load more orders</button>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </AccountLayout>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers/constants'
import { orders } from '@/views/account/Orders/data'
import AccountLayout from '@/layouts/AccountLayout.vue'
import { ref } from 'vue'
import { kebabToTitleCase } from '@/helpers/change-casing'

const selected = ref('All tme')
const options = [
  { value: 'All tme', text: 'For all time' },
  { value: 'Last week', text: 'Last week' },
  { value: 'Last month', text: 'Last month' },
  { value: 'Last month', text: 'Last month' },
  { value: 'In progress', text: 'In progress' },
  { value: 'Canceled', text: 'Canceled' },
  { value: 'Delivered', text: 'Delivered' }
]
</script>

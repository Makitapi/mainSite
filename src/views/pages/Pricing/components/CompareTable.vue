<template>
  <div class="text-center pt-md-1 pt-lg-2">
    <button v-b-toggle.comparePlans class="btn btn-more btn-link fs-4" type="button" data-show-label="Compare plans" data-hide-label="Compare plans" data-bs-toggle="collapse" data-bs-target="#comparePlans" aria-label="Compare plans"></button>
  </div>
  <b-collapse id="comparePlans" visible>
    <div class="table-responsive pt-sm-2 pt-lg-3">
      <table class="table text-center text-nowrap">
        <thead>
          <tr>
            <th scope="col" class="border-0 py-3">&nbsp;</th>
            <th scope="col" class="border-0 py-3"><span class="h5 mb-0">Light</span></th>
            <th scope="col" class="border-0 py-3"><span class="h5 mb-0">Premium</span></th>
            <th scope="col" class="border-0 py-3"><span class="h5 mb-0">Medium</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
              <span class="text-body fw-medium">Billed monthly</span>
            </th>
            <td class="border-0 bg-secondary py-3">
              <span class="text-dark">{{ currency }}18</span>
            </td>
            <td class="border-0 bg-secondary py-3">
              <span class="text-dark">{{ currency }}72</span>
            </td>
            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
              <span class="text-dark">{{ currency }}36</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="border-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                Members
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 py-3"><span class="text-dark">Just you</span></td>
            <td class="border-0 py-3"><span class="text-dark">Unlimited</span></td>
            <td class="border-0 py-3"><span class="text-dark">3 members</span></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                Guest access
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 bg-secondary py-3"><span class="text-dark">Just you</span></td>
            <td class="border-0 bg-secondary py-3"><span class="text-dark">Unlimited</span></td>
            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><span class="text-dark">3 members</span></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                File uploads
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 py-3"><span class="text-dark">2 GB</span></td>
            <td class="border-0 py-3"><span class="text-dark">30 GB</span></td>
            <td class="border-0 py-3"><span class="text-dark">10 GB</span></td>
          </tr>
          <tr>
            <th scope="col" class="border-0 text-start pt-4 pb-3 ps-4">
              <div class="h5 pt-1 mb-0">Collaboration</div>
            </th>
            <th scope="col" class="border-0 py-3">&nbsp;</th>
            <th scope="col" class="border-0 py-3">&nbsp;</th>
            <th scope="col" class="border-0 py-3">&nbsp;</th>
          </tr>
          <tr>
            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
              <span class="text-body fw-medium">Real-time collaboration</span>
            </th>
            <td class="border-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                Link sharing
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 py-3"><i class="ai-check fs-xl text-success"></i></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                Collaborative workspace
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 bg-secondary py-3"><i class="ai-cross fs-xl text-danger"></i></td>
            <td class="border-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                Filter views
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 py-3"><span class="text-dark">3</span></td>
            <td class="border-0 py-3"><span class="text-dark">Unlimited</span></td>
            <td class="border-0 py-3"><span class="text-dark">12</span></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                Teams
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 bg-secondary py-3"><i class="ai-cross fs-xl text-danger"></i></td>
            <td class="border-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
          </tr>
          <tr>
            <th scope="col" class="border-0 text-start pt-4 pb-3 ps-4">
              <div class="h5 pt-3 mb-0">Features</div>
            </th>
            <th scope="col" class="border-0 py-3">&nbsp;</th>
            <th scope="col" class="border-0 py-3">&nbsp;</th>
            <th scope="col" class="border-0 py-3">&nbsp;</th>
          </tr>
          <tr>
            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
              <span class="text-body fw-medium">Web, desktop, &amp; mobile apps</span>
            </th>
            <td class="border-0 bg-secondary py-3"><i class="ai-cross fs-xl text-danger"></i></td>
            <td class="border-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                Reminders
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 py-3"><i class="ai-check fs-xl text-success"></i></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
              <span class="text-body fw-medium">Priorities</span>
            </th>
            <td class="border-0 bg-secondary py-3"><i class="ai-cross fs-xl text-danger"></i></td>
            <td class="border-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                Comments
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 py-3"><i class="ai-check fs-xl text-success"></i></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
              <span class="text-body fw-medium">Integrations</span>
            </th>
            <td class="border-0 bg-secondary py-3"><span class="text-dark">5</span></td>
            <td class="border-0 bg-secondary py-3"><span class="text-dark">Unlimited</span></td>
            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><span class="text-dark">15</span></td>
          </tr>
          <tr>
            <th scope="col" class="border-0 text-start pt-4 pb-3 ps-4">
              <div class="h5 pt-3 mb-0">Admin &amp; security</div>
            </th>
            <th scope="col" class="border-0 py-3">&nbsp;</th>
            <th scope="col" class="border-0 py-3">&nbsp;</th>
            <th scope="col" class="border-0 py-3">&nbsp;</th>
          </tr>
          <tr>
            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                Admin &amp; member roles
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 bg-secondary py-3"><i class="ai-cross fs-xl text-danger"></i></td>
            <td class="border-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><i class="ai-cross fs-xl text-danger"></i></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 text-start py-3 ps-4"><span class="text-body fw-medium">Team billing</span></th>
            <td class="border-0 py-3"><i class="ai-cross fs-xl text-danger"></i></td>
            <td class="border-0 py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 py-3"><i class="ai-cross fs-xl text-danger"></i></td>
          </tr>
          <tr>
            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
              <span class="d-flex align-items-center text-body fw-medium">
                Priority support
                <i class="ai-circle-info fs-lg ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true" data-bs-content="Feature description text"></i>
              </span>
            </th>
            <td class="border-0 bg-secondary py-3"><i class="ai-cross fs-xl text-danger"></i></td>
            <td class="border-0 bg-secondary py-3"><i class="ai-check fs-xl text-success"></i></td>
            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><i class="ai-cross fs-xl text-danger"></i></td>
          </tr>
          <tr>
            <td class="border-0 pt-4">&nbsp;</td>
            <td class="border-0 pt-4">
              <button class="btn btn-outline-primary mt-3" type="button">Get started {{ currency }}18</button>
            </td>
            <td class="border-0 pt-4">
              <button class="btn btn-outline-primary mt-3" type="button">Get started {{ currency }}72</button>
            </td>
            <td class="border-0 pt-4">
              <button class="btn btn-outline-primary mt-3" type="button">Get started {{ currency }}36</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </b-collapse>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers/constants'
</script>

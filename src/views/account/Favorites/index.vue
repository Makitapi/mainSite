<template>
  <AccountLayout>
    <b-col lg="9" class="pt-4 pb-2 pb-sm-4">
      <div class="d-flex align-items-center mb-4">
        <h1 class="h2 mb-0">Favorites <span class="fs-base fw-normal text-body-secondary">(6 items)</span></h1>
        <button class="btn btn-sm btn-outline-danger ms-auto" type="button">
          <i class="ai-trash ms-n1 me-2"></i>
          Clear all
        </button>
      </div>
      <FavoriteItems />
    </b-col>
  </AccountLayout>
</template>

<script lang="ts" setup>
import AccountLayout from '@/layouts/AccountLayout.vue'
import FavoriteItems from '@/views/account/Favorites/components/FavoriteItems.vue'
</script>

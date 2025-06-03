<template>
  <b-card no-body class="border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
    <b-card-body class="pb-4">
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <b-col class="pb-2 pb-sm-3" v-for="(item, idx) in favorites" :key="idx">
          <ItemCard :item="item" @remove-item="removeItem" />
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import ItemCard from '@/views/account/Favorites/components/ItemCard.vue'
import { favoriteProducts } from '@/assets/products'
import { ref } from 'vue'

const favorites = ref(favoriteProducts)

const removeItem = (productId: string) => {
  favorites.value = favorites.value.filter((item) => item.id != productId)
}
</script>

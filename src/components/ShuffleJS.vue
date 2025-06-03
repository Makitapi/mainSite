<template>
  <div class="masonry-filterable">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Shuffle from 'shufflejs'
import ImageLoaded from 'imagesloaded'

onMounted(() => {
  const grid = document.querySelectorAll('.masonry-grid')
  let masonry: any
  if (grid === null) return
  for (let i = 0; i < grid.length; i++) {
    masonry = new Shuffle(grid[i] as HTMLElement, {
      itemSelector: '.masonry-grid-item',
      sizer: '.masonry-grid-item'
    })
    ImageLoaded(grid[i]).on('progress', () => {
      masonry.layout()
    })

    // Filtering
    const filtersWrap = grid[i].closest('.masonry-filterable')
    if (filtersWrap === null) return
    const filters = filtersWrap.querySelectorAll('.masonry-filters [data-group]')
    for (let n = 0; n < filters.length; n++) {
      filters[n].addEventListener('click', function (e: any) {
        const current = filtersWrap.querySelector('.masonry-filters .active')
        const target = (e.target as HTMLDivElement).dataset.group
        if (current !== null) {
          current.classList.remove('active')
        }
        ;(e.target as HTMLDivElement).classList.add('active')
        masonry.filter(target)
        e.preventDefault()
      })
    }
  }
})
</script>

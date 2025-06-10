<template>
  <b-row class="gy-3">
    <b-col md="8" lg="12" xl="8" class="text-center text-sm-start">
      <div class="border rounded-3 p-4">
        <h2 class="h6 mb-4">Purchases from devices, %</h2>
        <div class="px-sm-4 my-n4 my-sm-n5">
          <canvas ref="canvasRef" :height="455" :width="455"></canvas>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { Chart, type ChartConfiguration } from 'chart.js/auto'
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

const config: ChartConfiguration = {
  type: 'pie',
  data: {
    labels: ['Mobile - 64%', 'Desktop - 19%', 'Tablet - 10%', 'Other - 7%'],
    datasets: [
      {
        label: 'Device share, %',
        data: [64, 19, 10, 7],
        borderWidth: 0,
        backgroundColor: ['#0051a3', 'rgba(68,140,116,.64)', 'rgba(68,140,116,.4)', 'rgba(68,140,116,.2)'],
        hoverOffset: 4
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          boxWidth: 12,
          boxHeight: 12,
          useBorderRadius: true,
          borderRadius: 8,
          padding: 20,
          font: {
            size: 15
          }
        }
      }
    }
  }
}
const chart = ref()
onMounted(() => {
  const canvasEl = canvasRef.value
  if (canvasEl) {
    chart.value = new Chart(canvasEl, config)
  }
})

onUnmounted(() => {
  chart.value.clear()
})
</script>

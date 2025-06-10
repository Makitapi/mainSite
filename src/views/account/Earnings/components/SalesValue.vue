<template>
  <b-col md="8">
    <div class="h-100 border rounded-3 p-4">
      <h2 class="h6 text-center text-sm-start mb-4">Sales value, USD</h2>
      <canvas ref="canvasRef" :height="251" :width="503"></canvas>
    </div>
  </b-col>
</template>

<script lang="ts" setup>
import { Chart, type ChartConfiguration } from 'chart.js/auto'
import { onMounted, onUnmounted, ref } from 'vue'

const config: ChartConfiguration = {
  type: 'line',
  data: {
    labels: ['22 Jul', '', '24 Jul', '', '26 Jul', '', '28 Jul', '', '30 Jul', '', '01 Aug', '', '03 Aug', '', '05 Aug'],
    datasets: [
      {
        label: 'Sales, USD',
        fill: true,
        data: [0, 100, 200, 175, 100, 50, 75, 0, 0, 50, 50, 50, 0, 100, 0],
        backgroundColor: 'rgba(68,140,116, 0.1)', // Adjust opacity for better readability
        borderWidth: 2,
        borderColor: 'rgba(68,140,116, 0.6)',
        pointBackgroundColor: '#0051a3',
        pointBorderWidth: 3,
        pointBorderColor: '#0051a3',
        pointHoverBorderColor: '#0051a3',
        pointHoverBorderWidth: 6
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        border: {
          color: 'rgba(133,140,151,.18)'
        },
        grid: {
          color: 'rgba(133,140,151,.18)'
        }
      },
      x: {
        border: {
          color: 'rgba(133,140,151,.18)'
        },
        grid: {
          color: 'rgba(133,140,151,.18)'
        }
      }
    }
  }
}
const canvasRef = ref<HTMLCanvasElement>()

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

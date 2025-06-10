import usaFlag from '@/assets/img/account/flags/usa.png'
import swedenFlag from '@/assets/img/account/flags/sweden.png'
import indiaFlag from '@/assets/img/account/flags/india.png'
import africaFlag from '@/assets/img/account/flags/south-africa.png'
import franceFlag from '@/assets/img/account/flags/france.png'

import type { ChartType, StatesType, CountryType } from '@/views/account/Earnings/types'

export const lineAreaChart: ChartType = {
  //   type: 'line',
  labels: ['22 Jul', '', '24 Jul', '', '26 Jul', '', '28 Jul', '', '30 Jul', '', '01 Aug', '', '03 Aug', '', '05 Aug'],
  datasets: [
    {
      label: 'Sales, USD',
      fill: true,
      data: [0, 100, 200, 175, 100, 50, 75, 0, 0, 50, 50, 50, 0, 100, 0],
      backgroundColor: 'rgba(68,140,116,.1)',
      borderWidth: 2,
      borderColor: 'rgba(68,140,116,.6)',
      pointBackgroundColor: '#0051a3',
      pointBorderWidth: 3,
      pointBorderColor: '#0051a3',
      pointHoverBorderColor: '#0051a3',
      pointHoverBorderWidth: 6
    }
  ],
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

export const pieChart: ChartType = {
  labels: ['Mobile - 64%', 'Desktop - 19%', 'Tablet - 10%', 'Other - 7%'],
  datasets: [
    {
      label: 'Device share, %',
      data: [64, 19, 10, 7],
      borderWidth: 0,
      backgroundColor: ['#448c74', 'rgba(68,140,116,.64)', 'rgba(68,140,116,.4)', 'rgba(68,140,116,.2)']
    }
  ],
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

export const stats: StatesType[] = [
  {
    title: 'Earnings (before taxes)',
    amount: '842.00',
    description: 'Sales 8/1/2023 - 8/15/2023'
  },
  {
    title: 'Your balance',
    amount: '735.00',
    description: 'To be paid on 8/15/2023'
  },
  {
    title: 'Lifetime earnings',
    amount: '9,156.74',
    description: 'Based on list price'
  }
]

export const countries: CountryType[] = [
  {
    name: 'United States',
    image: usaFlag,
    value: '352',
    progress: 48
  },
  {
    name: 'Sweden',
    image: swedenFlag,
    value: '218',
    progress: 30
  },
  {
    name: 'India',
    image: indiaFlag,
    value: '97',
    progress: 14
  },
  {
    name: 'France',
    image: franceFlag,
    value: '40',
    progress: 6
  },
  {
    name: 'South Africa',
    image: africaFlag,
    value: '16',
    progress: 3
  }
]

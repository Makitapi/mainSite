import product1 from '@/assets/img/shop/products/01.png'
import product2 from '@/assets/img/shop/products/02.png'
import product3 from '@/assets/img/shop/products/03.png'
import product4 from '@/assets/img/shop/products/04.png'
import product5 from '@/assets/img/shop/products/05.png'
import product6 from '@/assets/img/shop/products/06.png'
import product7 from '@/assets/img/shop/products/07.png'
import product8 from '@/assets/img/shop/products/08.png'
import product9 from '@/assets/img/shop/products/09.png'
import product10 from '@/assets/img/shop/products/10.png'
import product11 from '@/assets/img/shop/products/11.png'
import product12 from '@/assets/img/shop/products/12.png'
import woodImg from '@/assets/img/shop/pattern/wood.jpg'
import marbleImg from '@/assets/img/shop/pattern/marble.jpg'

export const productList = [
  {
    id: 1,
    name: 'Loft style lamp',
    image: product1,
    price: '21.00',
    mrp: '35.00',
    tag: 'Sale',
    color: ['#576071', '#D5D4D3', '#A1B7D9']
  },
  {
    id: 2,
    name: 'Dispenser for soap',
    image: product2,
    price: '16.00'
  },
  {
    id: 3,
    name: 'Glossy round vase',
    image: product3,
    price: '11.00',
    mrp: '15.00',
    tag: 'Sale',
    color: ['#C0C0C0', '#D9C9A1', '#A1B7D9']
  },
  {
    id: 4,
    name: 'Ceramic flower pot',
    image: product4,
    price: '19.00',
    tag: 'New',
    color: ['#C0C0C0', '#D9C9A1', '#A1B7D9']
  },
  {
    id: 5,
    name: 'Pendant lamp',
    image: product5,
    price: '22.00',
    color: ['#BAB8B7', '#C0C0C0', '#C0C0C0']
  },
  {
    id: 6,
    name: 'Living room table',
    image: product6,
    price: '46.00'
  },
  {
    id: 7,
    name: 'Teapot for hot drinks',
    image: product7,
    price: '17.00'
  },
  {
    id: 8,
    name: 'Analogue wall clock',
    image: product8,
    price: '25.00',
    tag: 'New',
    color: ['#A8C2C0', '#B4A9C3', '#A1B7D9']
  },
  {
    id: 9,
    name: 'Scented candle',
    image: product9,
    price: '13.00'
  },
  {
    id: 10,
    name: 'Matte color pitcher',
    image: product10,
    price: '11.00',
    mrp: '15.00',
    tag: 'Sale',
    color: ['#AEA6A6', '#D9C9A1', '#A1B7D9']
  },
  {
    id: 11,
    name: 'Plate with granite print',
    image: product11,
    price: '9.00'
  },
  {
    id: 12,
    name: 'Exquisite glass vase',
    image: product12,
    price: '23.00'
  }
]

type Items = {
  title: string
  number: number
  checked?: boolean
}

type LivingCategoryType = {
  label: string
  items: Items[]
}

type ColorType = {
  name: string
  value: string
  backgroundColor: string
  image?: string
}

type BrandType = {
  name: string
  value: string
  count: number
}

export const livingCategory: LivingCategoryType[] = [
  {
    label: 'Living room',
    items: [
      {
        title: 'View all',
        number: 697
      },
      {
        title: 'Vases',
        number: 234,
        checked: true
      },
      {
        title: 'Mirrors',
        number: 182
      },
      {
        title: 'Paintings',
        number: 133
      },
      {
        title: 'Furniture',
        number: 24
      },
      {
        title: 'Clocks',
        number: 49,
        checked: true
      },
      {
        title: 'Photo frames',
        number: 75
      }
    ]
  },
  {
    label: 'Kitchen',
    items: [
      {
        title: 'View all',
        number: 813
      },
      {
        title: 'Cutlery',
        number: 387
      },
      {
        title: 'Storage',
        number: 124
      },
      {
        title: 'Waste bins',
        number: 59
      },
      {
        title: 'Holders',
        number: 227
      },
      {
        title: 'Sinks',
        number: 16
      }
    ]
  },
  {
    label: 'Bathroom',
    items: [
      {
        title: 'View all',
        number: 1416
      },
      {
        title: 'Showers',
        number: 113
      },
      {
        title: 'Basins',
        number: 98
      },
      {
        title: 'Dispensers',
        number: 205
      },
      {
        title: 'Cleaning',
        number: 747
      },
      {
        title: 'Holders',
        number: 253
      }
    ]
  },
  {
    label: 'Bedroom',
    items: [
      {
        title: 'View all',
        number: 1219
      },
      {
        title: 'Furniture',
        number: 43
      },
      {
        title: 'Bed linen',
        number: 528
      },
      {
        title: 'Lighting',
        number: 391
      },
      {
        title: 'Storage',
        number: 75
      },
      {
        title: 'Mirrors',
        number: 182
      }
    ]
  }
]

export const color: ColorType[] = [
  {
    name: 'Black',
    value: 'Black',
    backgroundColor: '#1D211F'
  },
  {
    name: 'Soft beige',
    value: 'Soft beige',
    backgroundColor: '#D9C9A1'
  },
  {
    name: 'Bluish sky',
    value: 'Bluish sky',
    backgroundColor: '#A1B7D9'
  },
  {
    name: 'Green grass',
    value: 'Green grass',
    backgroundColor: '#74947D'
  },
  {
    name: 'Woody brown',
    value: 'Woody brown',
    backgroundColor: '#AF8352',
    image: woodImg
  },
  {
    name: 'Gray marble',
    value: 'Gray marble',
    backgroundColor: '#C0C0C0',
    image: marbleImg
  }
]

export const brand: BrandType[] = [
  {
    name: 'Pazolinni',
    value: 'Pazolinni',
    count: 48
  },
  {
    name: 'Tither Room',
    value: 'Tither Room',
    count: 32
  },
  {
    name: 'Moissy Decor',
    value: 'Moissy Decor',
    count: 25
  },
  {
    name: 'Victorio Via',
    value: 'Victorio Via',
    count: 56
  }
]

export const activeFilter = [
  {
    text: 'Vases'
  },
  {
    text: 'Clocks'
  },
  {
    text: 'Tither Room'
  },
  {
    text: '$10 - $50'
  }
]

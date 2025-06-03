import type { CategoryType, ProductType } from '@/types/shop'

import product1Img1 from '@/assets/img/shop/single/gallery/01.png'
import product1Img2 from '@/assets/img/shop/single/gallery/02.png'
import product1Img3 from '@/assets/img/shop/single/gallery/03.png'
import product2 from '@/assets/img/shop/cart/02.png'
import product3 from '@/assets/img/shop/cart/03.png'

import hero01 from '@/assets/img/landing/shop-1/hero/01.png'
import hero02 from '@/assets/img/landing/shop-1/hero/02.png'
import hero03 from '@/assets/img/landing/shop-1/hero/03.png'
import hero04 from '@/assets/img/landing/shop-1/hero/04.png'
import hero05 from '@/assets/img/landing/shop-1/hero/05.png'

import product01 from '@/assets/img/shop/products/01.png'
import product02 from '@/assets/img/shop/products/02.png'
import product03 from '@/assets/img/shop/products/03.png'
import product04 from '@/assets/img/shop/products/04.png'
import product05 from '@/assets/img/shop/products/05.png'
import product06 from '@/assets/img/shop/products/06.png'
import product07 from '@/assets/img/shop/products/07.png'
import product08 from '@/assets/img/shop/products/08.png'
import product09 from '@/assets/img/shop/products/09.png'
import product10 from '@/assets/img/shop/products/10.png'
import product11 from '@/assets/img/shop/products/11.png'
import product12 from '@/assets/img/shop/products/12.png'

import collection1 from '@/assets/img/landing/shop-1/collections/th01.png'
import collection2 from '@/assets/img/landing/shop-1/collections/th02.png'

import shop2Product1 from '@/assets/img/landing/shop-2/products/01.png'
import shop2Product2 from '@/assets/img/landing/shop-2/products/02.png'
import shop2Product3 from '@/assets/img/landing/shop-2/products/03.png'

const categories: CategoryType[] = [
  {
    id: 'cat1',
    name: 'Category 1'
  }
]

export const products: ProductType[] = [
  {
    id: 'V00273124',
    categoryId: categories[0].id,
    category: categories[0],
    name: 'Scented candle',
    description: 'Find aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur neque congue aliqua dolor do amet sint ovar velit.',
    images: [product1Img1, product1Img2, product1Img3],
    price: 19,
    sale: { discount: 20, type: 'percent' },
    stock: 100,
    tag: 'sale',
    attributes: {
      colors: [
        { name: 'Gray Concrete', code: '' },
        { name: 'Soft Beige', code: '' },
        { name: 'Bluish Sky', code: '' },
        { name: 'Green Grass', code: '' },
        { name: 'Woody Brown', code: '' }
      ],
      weights: ['140 g', '260 g', '440 g']
    },
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273125',
    name: 'Exquisite glass vase',
    images: [product2],
    price: 23,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273126',
    name: 'Set for a dinner party of 7 items',
    images: [product3],
    price: 47,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  }
]

export const popularProducts: ProductType[] = [
  {
    id: 'V00273130',
    name: 'Exquisite glass vase',
    images: [hero01],
    price: 19,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273131',
    name: 'Pot for home flowers',
    images: [hero02],
    price: 15,
    sale: { discount: 20, type: 'percent' },
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273132',
    name: 'Ceramic soap dispenser',
    images: [hero03],
    price: 16,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273133',
    name: 'Wooden clock with metal hands',
    images: [hero04],
    price: 14,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273134',
    name: 'Scented candle in ceramic shell',
    images: [hero05],
    price: 13,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  }
]

export const trendingProducts: ProductType[] = [
  {
    id: 'V00273141',
    name: 'Loft style lamp',
    images: [product01],
    price: 35,
    sale: { discount: 14, type: 'amount' },
    tag: 'sale',
    attributes: {
      colors: [
        { name: 'Dark gray', code: '#576071' },
        { name: 'Light gray', code: '#d5d4d3' },
        { name: 'Blue', code: '#a1b7d9' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273142',
    name: 'Dispenser for soap',
    images: [product02],
    price: 16,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273143',
    name: 'Glossy round vase',
    images: [product03],
    price: 15,
    sale: { discount: 4, type: 'amount' },
    tag: 'sale',
    attributes: {
      colors: [
        { name: 'Light gray', code: '#d5d4d3' },
        { name: 'Dark gray', code: '#576071' },
        { name: 'Blue', code: '#a1b7d9' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273144',
    name: 'Scented candle',
    images: [product09],
    price: 13,
    tag: 'new',
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273145',
    name: 'Living room table',
    images: [product06],
    price: 46,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  }
]

export const collections: ProductType[] = [
  {
    id: 'V00273150',
    name: 'Set for a dinner party of 7 items',
    images: [collection1],
    price: 116,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273151',
    name: 'A set of flowerpots for the living room',
    images: [collection2],
    price: 78,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  }
]

export const newArrivals: ProductType[] = [
  {
    id: 'V00273160',
    name: 'The Sunshine Box (6)',
    images: [shop2Product1],
    price: 18,
    tag: 'new',
    link: { name: '', params: { id: '' } }
  },
  {
    id: 'V00273161',
    name: 'Fromage (9)',
    images: [shop2Product2],
    price: 24,
    tag: 'new',
    link: { name: '', params: { id: '' } }
  },
  {
    id: 'V00273162',
    name: 'Rainbow (20)',
    images: [shop2Product3],
    price: 58,
    tag: 'new',
    link: { name: '', params: { id: '' } }
  },
  {
    id: 'V00273163',
    name: 'Fromage (9)',
    images: [shop2Product2],
    price: 24,
    tag: 'new',
    link: { name: '', params: { id: '' } }
  }
]

export const favoriteProducts: ProductType[] = [
  {
    id: 'V00273171',
    name: 'Dispenser for soap',
    images: [product02],
    price: 16,
    stock: 100,
    link: { name: 'shop.products', params: { id: 'V00273171' } }
  },
  {
    id: 'V00273172',
    name: 'Loft style lamp',
    images: [product01],
    price: 35,
    sale: { discount: 25, type: 'percent' },
    stock: 100,
    tag: 'sale',
    attributes: {
      colors: [
        { name: 'Dark gray', code: '#576071' },
        { name: 'Light gray', code: '#d5d4d3' },
        { name: 'Blue', code: '#a1b7d9' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273172' } }
  },
  {
    id: 'V00273173',
    name: 'Glossy round vase',
    images: [product03],
    price: 15,
    stock: 100,
    attributes: {
      colors: [
        { name: 'Light gray', code: '#d5d4d3' },
        { name: 'Dark gray', code: '#576071' },
        { name: 'Blue', code: '#a1b7d9' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273173' } }
  },
  {
    id: 'V00273174',
    name: 'Living room table',
    images: [product06],
    price: 46,
    link: { name: 'shop.products', params: { id: 'V00273174' } }
  },
  {
    id: 'V00273175',
    name: 'Ceramic flower pot',
    images: [product04],
    price: 19,
    stock: 100,
    attributes: {
      colors: [
        { name: 'Beige', code: '#d9c9a1' },
        { name: 'Blue', code: '#a1b7d9' },
        { name: 'Light gray', code: '#d5d4d3' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273175' } }
  },
  {
    id: 'V00273176',
    name: 'Pendant lamp',
    images: [product05],
    price: 22,
    stock: 100,
    tag: 'new',
    attributes: {
      colors: [
        { name: 'Gray', code: '#bab8b7' },
        { name: 'Blue', code: '#a1b7d9' },
        { name: 'Beige', code: '#d9c9a1' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273176' } }
  }
]

export const decorationProducts: ProductType[] = [
  {
    id: 'V00273141',
    name: 'Loft style lamp',
    images: [product01],
    price: 35.0,
    tag: 'sale',
    sale: { discount: 40, type: 'percent' },
    attributes: {
      colors: [
        { name: 'Dark gray', code: '#576071' },
        { name: 'Light gray', code: '#d5d4d3' },
        { name: 'Blue', code: '#a1b7d9' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273142',
    name: 'Dispenser for soap',
    images: [product02],
    price: 16,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273143',
    name: 'Glossy round vase',
    images: [product03],
    price: 11,
    sale: { discount: 15, type: 'percent' },
    tag: 'sale',
    attributes: {
      colors: [
        { name: 'Light gray', code: '#d5d4d3' },
        { name: 'Dark gray', code: '#576071' },
        { name: 'Blue', code: '#a1b7d9' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273143',
    name: 'Ceramic flower pot',
    images: [product04],
    price: 19,
    tag: 'new',
    attributes: {
      colors: [
        { name: 'Light gray', code: '#d5d4d3' },
        { name: 'Dark gray', code: '#576071' },
        { name: 'Blue', code: '#a1b7d9' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273144',
    name: 'Pendant lamp',
    images: [product05],
    price: 22,
    attributes: {
      colors: [
        { name: 'Light gray', code: '#d5d4d3' },
        { name: 'Dark gray', code: '#576071' },
        { name: 'Blue', code: '#a1b7d9' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273145',
    name: 'Living room table',
    images: [product06],
    price: 46,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273145',
    name: 'Teapot for hot drinks',
    images: [product07],
    price: 17,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273143',
    name: 'Analogue wall clock',
    images: [product08],
    price: 25,
    tag: 'new',
    attributes: {
      colors: [
        { name: 'Light gray', code: '#a8c2c0' },
        { name: 'Dark gray', code: '#b4a9c3' },
        { name: 'Blue', code: '#a1b7d9' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273145',
    name: 'Scented candle',
    images: [product09],
    price: 13,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273145',
    name: 'Matte color pitcher',
    images: [product10],
    price: 15,
    sale: { discount: 15, type: 'percent' },
    tag: 'sale',
    attributes: {
      colors: [
        { name: 'Light gray', code: '#aea6a6' },
        { name: 'Dark gray', code: '#d9c9a1' },
        { name: 'Blue', code: '#a1b7d9' }
      ]
    },
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273145',
    name: 'Plate with granite print',
    images: [product11],
    price: 9,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  },
  {
    id: 'V00273145',
    name: 'Exquisite glass vase',
    images: [product12],
    price: 23,
    link: { name: 'shop.products', params: { id: 'V00273124' } }
  }
]

export const productData = [{}]

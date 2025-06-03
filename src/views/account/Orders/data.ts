import order1 from '@/assets/img/account/orders/01.png'
import order2 from '@/assets/img/account/orders/02.png'
import order3 from '@/assets/img/account/orders/03.png'
import order4 from '@/assets/img/account/orders/04.png'
import order5 from '@/assets/img/account/orders/05.png'
import order6 from '@/assets/img/account/orders/06.png'

import cartImage1 from '@/assets/img/shop/cart/01.png'
import cartImage2 from '@/assets/img/shop/cart/02.png'
import cartImage4 from '@/assets/img/shop/cart/04.png'
import cartImage5 from '@/assets/img/shop/cart/05.png'
import cartImage6 from '@/assets/img/shop/cart/06.png'
import cartImage7 from '@/assets/img/shop/cart/07.png'
import type { LinkType } from '@/types'

export type Product = {
  image: string
  name: string
  color: string
  quantity: number
  price: number
  total: number
  link: LinkType
}

export type Order = {
  id: string
  status: 'in-progress' | 'canceled' | 'delivered'
  orderDate: string
  total: string
  products: Product[]
  payment: string
  deliveryAddress: string
  images?: string[]
}

export const orders: Order[] = [
  {
    id: '#78A6431D409',
    status: 'in-progress',
    orderDate: 'Jan 27, 2023',
    total: '16.00',
    images: [order1],
    products: [
      {
        image: cartImage1,
        name: 'Candle in concrete bowl',
        color: 'Gray night',
        quantity: 1,
        price: 16,
        total: 16,
        link: { name: 'shop.products', params: { id: 'V00273124' } }
      }
    ],
    payment: 'Upon the delivery',
    deliveryAddress: '401 Magnetic Drive Unit 2, Toronto, Ontario, M3J 3H9, Canada'
  },
  {
    id: '#47H76G09F33',
    status: 'canceled',
    orderDate: 'Sep 14, 2023',
    total: '59.00',
    images: [order2, order3, order4],
    products: [
      {
        image: cartImage4,
        name: 'Analogue wall clock',
        color: 'Turquoise',
        quantity: 1,
        price: 25,
        total: 25,
        link: { name: 'shop.products', params: { id: 'V00273124' } }
      },
      {
        image: cartImage5,
        name: 'Glossy round vase',
        color: 'White',
        quantity: 1,
        price: 15,
        total: 15,
        link: { name: 'shop.products', params: { id: 'V00273124' } }
      },
      {
        image: cartImage6,
        name: 'Ceramic flower pot',
        color: 'Gray concrete',
        quantity: 1,
        price: 19,
        total: 19,
        link: { name: 'shop.products', params: { id: 'V00273124' } }
      }
    ],
    payment: 'Upon the delivery',
    deliveryAddress: '401 Magnetic Drive Unit 2, Toronto, Ontario, M3J 3H9, Canada'
  },
  {
    id: '#34VB5540K83',
    status: 'delivered',
    orderDate: 'Jul 10, 2023',
    total: '38.00',
    images: [order1, order5],
    products: [
      {
        image: cartImage1,
        name: 'Candle in concrete bowl',
        color: 'Gray night',
        quantity: 1,
        price: 16,
        total: 16,
        link: { name: 'shop.products', params: { id: 'V00273124' } }
      },
      {
        image: cartImage2,
        name: 'Exquisite glass vase',
        color: 'Rose',
        quantity: 2,
        price: 11,
        total: 22,
        link: { name: 'shop.products', params: { id: 'V00273124' } }
      }
    ],
    payment: 'Upon the delivery',
    deliveryAddress: '401 Magnetic Drive Unit 2, Toronto, Ontario, M3J 3H9, Canada'
  },
  {
    id: '#502TR872W2',
    status: 'delivered',
    orderDate: 'May 11, 2023',
    total: '17.00',
    images: [order6],
    products: [
      {
        image: cartImage7,
        name: 'Dispenser for soap',
        color: 'White marble',
        quantity: 1,
        price: 17,
        total: 17,
        link: { name: 'shop.products', params: { id: 'V00273124' } }
      }
    ],
    payment: 'Upon the delivery',
    deliveryAddress: '401 Magnetic Drive Unit 2, Toronto, Ontario, M3J 3H9, Canada'
  }
]

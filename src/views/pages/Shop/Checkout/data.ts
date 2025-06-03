import cart1Img from '@/assets/img/shop/cart/01.png'
import cart2Img from '@/assets/img/shop/cart/02.png'
import cart3Img from '@/assets/img/shop/cart/03.png'

export type OrderType = {
  image: string
  title: string
  color?: boolean
  price: string
  del?: string
}

export const orderData: OrderType[] = [
  {
    image: cart1Img,
    title: 'Candle in concrete bowl',
    color: true,
    price: '11.00',
    del: '15.00'
  },
  {
    image: cart2Img,
    title: 'Exquisite glass vase',
    price: '23.00'
  },
  {
    image: cart3Img,
    title: 'Set for a dinner party of 7 items',
    price: '47.00'
  }
]
